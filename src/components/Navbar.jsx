"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
import SearchYoga from "@/components/SearchYoga"

export default function Navbar() {
    
      return (
        <nav className="bg-background/30 sticky top-0 z-20 backdrop-blur-sm  border-b w-full  start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href={"/"}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="italic font-extrabold self-center text-[24px]  whitespace-nowrap text-primary  dark:text-white">
                        YogaGuru
                    </span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 ">
                     <SearchYoga />
                    <ModeToggle />
                    <Button>Get Started</Button>
                </div>
            </div>
        </nav>
    );
}
