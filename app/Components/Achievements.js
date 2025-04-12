import Image from "next/image"
import { courier_prime } from "../font"
import AnimatedSectionWrapper from "./AnimationWrapper"
import { WipeLeftToRight } from "./FramerMotion"

export default function Achievements() {
  return (
    <AnimatedSectionWrapper>
      <WipeLeftToRight>
        <section className="flex flex-col gap-8 mt-28 w-4/5 mx-auto pb-5">
          <div className="font-mono text-xl">.../Achievements...</div>
          <div className="grid grid-cols-5 grid-rows-[repeat(3,fit-content(100%))] p-2 gap-y-2 gap-x-1 w-4/5 mx-auto border-2 rounded-lg shadow-md">
            <div className="col-span-3 row-span-2">
              <Image src="/KodeSkool/KodeSkool_Certificate.jpg" alt="Certificate" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
            </div>
            <div className="col-span-2 row-span-3">
              <Image src="/KodeSkool/KodeSkool_LOR.jpg" alt="Certificate" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '10px' }}></Image>
            </div>
            <div className="col-span-3 row-span-1 text-center ">
              <h1 className={"text-3xl font-semibold " + courier_prime.className}>Awarded By KodeSkool</h1>
            </div>
          </div>
        </section>
      </WipeLeftToRight>
    </AnimatedSectionWrapper>
  )
}
