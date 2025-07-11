import Image from 'next/image';
import LinkedInBadge from '../Components/LinkedInBadge';
import WhatsAppContact from '../Components/WhatsAppContact';
import PageWrapper, { FadeInOut, LeftIn, ListIn, RightIn } from '../Components/FramerMotion';
import AnimatedSectionWrapper from '../Components/AnimationWrapper';

export default function Contact() {
  return (
    <PageWrapper>
      <AnimatedSectionWrapper>
        <section className='flex flex-col justify-center items-center relative w-full min-h-screen h-screen px-[10%] pt-36 bg-[#151515]'>
          <FadeInOut className='text-3xl font-bold text-white mb-8 pb-4 border-b border-gray-700 w-full text-center'>
            Social Media Connects
          </FadeInOut>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl'>
            <LeftIn className='bg-[#1E1E1E] p-6 rounded-lg shadow-md'>
              <LinkedInBadge />
            </LeftIn>
            <RightIn className='bg-[#1E1E1E] p-6 rounded-lg shadow-md'>
              <WhatsAppContact />
            </RightIn>
          </div>

          <FadeInOut className='mt-12 text-center'>
            <p className='text-gray-400 mb-4'>Find me on other platforms</p>
            <div className='flex justify-center gap-6'>
              <a href="https://github.com/omjadhav93" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              </a>
              <a href="https://twitter.com/omjadhav93" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors'>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
            </div>
          </FadeInOut>
        </section>
      </AnimatedSectionWrapper>

      {/* Contact Form */}
      <AnimatedSectionWrapper>
        <section className='flex flex-col justify-center items-center relative w-full min-h-screen px-[10%] py-20 bg-[#1E1E1E]'>
          <div className='w-full max-w-2xl'>
            <FadeInOut className='text-3xl font-bold text-white mb-8 pb-4 border-b border-gray-700 text-center'>
              Get in Touch
            </FadeInOut>

            <form className='space-y-6'>
              <ListIn index={1}>
                <label htmlFor='name' className='block text-white mb-2'>Name</label>
                <input
                  type='text'
                  id='name'
                  className='w-full p-3 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none'
                  placeholder='Your Name'
                />
              </ListIn>

              <ListIn index={2}>
                <label htmlFor='email' className='block text-white mb-2'>Email</label>
                <input
                  type='email'
                  id='email'
                  className='w-full p-3 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none'
                  placeholder='Your Email'
                />
              </ListIn>

              <ListIn index={3}>
                <label htmlFor='phone' className='block text-white mb-2'>Phone Number</label>
                <input
                  type='tel'
                  id='phone'
                  className='w-full p-3 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none'
                  placeholder='Your Phone Number'
                  pattern='[0-9]{10}'
                />
              </ListIn>

              <ListIn index={4}>
                <label htmlFor='message' className='block text-white mb-2'>Message</label>
                <textarea
                  id='message'
                  rows='5'
                  className='w-full p-3 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none'
                  placeholder='Your Message'
                ></textarea>
              </ListIn>

              <ListIn index={5}>
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
                >
                  Send Message
                </button>
              </ListIn>
            </form>
          </div>
        </section>
      </AnimatedSectionWrapper>
    </PageWrapper>
  )
}
