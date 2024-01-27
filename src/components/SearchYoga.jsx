"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { FaSearch } from "react-icons/fa";
import * as z from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    yogaName: z.string().min(1, {
        message: "Yoga name must be at least 1 characters."
    })
});

export default function SearchYoga() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm({
        resolvers: zodResolver(formSchema)
    });

    const findYoga = async yogaName => {
        try {
            const validatedName = formSchema.parse({ yogaName });
            console.log("validatedName", validatedName);
            router.push(`/search?query=${validatedName.yogaName}`);
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError("yogaName", { message: error.issues[0].message });
                return;
            }
            setError("yogaName", { message: "Something went wrong." });
        }
    };

    const onSubmit = data => {
        console.log(data);
        findYoga(data.yogaName); // Change this line to use data.yogaName
    };

    return (
        <div className=''>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className='inline' variant='outline'>
                        <FaSearch />
                    </Button>
                </SheetTrigger>
                <SheetContent side='top'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <SheetHeader>
                            <SheetTitle>Search yoga</SheetTitle>
                            <SheetDescription>
                                Search yoga by English or sanskrit name
                            </SheetDescription>
                        </SheetHeader>
                        <div className='grid gap-4 py-4'>
                            <div className='grid grid-cols-4 items-center gap-4'>
                                <Label
                                    htmlFor='yogaName'
                                    className='text-center'
                                >
                                    Yoga Name
                                </Label>
                                <Input
                                    id='yogaName'
                                    name='yogaName'
                                    {...register("yogaName")}
                                    placeholder='Padahastasana'
                                    className='col-span-3'
                                />
                            </div>
                            <p className='mt-1 text-sm text-red-600'>
                                {errors.yogaName?.message}
                            </p>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type='submit'>Search</Button>
                            </SheetClose>
                        </SheetFooter>
                    </form>
                </SheetContent>
            </Sheet>
        </div>
    );
}
