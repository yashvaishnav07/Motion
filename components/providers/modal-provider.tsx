"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../modals/setting-modal";

import { CoverImageModal } from "@/components/modals/CoverImageModal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <SettingsModal />
            <CoverImageModal />
        </>
    );
};