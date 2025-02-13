import Image from "next/image"
import { noto_serif } from "../font"

export default function Projects() {
  return (
    <>
      <section className="flex flex-col mt-48 w-4/5 mx-auto">
        <div className="flex flex-row gap-6 rounded-lg shadow-lg w-full bg-slate-900 p-4">
          <div className="grid grid-col-2 grid-rows-[repeat(2,fit-content(100%))] gap-y-2 gap-x-1 w-2/5">
            <div className="col-span-2 w-full aspect-video">
              <Image src="/KodeSkool/KodeSkool_Dashboard.png" alt="KodeSkool Dashboard" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
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
            <div className="flex flex-col gap-[2px] text-sm font-medium leading-loose tracking-widest font-[helvetica]">
              <p>Kode Skool is an innovative startup empowering school students with tech skills through hands-on coding lessons and real-world projects.</p>
              <p>At Kode Skool, I work as a Full-Stack Developer, designing responsive web applications, building front-end interfaces with React.js, and back-end functionalities with Node.js, while integrating APIs to deliver high-quality projects.</p>
            </div>
            <ul className="list-disc list-inside text-sm text-neutral-300 font-medium leading-normal tracking-widest font-[helvetica]">
              <li><span className="text-blue-300 font-semibold">Dashboard:</span> Student dashboard for managing enrolled courses and tracking progress.</li>
              <li><span className="text-blue-300 font-semibold">Profile:</span> A user profile page for students to view and update their personal information.</li>
              <li><span className="text-blue-300 font-semibold">Chatbot:</span> An AI-powered chatbot interface to assist students with queries and learning support.</li>
              <li><span className="text-blue-300 font-semibold">API Development:</span> Created RESTful APIs for student data, course management, and user authentication.</li>
              <li><span className="text-blue-300 font-semibold">Authentication System:</span> Implemented secure user login and signup functionality with JWT and bcrypt.</li>
            </ul>
            <button type="button" className="w-max bg-sky-700 px-3 font-mono mx-auto py-1 rounded-lg outline-none border-none active:bg-blue-400">Explore Project</button>
          </div>
        </div>
      </section>
    </>
  )
}
