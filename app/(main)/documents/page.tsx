"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image"

const Page = () => {

  const { user } = useUser();
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.svg"
        alt="Empty"
        width="400"
        height="400"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.svg"
        alt="Empty"
        width="400"
        height="400"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Motion
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a Note
      </Button>
    </div>
  )
}

export default Page