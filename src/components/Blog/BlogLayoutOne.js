import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Elements/Tag'

const BlogLayoutOne = ({ blog }) => {

    return (
        <div className="group inline-block overflow-hidden rounded-xl">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b h-full from-transparent from-0% to-dark rounded-3xl z-10" />
            <Image 
                src={blog.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                height={blog.image.height}
                width={blog.image.width}
                className='w-full h-full object-center object-cover rounded-3xl group-hover:scale-105 translate-all ease duration-300'
            />
            <div className="w-full absolute bottom-0 p-10 z-20">
                <Tag link={`categories/${blog.tags[0]}`} name={blog.tags[0]} className="mb-4 group-hover:text-black px-6 text-sm py-2 !border" />
                <Link href={blog.URL} className='mt-6'>
                    <h1 className=' font-bold capitalize text-4xl mx-4'>
                        <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ">
                            <p className="hover:text-white ease duration-500 scale-105">{blog.title}</p>
                        </span>
                    </h1>
                </Link>
            </div>
        </div>
    )
}

export default BlogLayoutOne