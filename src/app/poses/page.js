import { getAllPoses } from "@/services/cmsServices";
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

export default async function Page() {
    const poses = await getAllPoses();
    // console.log(poses);
    return (
        <div className='mt-5'>
            <h1 className='text-3xl font-bold text-center'>Yoga Poses</h1>
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
                                        <Badge className='mr-1' variant='blue'>
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
            </div>
        </div>
    );
}
