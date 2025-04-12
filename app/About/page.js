import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faCode, faEnvelope, faGraduationCap, faLocationDot, faPhone, faSchool } from '@fortawesome/free-solid-svg-icons'
import Skills from "../Components/Skills"
import Achievements from "../Components/Achievements"
import PageWrapper, { FadeInOut, WipeLeftToRight, WipeRightToLeft } from "../Components/FramerMotion"
import AnimatedSectionWrapper from "../Components/AnimationWrapper"

export default function About() {
  return (
    <PageWrapper>
      <AnimatedSectionWrapper>
        <section className="grid grid-cols-[2fr_5fr] gap-4 w-3/4 mx-auto mt-48 py-5">
          <div className="grid-cols-1">
            <FadeInOut>
              <div className="relative rounded-md before:content-[''] before:rounded-md before:absolute before:w-full before:h-full before:border-4 before:border-white before:border-solid before:translate-x-4 before:translate-y-6 before:-z-10">
                <WipeLeftToRight>
                  <Image src={'/My_Pic.jpg'} width={0} height={0} sizes="100vw" style={{ width: "100%", maxWidth: '100%', height: 'auto' }} className="rounded-md" alt="My_Pic"></Image>
                </WipeLeftToRight>
              </div>
            </FadeInOut>
          </div>
          <WipeRightToLeft className="flex flex-col gap-4 ml-20">
            <h1 className="text-2xl font-semibold text-slate-300">Hi, I'm Omkar Jadhav,</h1>
            <p className="text-base font-medium leading-loose tracking-widest font-[helvetica]">a passionate and dedicated Full-Stack Web Developer who loves turning ideas into impactful digital experiences. I enjoy solving challenges, learning new technologies, and creating solutions that deliver real value. With a strong focus on clean code and user-centric designs, I’m always eager to grow and contribute to meaningful projects.</p>
            <div className="grid grid-cols-2 gap-x-1 gap-y-6 mt-1">
              <div className="grid grid-cols-[30px_1fr_3fr] align-middle">
                <div>
                  <FontAwesomeIcon icon={faCalendarDays} width={15} />
                </div>
                <p className="font-semibold text-sm">Age :</p>
                <p className="font-medium text-sm">30</p>
              </div>
              <div className="grid grid-cols-[30px_1fr_3fr] align-middle">
                <FontAwesomeIcon icon={faLocationDot} width={15} />
                <p className="font-semibold text-sm">Location :</p>
                <p className="font-medium text-sm">Pune, Maharashtra</p>
              </div>
              <div className="grid grid-cols-[30px_1fr_3fr] align-middle">
                <FontAwesomeIcon icon={faCode} width={15} />
                <p className="font-semibold text-sm">Interests :</p>
                <p className="font-medium text-sm">Developing, Problem Solving</p>
              </div>
              <div className="grid grid-cols-[30px_1fr_3fr] align-middle">
                <FontAwesomeIcon icon={faSchool} width={15} />
                <p className="font-semibold text-sm">University :</p>
                <p className="font-medium text-sm">Parul University</p>
              </div>
              <div className="grid grid-cols-[30px_1fr_3fr] align-middle">
                <FontAwesomeIcon icon={faGraduationCap} width={15} />
                <p className="font-semibold text-sm">Degree :</p>
                <p className="font-medium text-sm">BTECH In CSE</p>
              </div>
              <div className="grid grid-cols-[30px_1fr_3fr] align-middle">
                <FontAwesomeIcon icon={faEnvelope} width={15} />
                <p className="font-semibold text-sm">Mail :</p>
                <p className="font-medium text-sm">omkaraj420@gmail.com</p>
              </div>
              <div className="grid grid-cols-[30px_1fr_3fr] align-middle">
                <FontAwesomeIcon icon={faPhone} width={15} />
                <p className="font-semibold text-sm">Phone :</p>
                <p className="font-medium text-sm">+917276241430</p>
              </div>
            </div>
            <a href="/Omkar_Resume.pdf" className="mt-3 w-max outline-none border-none bg-green-700 text-zinc-50 font-semibold text-base px-4 py-2 rounded-lg hover:bg-green-600 active:bg-blue-500" download='Omkar_Resume'>Download CV</a>
          </WipeRightToLeft>
        </section>
      </AnimatedSectionWrapper>
      <Skills size="w-3/4" />
      <Achievements />
    </PageWrapper>
  )
}
