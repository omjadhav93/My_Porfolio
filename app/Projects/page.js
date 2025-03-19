'use client'

import Image from "next/image"
import { noto_serif } from "../font"
import { useRouter } from 'next/navigation'

export default function Projects() {
  const router = useRouter()

  return (
    <>
      {/* KodeSkool */}
      <div className="flex flex-row gap-6 rounded-lg shadow-lg w-full bg-slate-900 p-4">
        <div className="grid grid-col-2 grid-rows-[repeat(2,fit-content(100%))] gap-y-2 gap-x-1 w-2/5">
          <div className="col-span-2 w-full aspect-video">
            <Image src="/KodeSkool/KodeSkool_Dashboard.png" alt="KodeSkool Dashboard" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} priority></Image>
          </div>
          <div className="col-span-1 w-full">
            <Image src="/KodeSkool/KodeSkool_Editor.png" alt="KodeSkool Editor" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
          </div>
          <div className="col-span-1 w-full">
            <Image src="/KodeSkool/KodeSkool_Profile.png" alt="KodeSkool Editor" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-3/5">
          <h1 className={"text-3xl font-semibold text-blue-400 " + noto_serif.className}>KodeSkool - Coding School Platform</h1>
          <div className="flex flex-col gap-[2px] pl-1 text-sm font-medium leading-loose tracking-widest font-[helvetica]">
            <p>Kode Skool is an innovative startup empowering school students with tech skills through hands-on coding lessons and real-world projects.</p>
            <p>At Kode Skool, I work as a Full-Stack Developer, designing responsive web applications, building front-end interfaces with React.js, and back-end functionalities with Node.js, while integrating APIs to deliver high-quality projects.</p>
          </div>
          <ul className="list-disc list-inside text-sm pl-1 text-neutral-300 font-medium leading-normal tracking-widest font-[helvetica]">
            <li><span className="text-blue-300 font-semibold">Dashboard:</span> Student dashboard for managing enrolled courses and tracking progress.</li>
            <li><span className="text-blue-300 font-semibold">Profile:</span> A user profile page for students to view and update their personal information.</li>
            <li><span className="text-blue-300 font-semibold">Chatbot:</span> An AI-powered chatbot interface to assist students with queries and learning support.</li>
            <li><span className="text-blue-300 font-semibold">API Development:</span> Created RESTful APIs for student data, course management, and user authentication.</li>
            <li><span className="text-blue-300 font-semibold">Authentication System:</span> Implemented secure user login and signup functionality with JWT and bcrypt.</li>
          </ul>
          <button type="button" className="w-max bg-sky-700 px-3 font-mono mx-auto py-1 rounded-lg outline-none border-none active:bg-blue-400" onClick={() => router.push('/Projects/KodeSkool')}>Explore Project</button>
        </div>
      </div>

      {/* AJWS */}
      <div className="flex flex-row gap-6 rounded-lg shadow-lg w-full bg-slate-900 p-4">
        <div className="flex flex-col gap-2 w-3/5">
          <h1 className={"text-3xl font-semibold text-blue-400 " + noto_serif.className}>AJWS - E-Commerce Website</h1>
          <div className="flex flex-col gap-[2px] pl-1 text-sm font-medium leading-loose tracking-widest font-[helvetica]">
            <p>AJ Water Solutions is a full-fledged E-Commerce platform offering water purifier sales, installation, and maintenance services for domestic, commercial, and industrial use.</p>
            <p>As a Full-Stack Developer, I built the platform using HTML, CSS, and JavaScript for the frontend, while developing backend functionalities with Node.js and Express.js, integrating MongoDB for data management.</p>
          </div>
          <ul className="list-disc list-inside text-sm pl-1 text-neutral-300 font-medium leading-normal tracking-widest font-[helvetica]">
            <li><span className="text-blue-300 font-semibold">Search Engine:</span> Implemented a moderate-level search feature to help users find products quickly.</li>
            <li><span className="text-blue-300 font-semibold">Shopping Cart:</span> Allows users to add products, update quantities, and proceed to checkout.</li>
            <li><span className="text-blue-300 font-semibold">Authentication System:</span> Developed secure user login and signup functionality using JWT and bcrypt, with email verification via Nodemailer.</li>
            <li><span className="text-blue-300 font-semibold">Order Management:</span> Built backend logic to handle order processing, tracking, and history.</li>
            <li><span className="text-blue-300 font-semibold">Admin Panel:</span> Designed a system for managing products, orders, and adjusting home-page content.</li>
          </ul>
          <button type="button" className="w-max bg-sky-700 px-3 font-mono mx-auto py-1 rounded-lg outline-none border-none active:bg-blue-400" onClick={() => router.push('/Projects/AJWS')}>Explore Project</button>
        </div>
        <div className="grid grid-col-2 grid-rows-[repeat(2,fit-content(100%))] gap-y-2 gap-x-1 w-2/5">
          <div className="col-span-2 w-full aspect-video">
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            >
                <source src="/AJWS/AJWS_Homepage.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="col-span-1 w-full">
            <Image src="/AJWS/AJWS_Profilepage.png" alt="AJWS Profilepage" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
          </div>
          <div className="col-span-1 w-full">
            <Image src="/AJWS/AJWS_Maintenance_Form.png" alt="AJWS Maintenance Form" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
          </div>
        </div>
      </div>

      {/* My Portfolio */}
      <div className="flex flex-row gap-6 rounded-lg shadow-lg w-full bg-slate-900 p-4">
        <div className="grid grid-col-2 grid-rows-[repeat(2,fit-content(100%))] gap-y-2 gap-x-1 w-2/5">
          <div className="col-span-2 w-full aspect-video">
            <Image src="/Portfolio/Portfolio_Homepage.png" alt="Portfolio Home Page" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} priority></Image>
          </div>
          <div className="col-span-1 w-full">
            <Image src="/Portfolio/Portfolio_Blogpage.png" alt="Portfolio Blog Page" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
          </div>
          <div className="col-span-1 w-full">
            <Image src="/Portfolio/Portfolio_Aboutpage.png" alt="Portfolio About Page" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-3/5">
          <h1 className={"text-3xl font-semibold text-blue-400 " + noto_serif.className}>My Portfolio - Personal Website</h1>
          <div className="flex flex-col gap-[2px] pl-1 text-sm font-medium leading-loose tracking-widest font-[helvetica]">
            <p>This portfolio website showcases my journey as a Full-Stack Developer, designed to reflect my technical expertise, problem-solving skills, and creative capabilities.</p>
            <p>Built with Next.js and Tailwind CSS, it features a responsive layout, smooth transitions, and fast load times to ensure a seamless user experience across all devices.</p>
          </div>
          <ul className="list-disc list-inside text-sm pl-1 text-neutral-300 font-medium leading-normal tracking-widest font-[helvetica]">
            <li><span className="text-blue-300 font-semibold">Portfolio Page:</span> Displays my skills and experiences with dynamic hover effects and engaging content.</li>
            <li><span className="text-blue-300 font-semibold">Responsive Design:</span> Ensures consistent performance and visual appeal on all screen sizes.</li>
            <li><span className="text-blue-300 font-semibold">Project Showcase:</span> Features an interactive gallery with detailed descriptions and live previews of my projects.</li>
            <li><span className="text-blue-300 font-semibold">Blogs Page:</span> HTML-rendered blog posts with structured formatting for better readability and presentation.</li>
            <li><span className="text-blue-300 font-semibold">About Me:</span> Provides a detailed overview of my background, skills, and professional journey.</li>
          </ul>
          <button type="button" className="w-max bg-sky-700 px-3 font-mono mx-auto py-1 rounded-lg outline-none border-none active:bg-blue-400" onClick={() => router.push('/Projects/Portfolio')}>Explore Project</button>
        </div>
      </div>
    </>
  )
}
