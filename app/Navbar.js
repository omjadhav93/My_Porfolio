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
    "/Projects": "absolute grid grid-flow-col grid-rows-1 items-center gap-8 top-12 left-[50%] translate-x-[-50%]",
    "/Blogs": "absolute grid grid-flow-col grid-rows-1 items-center gap-8 top-8 left-[50%] translate-x-[-50%]",
    "/About": "absolute grid grid-flow-col grid-rows-1 items-center gap-8 top-12 left-[50%] translate-x-[-50%]",
    "/Contact": "absolute grid grid-flow-col grid-rows-1 items-center gap-8 top-12 left-[50%] translate-x-[-50%]",
  };

  return (
    <nav
      className={`z-50 transition-all duration-300 ${isAtTop ? navbarStyles[pathname] || "absolute grid grid-flow-col grid-rows-1 gap-8 top-12 left-[50%] translate-x-[-50%]" : "sticky grid grid-flow-col auto-cols-max gap-8 top-4 left-[50%] translate-x-[-50%] w-max bg-gray-600 bg-opacity-90 px-8 py-4 rounded-md"
        }`}
    >
      <Link href="/#Portfolio" className="inline-block w-max font-semibold text-2xl navitem">Portfolio</Link>
      <Link href="/Projects" className={"inline-block w-max font-semibold text-2xl navitem group "  + (pathname === "/Projects" ? 'col-[3/4] row-[1/2]' : 'navitem')}>
        {pathname === "/Projects"  && isAtTop ? (
          <div className="relative flex items-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`transition-all duration-300 ${isAtTop ? "w-12 h-12 text-yellow-400" : "w-8 h-8 text-current"}`}
            >
              <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 01-.937-.171.75.75 0 11.374-1.453 5.25 5.25 0 002.626 0 .75.75 0 11.374 1.452 6.75 6.75 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
              <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
            </svg>
            {isAtTop && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            )}
          </div>
        ) : (
          <span className="font-semibold text-2xl">Projects</span>
        )}
      </Link>
      <Link href="/Blogs" className={"transition-all duration-1000" + (pathname === "/Blogs" && isAtTop ? "inline-block w-max font-bold text-[80px] navitem " + rubik_gemstones_regular.className : "inline-block w-max font-semibold text-2xl navitem")}>Blogs</Link>
      <Link href="/About" className={"transition-all duration-1000 inline-block w-max font-semibold text-2xl " + (pathname === "/About" ? `col-[3/4] row-[1/2] ${isAtTop ? "bg-gray-700 text-stone-300 px-4 py-2 rounded-lg" : "navitem"}` : "navitem")}>About Me</Link>
      <Link href="/Contact" className={"transition-all duration-1000 inline-block w-max font-semibold text-2xl " + (pathname === "/Contact" ? `col-[3/4] row-[1/2] ${isAtTop ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-lg" : "navitem"}` : "navitem")}>Contact</Link>
    </nav>
  );
}
