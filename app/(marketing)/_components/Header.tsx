"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react'

const Header = () => {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl font-bold md:text-6xl sm:text-5xl'>Write, Plan, Organize, Play </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>Turn ideas into action
        with Motion’s AI-powered workspace.</h3>
      <Button>
        Enter Motion
        <ArrowRight className='h-4 w-4 ml-2' />
      </Button>
    </div>
  )
}

export default Header