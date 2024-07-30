"use client";

import useScrollTop from '@/hooks/useScrollTop'
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from '@clerk/clerk-react'

import React from 'react'
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link'

const Navbar = () => {
    const scrolled = useScrollTop();
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className={cn("fixed top-0 p-6 z-50 bg-background dark:bg-[#1F1F1F] flex items-center w-full", scrolled && "border-b shadow-sm")}>
            <Logo />
            <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
                {isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm">
                                Get Motion Free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/documents">
                                Enter Motion
                            </Link>
                        </Button>
                        <UserButton afterSwitchSessionUrl='/' />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar