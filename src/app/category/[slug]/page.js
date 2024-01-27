import { getParticularCategoryPoses,getAllCategoriesSlug } from "@/services/cmsServices";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { badgeVariants } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";



export const revalidate = 120; // revalidate the data at most every 10 min

export async function generateStaticParams() {
    const allCategoriesSlugs = await getAllCategoriesSlug();
    console.log(allCategoriesSlugs)
    return allCategoriesSlugs.map(category => ({
        slug: category.categorySlug
    }));
}


export default async function Page({ params, searchParams }) {
    const { slug } = params;
    const posesCategory = await getParticularCategoryPoses(slug);
   // console.log(posesCategory);
    const poses = posesCategory.poses;
    // console.log(poses);
    return (
        <div className=''>
            <div className='p-5 flex items-center justify-between flex-col'>
                <h1 className='text-center text-3xl font-bold tracking-tight  sm:text-6xl'>
                    {posesCategory.categoryName}
                </h1>
                <p className='text-center mt-6 text-lg leading-8 text-gray-800 dark:text-stone-300'>
                    {posesCategory.metaDescription}
                </p>
            </div>
            <div className='mt-5'>
                <h1 className='text-3xl font-bold text-center'>Yoga Poses</h1>
                <div
                    id='yoga_poses'
                    className=' px-10 mt-8 flex items-center justify-center flex-col '
                >
                    {poses.length !== 0 ? (
                        poses.map(pose => {
                            return (
                                <Card
                                    key={pose.id}
                                    className='dark:bg-secondary relative my-3 overflow-hidden'
                                >
                                    <CardHeader className='p-0 object-fill  min-h-[100px]  flex items-center justify-center'>
                                        <Image
                                            src={pose.poseImage.url}
                                            width={250}
                                            height={100}
                                            className=' h-[230px] w-full inline px-0.5 overflow-hidden'
                                            alt='Picture of the post'
                                        ></Image>
                                    </CardHeader>
                                    <CardContent>
                                        {pose.posesCategories.map(category => {
                                            return (
                                                <Badge
                                                    className='mr-1'
                                                    variant='blue'
                                                >
                                                    <Link href='/'>
                                                        {category.categoryName}
                                                    </Link>
                                                </Badge>
                                            );
                                        })}

                                        <CardTitle className='text-[20px]'>
                                            {pose.poseName}
                                        </CardTitle>
                                        <p>{pose.poseDescription}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className='mt-0.5'>
                                            <Link
                                                href={`/category/${slug}/${pose.poseSlug}`}
                                            >
                                                Read More
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            );
                        })
                    ) : (
                        <p className='h-[500px] text-center mt-3 text-lg leading-8 text-gray-800 dark:text-stone-300'>
                            Nothing Poses Available Here.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
