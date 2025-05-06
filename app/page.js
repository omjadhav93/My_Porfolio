import Image from "next/image";
import { courier_prime } from "./font";
import Link from "next/link";
import Skills from "./Components/Skills";
import Achievements from "./Components/Achievements";
import ProjectCard from "./Components/ProjectCard";
import PageWrapper, { LeftIn, RightIn, FadeInOut } from "./Components/FramerMotion";
import AnimatedSectionWrapper from "./Components/AnimationWrapper";


export default function Home() {
  return (
    <>
      <PageWrapper>
        <AnimatedSectionWrapper>
          <section className="flex flex-col justify-between relative min-h-screen h-screen xl:px-40 lg:px-24 md:px-12 sm:px-10 px-8 lg:pt-40 md:pt-32 pt-[120px] md:pb-20 sm:pb-24 pb-28 bg-[#121212]">
            <div className="w-full">
              <LeftIn>
                <div className="flex flex-row md:gap-5 sm:gap-3 gap-2 justify-start items-baseline">
                  <div className="rectangles-in-header flex flex-row md:gap-3 gap-2  z-10">
                    <Image src='/Rectangle.svg' width={10} height={10} className="max-lg:w-2 max-lg:h-2 max-md:w-[6px] max-md:h-[6px] max-sm:w-1 max-sm:h-1" alt="rect"></Image>
                    <Image src='/Rectangle.svg' width={10} height={10} className="max-lg:w-2 max-lg:h-2 max-md:w-[6px] max-md:h-[6px] max-sm:w-1 max-sm:h-1" alt="rect"></Image>
                    <Image src='/Rectangle.svg' width={10} height={10} className="max-lg:w-2 max-lg:h-2 max-md:w-[6px] max-md:h-[6px] max-sm:w-1 max-sm:h-1" alt="rect"></Image>
                  </div>
                  <h1 className={courier_prime.className + ' font-medium text-[#F5F5F5] lg:text-[112px] md:text-[90px] sm:text-[65px] text-[55px] leading-none  z-10'}>FULLSTACK</h1>
                </div>
              </LeftIn>
              <RightIn>
                <div className="flex flex-row md:gap-5 sm:gap-3 gap-2 justify-end items-baseline  z-10">
                  <h1 className={courier_prime.className + ' font-medium text-[#F5F5F5] lg:text-[112px] md:text-[90px] sm:text-[65px] text-[55px] leading-none  z-10'}>DEVELOPER</h1>
                  <div className="rectangles-in-header flex flex-row md:gap-3 gap-2">
                    <Image src='/Rectangle.svg' width={10} height={10} className="max-lg:w-2 max-lg:h-2 max-md:w-[6px] max-md:h-[6px] max-sm:w-1 max-sm:h-1" alt="rect"></Image>
                    <Image src='/Rectangle.svg' width={10} height={10} className="max-lg:w-2 max-lg:h-2 max-md:w-[6px] max-md:h-[6px] max-sm:w-1 max-sm:h-1" alt="rect"></Image>
                    <Image src='/Rectangle.svg' width={10} height={10} className="max-lg:w-2 max-lg:h-2 max-md:w-[6px] max-md:h-[6px] max-sm:w-1 max-sm:h-1" alt="rect"></Image>
                  </div>
                </div>
              </RightIn>
              <div className="flex flex-row justify-center md:mt-2 mt-4 md:gap-6 sm:gap-5 gap-4 opacity-60">
                <LeftIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/React.svg' width={45} height={45} alt='React'></Image>
                </LeftIn>
                <LeftIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/Node.js.svg' width={45} height={45} alt='Node.js'></Image>
                </LeftIn>
                <LeftIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/Next.js.svg' width={45} height={45} alt='Next.js'></Image>
                </LeftIn>
                <LeftIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/Bootstrap.svg' width={45} height={45} alt='Bootstrap'></Image>
                </LeftIn>
                <LeftIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/Git.svg' width={45} height={45} alt='Git'></Image>
                </LeftIn>
                <FadeInOut>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/MongoDB.svg' width={45} height={45} alt='MongoDB'></Image>
                </FadeInOut>
                <RightIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/Tailwind CSS.svg' width={45} height={45} alt='Tailwind CSS'></Image>
                </RightIn>
                <RightIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/MySQL.svg' width={45} height={45} alt='MySQL'></Image>
                </RightIn>
                <RightIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/Python.svg' width={45} height={45} alt='Python'></Image>
                </RightIn>
                <RightIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8" src='/Express.svg' width={45} height={45} alt='Express'></Image>
                </RightIn>
                <RightIn>
                  <Image className=" opacity-60 hover:opacity-100 max-lg:w-10 max-lg:h-10 max-md:w-9 max-md:h-9 max-sm:w-8 max-sm:h-8 max-md:rounded-xl rounded-md" src='/JavaScript.svg' width={45} height={45} alt='JavaScript'></Image>
                </RightIn>
              </div>
            </div>
            <div className="w-max self-center flex flex-row gap-6">
              <LeftIn>
                <Link href="/#Portfolio" className="outline-none border-none bg-green-700 text-zinc-50 font-semibold sm:text-base text-sm lg:px-4 px-3 py-2 rounded-lg hover:bg-green-600 active:bg-blue-500">View Portfolio</Link>
              </LeftIn>
              <RightIn>
                <Link href="/Contact" className="outline-none border-none bg-slate-200 text-slate-900 font-semibold sm:text-base text-sm lg:px-4 px-3 py-2 rounded-lg hover:bg-slate-400 active:bg-slate-600">Contact Me</Link>
              </RightIn>
            </div>
          </section>
        </AnimatedSectionWrapper>
        <AnimatedSectionWrapper>
          <section id="Portfolio" className="about-me min-h-screen h-screen xl:px-40 lg:px-24 md:px-10 sm:px-8 px-6 pt-28">
            <FadeInOut>
              <div className="font-mono lg:text-lg text-base">.../About me...</div>
            </FadeInOut>
            <div className="flex flex-row w-full lg:mt-10 mt-8">
              <LeftIn className="flex flex-col md:gap-1 gap-[2px] justify-center flex-grow lg:pr-20 md:pr-12 pr-8 pl-4">
                <div className="xl:text-2xl lg:text-xl md:text-lg text-base">Hello</div>
                <div className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold">I'm Omkar Jadhav</div>
                <div className="xl:text-lg lg:text-base md:text-sm text-xs max-sm:hidden">Fullstack Developer with experience of more than 1 year. Following are the technologies which I have learned and work on.</div>
                <div className="rounded-lg bg-slate-100 text-black lg:py-4 py-3 lg:px-4 px-3 lg:mt-4 mt-2">
                  <p className="xl:text-lg lg:text-base md:text-sm text-xs text-slate-600">Front-End</p>
                  <p className="xl:text-base lg:text-sm md:text-xs text-[10px] font-mono">Javascript / React.js / Next.js / HTML / CSS / Bootstrap / Tailwind</p>
                </div>
                <div className="rounded-lg bg-slate-800 bg-opacity-60 border lg:py-4 py-3 lg:px-4 px-3 lg:mt-4 mt-2">
                  <p className="xl:text-lg lg:text-base md:text-sm text-xs text-slate-400">Back-End</p>
                  <p className="xl:text-base lg:text-sm md:text-xs text-[10px] font-mono">Node.js / Next.js / Express.js / Mongodb / MySql</p>
                </div>
                <a href="/Omkar_Resume.pdf" download="Omkar_Resume" className="outline-none border-none w-max bg-green-700 text-zinc-50 font-semibold xl:text-base lg:text-sm md:text-xs text-[10px] lg:px-4 md:px-3 px-[10px] md:py-2 py-[6px] lg:mt-8 md:mt-6 mt-4 md:rounded-lg rounded-md hover:bg-green-600 active:bg-blue-500">Download Resume</a>
              </LeftIn>
              <RightIn className="w-1/2 flex justify-center items-center">
                <Image src={'/My_Pic.jpg'} className="rounded-xl" width={400} height={650} alt="My pic"></Image>
              </RightIn>
            </div>
          </section>
        </AnimatedSectionWrapper>
        <ProjectCard size={' px-40 py-2 '} />
        <Skills size={' xl:px-40 lg:px-24 md:px-10 sm:px-8 px-6 py-2 '} />
        <Achievements />
        <AnimatedSectionWrapper>
          <FadeInOut>
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
          </FadeInOut>
        </AnimatedSectionWrapper>
      </PageWrapper>
    </>
  );
}
