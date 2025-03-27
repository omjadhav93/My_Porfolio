import Image from "next/image";
import { courier_prime } from "./font";
import Link from "next/link";
import Skills from "./Components/Skills";
import Achievements from "./Components/Achievements";
import ProjectCard from "./Components/ProjectCard";
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
          <Link href="/#Portfolio" className="outline-none border-none bg-green-700 text-zinc-50 font-semibold text-base px-4 py-2 rounded-lg hover:bg-green-600 active:bg-blue-500">View Portfolio</Link>
          <Link href="/Contact" className="outline-none border-none bg-slate-200 text-slate-900 font-semibold text-base px-4 py-2 rounded-lg hover:bg-slate-400 active:bg-slate-600">Contact Me</Link>
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
      <ProjectCard size={' px-40 py-2 '} />
      <Skills size={' px-40 py-2 '} />
      <Achievements />
      <section className="bg-[#121212] px-40 py-20">
        <div className="font-mono text-lg">.../Client Testimonial....</div>
        <div
                className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-lg mx-auto max-w-4xl border border-gray-800">
                <div className="mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="text-teal-400 mx-auto">
                        <path
                            d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
                        </path>
                        <path
                            d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z">
                        </path>
                    </svg>
                </div>
                <p className="text-gray-300 text-lg italic mb-6">The e-commerce platform developed has transformed our
                    business operations completely. The intuitive interface has increased customer engagement, and the
                    robust backend has streamlined our inventory management. A truly professional solution that exceeded
                    our expectations.</p>
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4">
                        <Image src="/AJWS/client_avatar.jpg" alt="Client" width={0} height={0} className="w-full h-full object-cover"></Image>
                    </div>
                    <div className="text-left">
                        <h4 className="text-white font-semibold">Anil Jadhav</h4>
                        <p className="text-gray-400">Founder & CEO, AJ Water Solutions</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
