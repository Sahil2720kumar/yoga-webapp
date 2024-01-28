import { getAllPosesCategories } from "@/services/cmsServices";
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
    const posesCategories = await getAllPosesCategories();
    console.log(posesCategories);
    return (
        <div className='mt-5'>
            <h1 className='text-3xl font-bold text-center'>Yoga Category</h1>
            <div
                id='yoga_categories'
                className='flex-wrap m-2 px-10 mt-5 flex items-center justify-center flex-col '
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
                                    <Link href={`/category/${category.categorySlug}`} >Learn More</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
