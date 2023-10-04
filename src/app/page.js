import Image from 'next/image'

import { allBlogs } from 'contentlayer/generated'


export default function Home() {
  console.log("allBlogs:\t", allBlogs);
  console.log("Testing");
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-orange-500 mt-24 mb-8">Home Page</h1>
      <div className="m-8 p-4 font-rh">Blogs</div>
    </main>
  )
}
