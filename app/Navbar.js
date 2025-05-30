"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
    "/Blogs": "absolute grid grid-flow-col grid-rows-1 items-center md:gap-8 sm:gap-6 gap-5 md:top-8 top-6 left-[50%] translate-x-[-50%]",
    "BlogsRead": "fixed grid grid-flow-row grid-cols-1 items-left md:gap-8 sm:gap-6 gap-5 md:top-20 top-16 pl-[5%]",
    "Default": "absolute grid grid-flow-col grid-rows-1 items-center md:gap-8 sm:gap-6 gap-5 md:top-12 top-10 left-[50%] translate-x-[-50%]",
    "IfNotTop": "fixed grid grid-flow-col auto-cols-max md:gap-8 sm:gap-6 gap-5 items-center top-4 left-[50%] translate-x-[-50%] w-max bg-slate-700 bg-opacity-80 px-8 py-2 rounded-md"
  };



  return (
    <nav
      className={`z-50 transition-all duration-300 ${pathname.startsWith("/Blogs") && pathname !== "/Blogs" ? navbarStyles["BlogsRead"] : (isAtTop ? navbarStyles[pathname] || navbarStyles["Default"] : navbarStyles["IfNotTop"])
        }`}
    >
      <motion.div layout className={"transition-all duration-1000 inline-block w-max font-semibold lg:text-2xl md:text-xl sm:text-lg text-base " + (pathname === "/" ? `col-[3/4] row-[1/2] bg-gradient-to-br from-emerald-300 to-green-900 text-stone-800 px-3 py-1 rounded-lg shadow-lg` : "navitem")}>
        <Link href="/">Portfolio</Link>
      </motion.div>
      <motion.div className={"inline-block w-max font-semibold lg:text-2xl md:text-xl sm:text-lg text-base navitem group " + (pathname === "/Projects" ? 'col-[3/4] row-[1/2]' : 'navitem')}>
        <Link href="/Projects" >
          {pathname === "/Projects" && isAtTop ? (
            <div className="relative flex items-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`transition-all duration-300 ${isAtTop ? "lg:w-12 lg:h-12 w-10 h-10 text-yellow-400" : "w-8 h-8 text-current"}`}
              >
                <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 01-.937-.171.75.75 0 11.374-1.453 5.25 5.25 0 002.626 0 .75.75 0 11.374 1.452 6.75 6.75 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
              </svg>
              {isAtTop && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              )}
            </div>
          ) : (
            <span className="font-semibold lg:text-2xl md:text-xl sm:text-lg text-base">Projects</span>
          )}
        </Link>
      </motion.div>
      <motion.div layout className={"transition-all duration-1000 " + (pathname === "/Blogs" && isAtTop ? "inline-block w-max font-bold text-[80px] navitem " + rubik_gemstones_regular.className : "inline-block w-max font-semibold lg:text-2xl md:text-xl sm:text-lg text-base navitem")}>
        <Link href="/Blogs" >Blogs</Link>
      </motion.div>
      <motion.div layout className={"transition-all duration-1000 inline-block w-max font-semibold lg:text-2xl md:text-xl sm:text-lg text-base " + (pathname === "/About" ? "col-[3/4] row-[1/2] bg-gray-700 text-stone-300 px-3 py-1 rounded-lg" : "navitem")}>
        <Link href="/About">About Me</Link>
      </motion.div>
      <motion.div layout className={"transition-all duration-1000 inline-block w-max font-semibold lg:text-2xl md:text-xl sm:text-lg text-base " + (pathname === "/Contact" ? "col-[3/4] row-[1/2] bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-lg shadow-lg" : "navitem")}>
        <Link href="/Contact">Contact</Link>
      </motion.div>
    </nav>
  );
}
