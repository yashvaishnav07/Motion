"use client";

import useScrollTop from '@/hooks/useScrollTop'
import React from 'react'
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';

const Navbar = () => {
    const scrolled = useScrollTop();
    return (
        <div className={cn("fixed top-0 p-6 z-50 bg-background flex items-center w-full", scrolled && "border-b shadow-sm")}>
            <Logo />
            <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar