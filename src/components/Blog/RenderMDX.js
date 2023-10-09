"use client";
import React from 'react'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

const mdxComponents = {
    Image
}

const RenderMDX = ({ blog }) => {

    const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className=' col-span-8 font-in prose prose-lg max-w-max prose-blockquote:bg-purple-400/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-purple-800 prose-blockquote:not-italic prose-blockquote:rounded-r-lg prose-li:marker:text-purple-600'>
        <MDXContent components={mdxComponents} />
    </div>
  )
}

export default RenderMDX