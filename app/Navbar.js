"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { rubik_gemstones_regular } from "./font"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user scrolled more than 20px from the top
      setIsAtTop(window.scrollY <= 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define different styles for each page
  const navbarStyles = {
    "/": "absolute grid grid-cols-3 auto-cols-max gap-8 top-20 right-40",
    "/Projects": "absolute grid grid-flow-col grid-rows-1 gap-8 top-12 left-[50%] translate-x-[-50%]",
    "/Blogs": "absolute grid grid-flow-col grid-rows-1 items-center gap-8 top-8 left-[50%] translate-x-[-50%]",
    "/About": "absolute grid grid-flow-col grid-rows-1 items-center gap-8 top-12 left-[50%] translate-x-[-50%]",
    "/Contact": "absolute grid grid-flow-col grid-rows-1 gap-8 top-12 left-[50%] translate-x-[-50%]",
  };

  return (
    <nav
      className={`z-50 transition-all duration-1000 ${
        isAtTop ? navbarStyles[pathname] || "absolute grid grid-flow-col grid-rows-1 gap-8 top-12 left-[50%] translate-x-[-50%]" : "sticky grid grid-flow-col auto-cols-max gap-8 top-4 left-[50%] translate-x-[-50%] w-max bg-gray-600 bg-opacity-90 px-8 py-4 rounded-md"
      }`}
    >
      <Link href="/#Portfolio" className="inline-block w-max font-semibold text-2xl navitem">Portfolio</Link>
      <Link href="/Projects" className="inline-block w-max font-semibold text-2xl navitem">Projects</Link>
      <Link href="/Blogs" className={"transition-all duration-1000" + (pathname === "/Blogs" && isAtTop ? "inline-block w-max font-bold text-[80px] navitem "+rubik_gemstones_regular.className : "inline-block w-max font-semibold text-2xl navitem")}>Blogs</Link>
      <Link href="/About" className={"transition-all duration-1000 inline-block w-max font-semibold text-2xl " + (pathname === "/About" ? `col-[3/4] row-[1/2] ${isAtTop ? "bg-gray-700 text-stone-300 px-4 py-2 rounded-lg" : "navitem"}` : "navitem")}>About Me</Link>
      <Link href="/Contact" className="inline-block w-max font-semibold text-2xl navitem">Contact</Link>
    </nav>
  );
}
