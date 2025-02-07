"use client"

import Image from "next/image"
import { useState } from "react"

const sortingKeys = [
  { key: 1, label: 'Latest', active: true },
  { key: 2, label: 'Oldest', active: false },
  { key: 3, label: 'Popular', active: false },
  { key: 4, label: 'Most Recommended', active: false }
]

// Sample data
const blogListSample = [
  {
    Highlighted: true,
    Id: "b1a2c3d4",
    Title: "How to Create a Card Shuffle Animation",
    Description: "Learn how to implement a smooth card shuffle animation using CSS and JavaScript.",
    Image: "https://images.pexels.com/photos/4017663/pexels-photo-4017663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Blog_Age: "2 weeks ago",
    Tags: ["popular", "CSS", "JavaScript", "animation"]
  },
  {
    Highlighted: true,
    Id: "e5f6g7h8",
    Title: "Building a Dark Mode Toggle in React",
    Description: "A step-by-step guide to adding dark mode functionality to your React application.",
    Image: "https://img.freepik.com/premium-vector/active-toggle-button-ui-element-template_106317-35724.jpg?w=900",
    Blog_Age: "1 month ago",
    Tags: ["React", "UI", "dark mode", "popular"]
  },
  {
    Id: "i9j0k1l2",
    Title: "Mastering CSS Grid for Responsive Layouts",
    Description: "Explore the power of CSS Grid to create modern, responsive web layouts.",
    Image: "https://img.freepik.com/premium-vector/fully-responsive-web-design-electronic-devices_1624-229.jpg?w=1060",
    Blog_Age: "3 weeks ago",
    Tags: ["CSS", "responsive", "technology"]
  },
  {
    Id: "m3n4o5p6",
    Title: "Understanding React Context API",
    Description: "Learn how to manage global state in React with Context API instead of prop drilling.",
    Image: "https://img.freepik.com/premium-photo/hand-points_1227537-235.jpg?w=1060",
    Blog_Age: "5 days ago",
    Tags: ["React", "state management", "popular"]
  },
  {
    Id: "q7r8s9t0",
    Title: "How to Optimize Web Performance with Lazy Loading",
    Description: "Improve your website speed using lazy loading techniques for images and components.",
    Image: "https://img.freepik.com/premium-vector/load-bar-progress-gradient-download-interface-loading-sign-vector-loader-concept_152104-4844.jpg?w=1060",
    Blog_Age: "2 months ago",
    Tags: ["performance", "lazy loading", "optimization"]
  },
  {
    Id: "u1v2w3x4",
    Title: "Creating a Custom Hook in React",
    Description: "Understand the power of React hooks by creating your own custom hook for data fetching.",
    Image: "https://img.freepik.com/premium-vector/atom-vector-illustration_1237743-80792.jpg?w=996",
    Blog_Age: "1 week ago",
    Tags: ["React", "hooks", "technology"]
  },
  {
    Id: "y5z6a7b8",
    Title: "Implementing Infinite Scroll in React",
    Description: "A guide to implementing infinite scrolling for a better user experience in React.",
    Image: "https://img.freepik.com/free-vector/blue-infinity-symbol_1284-43066.jpg?t=st=1738670417~exp=1738674017~hmac=056642f1d93b9aefa77f5c2852e2d4fa4f6b160f9cc43f67264b8a2c1ee672cc&w=900",
    Blog_Age: "3 days ago",
    Tags: ["React", "infinite scroll", "popular"]
  },
  {
    Id: "c9d0e1f2",
    Title: "Understanding Server-Side Rendering in Next.js",
    Description: "Learn how SSR improves performance and SEO in Next.js applications.",
    Image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1738670449~exp=1738674049~hmac=e855fec29269aa563487d2c261c122bd93337633c877bc75e4a7c99c67d9a749&w=996",
    Blog_Age: "4 months ago",
    Tags: ["Next.js", "SSR", "SEO"]
  },
  {
    Id: "g3h4i5j6",
    Title: "How to Build a REST API with Node.js and Express",
    Description: "A comprehensive tutorial on creating a RESTful API using Node.js and Express.",
    Image: "https://img.freepik.com/free-photo/side-shot-code-editor-using-react-js_181624-61842.jpg?t=st=1738670324~exp=1738673924~hmac=e71ab65a54ad4cd601d453f9273cd67d80ce5681a9f9ff1aad5b647cd9fd42db&w=996",
    Blog_Age: "2 weeks ago",
    Tags: ["Node.js", "Express", "API", "backend"]
  },
  {
    Id: "k7l8m9n0",
    Title: "CSS Animations: A Beginner's Guide",
    Description: "Learn how to add smooth and eye-catching animations to your website using CSS.",
    Image: "https://img.freepik.com/premium-psd/stylized-3d-html-css-file-illustration_600269-204.jpg?w=1060",
    Blog_Age: "6 days ago",
    Tags: ["CSS", "animations", "UI"]
  },
  {
    Id: "o1p2q3r4",
    Title: "Implementing Authentication in a MERN Stack App",
    Description: "Learn how to set up user authentication in a MERN stack application with JWT.",
    Image: "https://img.freepik.com/free-vector/3d-bars-infographic-template_23-2148388738.jpg?t=st=1738670563~exp=1738674163~hmac=ea70513dff54d1728aee215faa1932482976eb7ad9e531275417363907c723d7&w=996",
    Blog_Age: "3 months ago",
    Tags: ["authentication", "MERN", "backend"]
  },
  {
    Id: "s5t6u7v8",
    Title: "Building a Drag-and-Drop UI with React",
    Description: "Step-by-step guide to implementing drag-and-drop functionality using React and libraries like react-beautiful-dnd.",
    Image: "https://img.freepik.com/free-vector/image-upload-concept-landing-page_23-2148310293.jpg?t=st=1738670598~exp=1738674198~hmac=9f0ecada73833dd9ab8e081c3511dbe3b88cd1af48e6d6f2a213f5d03e156218&w=996",
    Blog_Age: "1 month ago",
    Tags: ["React", "drag-and-drop", "UI"]
  },
  {
    Id: "w9x0y1z2",
    Title: "State Management in React: Redux vs Context API",
    Description: "Compare Redux and Context API to choose the best state management solution for your project.",
    Image: "https://img.freepik.com/premium-photo/hand-points_1227537-235.jpg?w=1060",
    Blog_Age: "2 weeks ago",
    Tags: ["React", "state management", "Redux"]
  },
  {
    Id: "a3b4c5d6",
    Title: "How to Deploy a Next.js App on Vercel",
    Description: "A step-by-step guide on deploying your Next.js application effortlessly using Vercel.",
    Image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?t=st=1738670449~exp=1738674049~hmac=e855fec29269aa563487d2c261c122bd93337633c877bc75e4a7c99c67d9a749&w=996",
    Blog_Age: "5 days ago",
    Tags: ["Next.js", "deployment", "popular"]
  },
  {
    Id: "e7f8g9h0",
    Title: "Building a Real-Time Chat App with Socket.io",
    Description: "Learn how to implement real-time communication using Socket.io in a Node.js application.",
    Image: "https://img.freepik.com/free-vector/blue-notification-message-chat-icon-attention-sms-sign-internet-message-3d-rendering_40876-3450.jpg?t=st=1738670682~exp=1738674282~hmac=0817f358c0434189ebd74926a772948fc1bc1988958bbabf18c56be9a0a2c8ab&w=826",
    Blog_Age: "3 months ago",
    Tags: ["real-time", "Socket.io", "Node.js"]
  }
];

