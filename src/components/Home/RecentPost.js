import { sortBlogs } from '@/src/utils';
import React from 'react'
import { BlogLayoutOne,  BlogLayoutThree,  BlogLayoutTwo } from '../Blog';
import Link from 'next/link';

const RecentPost = ({ blogs }) => {

    const sortedBlogs = sortBlogs(blogs);
    // sortedBlogs.slice(5,11).forEach(e => console.log("\nTitle:",e._raw.flattenedPath,"\n"));

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
    <div className="w-full flex justify-between">
      <h2 className="inline-block font-bold text-4xl capitalize">Recent Posts</h2>
      <Link href="/categories/all" className='text-purple-600 inline-block font-medium hover:underline underline-offset-2 text-lg'>
        View all...
      </Link>
    </div>
    <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-16">
      {
        sortedBlogs.slice(5,11).map((blog, index) => {
          return <article className="col-span-1 row-span-1 relative font-in">
            <BlogLayoutThree blog={blog} />
          </article>
        })
      }
    </div>
    </section>
  )
}

export default RecentPost