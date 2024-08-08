"use client";

import React from 'react'
import { ChevronDown, ChevronRight, LucideIcon, Plus, Router } from 'lucide-react'
import { Id } from '@/convex/_generated/dataModel'
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface ItemProps {
    id?: Id<"documents">;
    documentIcon?: string;
    active?: boolean;
    expanded?: boolean;
    isSearch?: boolean;
    level?: number;
    onExpand?: () => void;
    label: string;
    onClick?: () => void;
    icon: LucideIcon;
}

export const Item = ({
    id,
    label,
    onClick,
    icon: Icon,
    active,
    documentIcon,
    isSearch,
    level = 0,
    onExpand,
    expanded,
}: ItemProps) => {
    const router = useRouter();
    const create = useMutation(api.documents.create);

    const onCreate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        if (!id) return;
        const promise = create({
            title: "Untitled",
            parentDocument: id
        }).then((documentId) => {
            if (!expanded) {
                onExpand?.();
            }
            router.push(`/documents/${documentId}`);
        })

        toast.promise(promise, {
            loading: "Creating new note",
            success: "New note created.",
            error: "Failed to create note.",
        })
    }

    const ChevronIcon = expanded ? ChevronDown : ChevronRight

    const handleExpand = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        event.stopPropagation();
        onExpand?.();
    };


    return (
        <div
            onClick={onClick}
            className={cn(
                'group min-h-[27px] text-sm py-1 w-full hover:bg-primary/5 flex items-center text-muted-foreground',
                active && "bg-primary/5 text-primary",
            )}
            role='button'
            style={{
                paddingLeft: level ? `${(level * 12) + 12}px` : "12px",
            }}
        >
            {!!id && (
                <div
                    role="button"
                    className='h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1'
                    onClick={handleExpand}
                >
                    <ChevronIcon className='h-4 w-4 shrink-0 text-muted-foreground' />
                </div>
            )}
            {documentIcon ? (
                <div className='shrink-0 mr-2 text-[10px]'>
                    {documentIcon}
                </div>
            ) : (
                <Icon className='shrink-0 h-[10px] mr-2 text-muted-foreground' />
            )}
            <span className='truncate'>{label}</span>
            {isSearch && (
                <kbd className='pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 mx-2 font-mono text-[.625rem] font-medium text-muted-foreground opacity-100 dark:bg-neutral-700'>
                    <span className='text-xs'>CTRL</span>K
                </kbd>
            )}
            {!!id && (
                <div className='ml-auto flex items-center gap-x-2'>
                    <div
                        role="button"
                        onClick={onCreate}
                        className='rounded-sm opacity-0 hover:bg-neutral-300 group-hover:opacity-100 dark:hover:bg-neutral-600'
                    >
                        <Plus className='h-4 w-4 text-muted-foreground' />
                    </div>
                </div>
            )}
        </div>
    )
}

Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
    return (
        <div
            style={{
                paddingLeft: level ? `${(level * 12) + 25}px` : "12px",
            }}
            className='flex gap-x-2 py-[3px]'
        >
            <Skeleton className='h-4 w-4' />
            <Skeleton className='h-4 w-[30%]' />
        </div>
    )
}