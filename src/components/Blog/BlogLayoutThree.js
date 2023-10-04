import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogLayoutThree = ({ blog }) => {
    return (    
        <div className="group flex flex-col items-center text-black">
            <Link href={blog.URL} className=' col-span-4 overflow-hidden rounded-xl h-full'>
                <Image 
                    src={blog.image.filePath.replace("../public", "")}
                    placeholder="blur"
                    blurDataURL={blog.image.blurhashDataUrl}
                    alt={blog.title}
                    height={blog.image.height}
                    width={blog.image.width}
                    className='aspect-[4/3] w-full h-full object-center object-cover group-hover:scale-105 translate-all ease duration-300'
                />
            </Link>

            <div className="w-full flex flex-col mt-4">
                <span className=" uppercase text-accent font-bold text-md">{blog.tags[0]}</span>
                <Link href={blog.URL} className='inline-block my-1'>
                    <h2 className='font-semibold capitalize text-lg'>
                        <span className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-xl">
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

export default BlogLayoutThree