import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    getAllPosesCategoriesFeatured,
    getAllPosesFeatured
} from "@/services/cmsServices";
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
import { FaLongArrowAltRight } from "react-icons/fa";

export default async function Home() {
    const posesCategories = await getAllPosesCategoriesFeatured(3);
    // console.log(posesCategories);
    const poses = await getAllPosesFeatured(3);
    console.log(poses);
    return (
        <div className=' relative isolate  pt-14 lg:px-8'>
            <div className='relative'>
                <div
                    className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
                    ariaHidden='true'
                >
                    <div
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc]  sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                    ></div>
                </div>
                <div className='overflow-hidden relative mx-auto max-w-2xl py-10 '>
                    <div className='px-6 hidden sm:mb-8 sm:flex sm:justify-center'>
                        <div className=' z-20 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                            Announcing our next round of funding.{" "}
                            <Link
                                href='/'
                                className='font-semibold text-indigo-600'
                            >
                                <span
                                    className='absolute inset-0'
                                    ariaHidden='true'
                                ></span>
                                Read more <span ariaHidden='true'>&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className='px-6 relative z-20 text-center'>
                        <h1 className=' text-4xl font-bold tracking-tight  sm:text-6xl'>
                            Discover and practice yoga poses online
                        </h1>
                        <p className='mt-6 text-lg leading-8 text-gray-800 dark:text-stone-300'>
                            Learn yoga poses for free online with our
                            comprehensive library of poses. Browse by category,
                            difficulty, or benefit and discover how yoga can
                            improve your health and wellness.
                        </p>
                        <div className='mt-10 flex items-center justify-center gap-x-6'>
                            <Link
                                href='/'
                                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                            >
                                Get started
                            </Link>
                            <Link
                                href='/'
                                className='text-sm font-semibold leading-6 '
                            >
                                Learn more <span ariaHidden='true'>→</span>
                            </Link>
                        </div>
                    </div>
                    <div className='absolute z-10 right-[-35px] bottom-[-45px] '>
                        <img
                            src={"/Banner.png"}
                            alt='banner image'
                            className=' z-0 opacity-70'
                            fill
                        />
                    </div>
                </div>
                <div
                    className='absolute inset-x-0 bottom-[-30px] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
                    ariaHidden='true'
                >
                    <div
                        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#9089fc]  sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                    ></div>
                </div>
            </div>
            <div className='mt-5'>
                <h1 className='text-3xl font-bold text-center'>
                    Yoga Category
                </h1>
                <div
                    id='yoga_categories'
                    className='flex-wrap px-10 mt-5 m-2 flex items-center justify-center flex-col '
                >
                    {posesCategories.map(category => {
                        return (
                            <Card
                                key={category.id}
                                className='max-w-[300px] dark:bg-secondary relative my-3 overflow-hidden'
                            >
                                <CardHeader className='p-0 object-fill  min-h-[100px]  flex items-center justify-center'>
                                    <Image
                                        src={category.image.url}
                                        width={250}
                                        height={100}
                                        className='h-[230px] w-full inline px-0.5 overflow-hidden'
                                        alt='Picture of the post'
                                    ></Image>
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className='text-[20px]'>
                                        {category.categoryName}
                                    </CardTitle>
                                    <p>{category.metaDescription}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button className='mt-0.5'>
                                        <Link
                                            href={`/category/${category.categorySlug}/`}
                                        >
                                            Learn More
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                    <Button className='mt-5 flex items-center justify-center'>
                        <Link href='/category/'> See More </Link>
                        <span
                            className='ml-2 text-primary-forground'
                            ariaHidden='true'
                        >
                            <FaLongArrowAltRight />
                        </span>{" "}
                    </Button>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl font-bold text-center'>
                        Yoga Poses
                    </h1>
                    <div
                        id='yoga_poses'
                        className=' px-10 mt-8 flex items-center justify-center flex-col '
                    >
                        {poses.map(pose => {
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
                                                href={`/category/${pose.posesCategories[0].categorySlug}/${pose.poseSlug}`}
                                            >
                                                Read More
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                        <Button className='mt-5 flex items-center justify-center'>
                            <Link href='/poses/'> See More </Link>
                            <span
                                className='ml-2 text-primary-forground'
                                ariaHidden='true'
                            >
                                <FaLongArrowAltRight />
                            </span>{" "}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
