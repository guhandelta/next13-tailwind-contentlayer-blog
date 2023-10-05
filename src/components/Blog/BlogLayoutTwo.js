import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-black">
        <Link href={blog.URL} className=' col-span-4 overflow-hidden rounded-xl h-full'>
            <Image 
                src={blog.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                height={blog.image.height}
                width={blog.image.width}
                className='aspect-square w-full h-full object-center object-cover group-hover:scale-105 translate-all ease duration-300'
            />
        </Link>

        <div className="w-full col-span-8">
            <span className=" uppercase text-purple-800 font-bold text-md">{blog.tags[0]}</span>
            <Link href={blog.URL} className='inline-block my-1'>
                <h2 className='font-semibold capitalize text-lg'>
                    <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-xl">
                        {blog.title}
                    </span>
                </h2>
            </Link>
            <span className='font-in capitalize text-gray-400 font-semibold text-base'>
                {format(new Date(blog.publishedAt), "MMMM, dd yyyy")}
            </span>
        </div>
    </div>
  )
}

export default BlogLayoutTwo