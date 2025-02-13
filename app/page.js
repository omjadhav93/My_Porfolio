import Image from "next/image";
import { courier_prime } from "./font";
import { faArrowRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-between relative min-h-screen h-screen px-40 py-28 bg-[#121212]">
        <div className="w-full">
          <div className="flex flex-row gap-5 justify-start items-baseline">
            <div className="rectangles-in-header flex flex-row gap-3  z-10">
              <Image src='/Rectangle.svg' width={10} height={10} alt="rect"></Image>
              <Image src='/Rectangle.svg' width={10} height={10} alt="rect"></Image>
              <Image src='/Rectangle.svg' width={10} height={10} alt="rect"></Image>
            </div>
            <h1 className={courier_prime.className + ' font-medium text-[#F5F5F5] text-[112px] leading-none  z-10'}>FULLSTACK</h1>
          </div>
          <div className="flex flex-row gap-5 justify-end items-baseline  z-10">
            <h1 className={courier_prime.className + ' font-medium text-[#F5F5F5] text-[112px] leading-none  z-10'}>DEVELOPER</h1>
            <div className="rectangles-in-header flex flex-row gap-3">
              <Image src='/Rectangle.svg' width={10} height={10} alt="rect"></Image>
              <Image src='/Rectangle.svg' width={10} height={10} alt="rect"></Image>
              <Image src='/Rectangle.svg' width={10} height={10} alt="rect"></Image>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-8 gap-6 opacity-60">
            <Image className=" opacity-60 hover:opacity-100" src='/React.svg' width={45} height={45} alt='React'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/Node.js.svg' width={45} height={45} alt='Node.js'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/Next.js.svg' width={45} height={45} alt='Next.js'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/Bootstrap.svg' width={45} height={45} alt='Bootstrap'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/Git.svg' width={45} height={45} alt='Git'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/MongoDB.svg' width={45} height={45} alt='MongoDB'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/Tailwind CSS.svg' width={45} height={45} alt='Tailwind CSS'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/MySQL.svg' width={45} height={45} alt='MySQL'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/Python.svg' width={45} height={45} alt='Python'></Image>
            <Image className=" opacity-60 hover:opacity-100" src='/Express.svg' width={45} height={45} alt='Express'></Image>
            <Image className=" opacity-60 hover:opacity-100 rounded-xl" src='/JavaScript.svg' width={45} height={45} alt='JavaScript'></Image>
          </div>
        </div>
        <div className="w-max self-center flex flex-row gap-6">
          <button type="button" className="outline-none border-none bg-green-700 text-zinc-50 font-semibold text-base px-4 py-2 rounded-lg hover:bg-green-600 active:bg-blue-500">View Portfolio</button>
          <button type="button" className="outline-none border-none bg-slate-200 text-slate-900 font-semibold text-base px-4 py-2 rounded-lg hover:bg-slate-400 active:bg-slate-600">Contact Me</button>
        </div>
      </section>
      <section id="Portfolio" className="about-me min-h-screen h-screen px-40 py-2">
        <div className="font-mono text-lg">.../About me...</div>
        <div className="flex flex-row w-full mt-2">
          <div className="flex flex-col gap-1 justify-center flex-grow pr-20 pl-4">
            <div className="text-2xl">Hello</div>
            <div className="text-3xl font-semibold">I'm Omkar Jadhav</div>
            <div className="text-lg">Fullstack Developer with experience of more than 1 year. Following are the technologies which I have learned and work on.</div>
            <div className="rounded-lg bg-slate-100 text-black py-4 px-4 mt-4">
              <p className="text-lg text-slate-600">Front-End</p>
              <p className="text-md font-mono">Javascript / React.js / Next.js / HTML / CSS / Bootstrap / Tailwind</p>
            </div>
            <div className="rounded-lg bg-slate-800 bg-opacity-60 border py-4 px-4 mt-4">
              <p className="text-lg text-slate-400">Back-End</p>
              <p className="text-md  font-mono">Node.js / Next.js / Express.js / Mongodb / MySql</p>
            </div>
            <a href="/Omkar_Resume.pdf" download="Omkar_Resume" className="outline-none border-none w-max bg-green-700 text-zinc-50 font-semibold text-base px-4 py-2 mt-8 rounded-lg hover:bg-green-600 active:bg-blue-500">Download Resume</a>
          </div>
          <div className="w-1/2 flex flex-row justify-center">
            <Image src={'/My_Pic.jpg'} className="rounded-xl" width={400} height={650} alt="My pic"></Image>
          </div>
        </div>
      </section>
      <section className="bg-[#121212] min-h-screen h-screen px-40 py-14">
        <div className="grid grid-cols-2 grid-rows-2 gap-1 p-1 border-2 rounded w-full h-full">
          <div className="transition-all duration-300 col-[1/2] row-[1/2] border origin-top-left bg-green-800 hover:z-10 hover:scale-[2]"></div>
          <div className="transition-all duration-300 col-[2/3] row-[1/2] border origin-top-right bg-red-800 hover:z-10 hover:scale-[2]"></div>
          <div className="transition-all duration-300 col-[1/2] row-[2/3] border origin-bottom-left bg-yellow-600 hover:z-10 hover:scale-[2]"></div>
          <div className="col-[2/3] row-[2/3] border hover:bg-slate-200 hover:bg-opacity-20">
            <Link href={'/Projects'} className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
              <p className="text-lg font-semibold text-sky-300">Explore</p>
              <FontAwesomeIcon icon={faArrowRight} width={25} className="text-gray-300" />
            </Link>
          </div>
        </div>
      </section >
      <Skills size={'min-h-screen h-screen px-40 py-2'} />
    </>
  );
}
