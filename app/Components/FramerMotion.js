// components/animations.jsx
"use client";

import { motion, AnimatePresence, inView } from "framer-motion";
import { useContext } from "react";
import { ViewContext } from "./AnimationWrapper";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export function LeftIn({ children, className }) {
    const inView = useContext(ViewContext);
    return (
        <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function RightIn({ children, className }) {
    const inView = useContext(ViewContext);
    return (
        <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInOut({ children, className }) {
    const inView = useContext(ViewContext);
    return (
        <motion.div
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ListIn({ children, className, index }) {
    const inView = useContext(ViewContext);
    const screenWidth = screen.width;
    return (
        <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: screenWidth }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function WipeLeftToRight({ children, className }) {
    const inView = useContext(ViewContext);
    return (
        <motion.div
            animate={inView ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function WipeRightToLeft({ children, className }) {
    const inView = useContext(ViewContext);
    return (
        <motion.div
            animate={inView ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}