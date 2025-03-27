"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const sortingKeys = [
  { key: 1, label: 'Latest', active: true },
  { key: 2, label: 'Oldest', active: false },
  { key: 3, label: 'Popular', active: false },
  { key: 4, label: 'Most Recommended', active: false }
]

export default function Blogs() {
  const [sortkeys, setsortkeys] = useState(sortingKeys);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const fetchBlogList = async () => {
      try {
        const response = await fetch('/api/getBlogList');
        const data = await response.json();
        setBlogList(data);
      } catch (error) {
        console.error("Failed to fetch the blog list.");
        setBlogList([]);
      }
    };

    fetchBlogList();
  }, []); // ✅ Empty dependency array to run only once on mount


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
            {blogList
              .filter(item => item.Highlighted)
              .map((item, index) => (
                index === 0 ? (
                  <div key={index} className='border-none rounded-lg overflow-hidden bg-slate-800 mt-8 w-3/4'>
                    <Link href={"/Blogs/" + item.Name} className="cursor-pointer">
                      <Image src={item.Image} alt="Image" width={0} height={0} sizes="100vw" style={{ width: "100%", maxWidth: '100%', height: 'auto', maxHeight: "250px", objectFit: "cover" }}></Image>
                    </Link>
                    <div className="flex flex-col gap-2 px-4 py-3">
                      <div className="flex flex-row gap-1 flex-wrap">
                        {item.Tags.map((tag, i) => <div key={i} className="rounded-2xl bg-slate-200 text-gray-600 px-3 py-1 text-sm font-medium">{tag}</div>
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <Link href={"/Blogs/" + item.Name} className="text-base font-semibold text-blue-400 mt-1 hover:underline">{item.Title}</Link>
                        <p className="text-sm font-normal">{item.Description}</p>
                        <p className="text-xs font-medium text-gray-600">{item.Blog_Age}</p>
                      </div>
                    </div>
                  </div>
                ) : null
              ))}
          </div>
          <div className='flex justify-start w-1/2 p-4 pt-0'>
            {blogList
              .filter(item => item.Highlighted)
              .map((item, index) => (
                index === 1 ? (
                  <div key={index} className='border-none rounded-lg overflow-hidden bg-slate-800 mt-8 w-3/4'>
                    <Link href={"/Blogs/" + item.Name} className="cursor-pointer">
                      <Image src={item.Image} alt="Image" width={0} height={0} sizes="100vw" style={{ width: "100%", maxWidth: '100%', height: 'auto', maxHeight: "250px", objectFit: "cover" }}></Image>
                    </Link>
                    <div className="flex flex-col gap-2 px-4 py-3">
                      <div className="flex flex-row gap-1 flex-wrap">
                        {item.Tags.map((tag, i) => <div key={i} className="rounded-2xl bg-slate-200 text-gray-600 px-3 py-1 text-sm font-medium">{tag}</div>
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <Link href={"/Blogs/" + item.Name} className="text-base font-semibold text-blue-400 mt-1 hover:underline">{item.Title}</Link>
                        <p className="text-sm font-normal">{item.Description}</p>
                        <p className="text-xs font-medium text-gray-600">{item.Blog_Age}</p>
                      </div>
                    </div>
                  </div>
                ) : null
              ))}
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
          {blogList.filter(item => !item.Highlighted).map((item, index) =>
            <div key={index} className="w-80 min-h-[400px] border-none rounded-lg overflow-hidden bg-slate-800">
              <Link href={"/Blogs/" + item.Name} className="cursor-pointer">
                <Image src={item.Image} alt="Image" width={0} height={0} sizes="100vw" style={{ width: "100%", maxWidth: '100%', height: 'auto', maxHeight: "250px", objectFit: "cover" }}></Image>
              </Link>
              <div className="flex flex-col gap-2 px-4 py-3">
                <div className="flex flex-row gap-1 flex-wrap">
                  {item.Tags.map((tag, i) => <div key={i} className="rounded-xl bg-slate-200 text-gray-600 px-2 py-1 text-xs font-normal">{tag}</div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <Link href={"/Blogs/" + item.Name} className="text-base font-semibold text-blue-400 mt-1 leading-tight hover:underline">{item.Title}</Link>
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
