import { sortBlogs } from '@/src/utils';
import React from 'react'
import { BlogLayoutOne,  BlogLayoutTwo } from '../Blog';

const FeaturedPost = ({ blogs }) => {

    const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
        <h2 className="w-full inline-block font-bold text-4xl capitalize">Featured Posts</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
            <article className="col-span-1 row-span-2 relative font-rh">
              <BlogLayoutOne blog={sortedBlogs[1]} />
            </article>
            <article className="col-span-1 row-span-1 relative font-rh">
            <BlogLayoutTwo blog={sortedBlogs[3]} />
            </article>
            <article className="col-span-1 row-span-1 relative font-rh">
            <BlogLayoutTwo blog={sortedBlogs[4]} />
            </article>
        </div>
    </section>
  )
}

export default FeaturedPost