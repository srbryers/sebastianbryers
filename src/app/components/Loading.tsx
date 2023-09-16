'use client'

import Lottie from "lottie-react";
import animationData from "@/assets/animation-loading.json";

export function Loading({ className, contentWidth }: { className?: string, contentWidth?: string }) {
    return (
        <div className={`flex flex-col items-center justify-center h-full ${className}`}>
            <Lottie animationData={animationData} className={`w-[${contentWidth || '150'}px]`}></Lottie>
        </div>
    )
}