export default function Blogs() {
  const [sortkeys, setsortkeys] = useState(sortingKeys);
  const [blogList, setBlogList] = useState(blogListSample)

  const handleSorting = (key) => {
    let updatedKeys = sortkeys.map(item => {
      return item.key === key ? { ...item, active: true } : { ...item, active: false };
    })
    setsortkeys(updatedKeys);
  }

  return (
    <>
      <section className='flex flex-col mt-44 w-4/5 mx-auto'>
        <h4 className='text-lg font-mono w-full'>.../Top Highlight ...</h4>
        <div className="flex flex-row justify-center w-full">
          <div className='flex justify-end w-1/2 p-4 pt-0'>
            {blogList.filter(item => item.Highlighted).map((item, index) => {
              return index === 0 ? <div key={item.Id} className='border-none rounded-lg overflow-hidden bg-slate-800 mt-8 w-3/4'>
                <Image src={item.Image} alt="Image" width={0} height={0} sizes="100vw" style={{ width: "100%", maxWidth: '100%', height: 'auto', maxHeight: "250px", objectFit: "cover" }}></Image>
                <div className="flex flex-col gap-2 px-4 py-3">
                  <div className="flex flex-row gap-1 flex-wrap">
                    {item.Tags.map((tag, i) => <div key={i} className="rounded-2xl bg-slate-200 text-gray-600 px-3 py-1 text-sm font-medium">{tag}</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-semibold text-blue-400 mt-1">{item.Title}</p>
                    <p className="text-sm font-normal">{item.Description}</p>
                    <p className="text-xs font-medium text-gray-600">{item.Blog_Age}</p>
                  </div>
                </div>
              </div> : <></>
            })}
          </div>
          <div className='flex justify-start w-1/2 p-4 pt-0'>
            {blogList.filter(item => item.Highlighted).map((item, index) => {
              return index === 1 ? <div key={item.Id} className='border-none rounded-lg overflow-hidden bg-slate-800 mt-8 w-3/4'>
                <Image src={item.Image} alt="Image" width={0} height={0} sizes="100vw" style={{ width: "100%", maxWidth: '100%', height: 'auto', maxHeight: "250px", objectFit: "cover" }}></Image>
                <div className="flex flex-col gap-2 px-4 py-3">
                  <div className="flex flex-row gap-1 flex-wrap">
                    {item.Tags.map((tag, i) => <div key={i} className="rounded-2xl bg-slate-200 text-gray-600 px-3 py-1 text-sm font-medium">{tag}</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-semibold text-blue-400 mt-1">{item.Title}</p>
                    <p className="text-sm font-normal">{item.Description}</p>
                    <p className="text-xs font-medium text-gray-600">{item.Blog_Age}</p>
                  </div>
                </div>
              </div> : <></>
            })}
          </div>
        </div>
      </section>
      <section className="w-4/5 mx-auto p-4 mt-12">
        <div className="flex gap-2">
          {sortkeys.map(item => {
            return item.active ?
              <button key={item.key} type="button" className="rounded-lg bg-gray-500 px-3 py-1 text-base font-normal text-stone-900" onClick={() => handleSorting(item.key)}>{item.label}</button>
              :
              <button key={item.key} type="button" className="rounded-lg bg-slate-300 px-3 py-1 text-base font-normal text-black" onClick={() => handleSorting(item.key)}>{item.label}</button>
          })}
        </div>
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-14 justify-evenly mt-6">
          {blogList.filter(item => !item.Highlighted).map(item =>
            <div className="w-80 min-h-[400px] border-none rounded-lg overflow-hidden bg-slate-800">
              <Image src={item.Image} alt="Image" width={0} height={0} sizes="100vw" style={{ width: "100%", maxWidth: '100%', height: 'auto', maxHeight: "250px", objectFit: "cover" }}></Image>
              <div className="flex flex-col gap-2 px-4 py-3">
                <div className="flex flex-row gap-1 flex-wrap">
                  {item.Tags.map((tag, i) => <div key={i} className="rounded-xl bg-slate-200 text-gray-600 px-2 py-1 text-xs font-normal">{tag}</div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold text-blue-400 mt-1 leading-tight">{item.Title}</p>
                  <p className="text-sm font-normal leading-tight">{item.Description}</p>
                  <p className="text-xs font-medium text-gray-600">{item.Blog_Age}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
