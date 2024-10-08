"use client";

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react'
import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className='max-w-4xl space-y-4'>
      <h1 className='text-3xl font-bold md:text-6xl sm:text-5xl'>Write, Plan, Organize, Play </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>Turn ideas into action
        with Motion’s AI-powered workspace.</h3>
      {isLoading && (
        <div className='flex items-start justify-center'>
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button>
          <Link href='/documents'>
            Enter Motion
          </Link>
          <ArrowRight className='h-4 w-4 ml-2' />
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Motion Free
            <ArrowRight className='h-4 w-4 ml-2' />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}

export default Header