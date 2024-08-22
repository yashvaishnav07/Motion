"use client";

import { Cover } from "@/components/Cover";
import { Toolbar } from "@/components/Toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
    params: {
        documentId: Id<"documents">;
    };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
    const Editor = useMemo(() => dynamic(() => import("@/components/Editor"), { ssr: false }), [])
    const update = useMutation(api.documents.update);

    const onChange = (content: string) => {
        update({
            id: params.documentId,
            content,
        });
    };

    const document = useQuery(api.documents.getById, {
        documentId: params.documentId,
    });

    if (document === undefined) {
        return <div>Loading....</div>;
    }

    if (document == null) {
        return (
            <div>
                <Cover.Skeleton />
                <div className="mx-auto mt-10 md:max-w-3xl lg:max-w-4xl">
                    <div className="space-y-4 pl-8 pt-4">
                        <Skeleton className="h-14 w-1/2" />
                        <Skeleton className="h-4 w-4/5" />
                        <Skeleton className="h-4 w-2/5" />
                        <Skeleton className="h-4 w-3/5" />
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="pb-40">
            <Cover preview url={document.coverImage} />
            <div className="md:max-w-3xl lg:max-4xl mx-auto">
                <Toolbar preview initialData={document} />
                <Editor editable={false} onChange={onChange} initialContent={document.content} />
            </div>
        </div>
    );
};

export default DocumentIdPage;
