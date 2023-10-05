import React from 'react'

import { sortBlogs } from '@/src/utils';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Elements/Tag';

const HomeCoverSection = ({ blogs }) => {

    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[2];

  return (
    <div className="w-full inline-block font-rh">
        <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b h-full from-transparent from-0% to-dark rounded-3xl z-0" />
            <Image 
                src={blog.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                fill
                className='w-full h-full object-center object-cover rounded-3xl -z-10'
            />
            <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-white text-2xl">
                <Tag link={`categories/${blog.tags[0]}`} name={blog.tags[0]} />
                <Link href={blog.URL} className='mt-6'>
                    <h1 className=' font-bold capitalize text-4xl'>
                        <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                            {blog.title}
                        </span>
                    </h1>
                </Link>
                <p className='inline-block mt-4 text-xl font-in'>
                    {blog.description}
                </p>
            </div>
        </article>
    </div>
  )
}

export default HomeCoverSection