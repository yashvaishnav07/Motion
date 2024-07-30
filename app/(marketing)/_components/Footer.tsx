import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'

const Footer = () => {
    return (
        <div className='flex items-center w-full p-6 bg-background z-50'>
            <Logo />
            <div className='flex justify-between     w-full md:ml-auto md:justify-end gap-x-2 text-muted-foreground'>
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="sm">
                    Term & Condition
                </Button>
            </div>
        </div>
    )
}

export default Footer