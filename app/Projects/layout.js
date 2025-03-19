"use client"
import { usePathname } from 'next/navigation';

export default function ProjectsLayout({ children }) {
    const pathname = usePathname();
    return <section className={"flex flex-col gap-14 py-10 w-4/5 mx-auto "+(pathname === "/Projects" ? " mt-40" : " mt-16")}>{children}</section>
}