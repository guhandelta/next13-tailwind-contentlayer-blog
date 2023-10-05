import { format, parseISO } from 'date-fns'
import Link from 'next/link';
import React from 'react'

const BlogDetails = ({ blog }) => {
    console.log("Blog from BlogDetails:\t", blog.title);
  return (
    <div className="px-10 bg-violet-500 text-white py-2 items-center flex flex-wrap justify-around text-xl font-medium mx-10 rounded-lg">
        <time className="">
            {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </time>
        <span className="m-3">10 views</span>
        <div className="m-3">
            {blog.readingTime.text}
        </div>
        <Link href={`/categories/${blog.tags[0]}`} className="m-3">
            #{blog.tags[0]}
        </Link>
    </div>
  )
}

export default BlogDetails