import { getParticularPose,getAllPosesSlug } from "@/services/cmsServices";
import Image from "next/image";
import Link from "next/link";


export const revalidate = 120; // revalidate the data at most every 10 min

export async function generateStaticParams() {
    const allPosesSlugs = await getAllPosesSlug();
    return allPosesSlugs.map(pose => ({
        slug: pose.poseSlug
    }));
}

export default async function Page({ params, searchParams }) {
    const { pose } = params;
    const data = await getParticularPose(pose);
    // console.log(data)
    return (
        <div className=''>
            <div className='p-3 '>
                <div className='flex items-center justify-center min-h-[200px]'>
                    <Image
                        src={data.poseImage.url}
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='inline px-0.5 w-full h-[100%] overflow-hidden'
                        alt='Picture of the yoga'
                    />
                </div>
                <div className=''>
                    <h1 className='text-[20px] font-bold my-3 '> {data.poseName}</h1>
                     <div
                        dangerouslySetInnerHTML={{
                            __html:data.poseSteps.html
                        }}
                        className='p-2 flex flex-col gap-4 text-[15px] text-gray-900 dark:text-stone-100'
                    ></div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:data.poseContent.html
                        }}
                        className='p-2 flex flex-col gap-4 text-[15px] text-gray-900 dark:text-stone-100'
                    ></div>
                </div>
            </div>
        </div>
    );
}
