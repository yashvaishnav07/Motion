import React from 'react'
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from 'next-themes';
import { useEdgeStore } from '@/lib/edgestore';
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor = ({ onChange, initialContent, editable }: EditorProps) => {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore();
    const handleUpload = async (file: File) => {
        const res = await edgestore.publicFiles.upload({
            file,
        })
        return res.url;
    }

    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent ? (JSON.parse(initialContent) as PartialBlock[]) : undefined,
        uploadFile: handleUpload,
    });

    const handleOnChange = () => {
        debugger
        onChange(JSON.stringify(editor.document, null, 2));
    }

    return (
        <div>
            <BlockNoteView
                editor={editor}
                editable={editable}
                theme={resolvedTheme === "dark" ? "dark" : "light"}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default Editor