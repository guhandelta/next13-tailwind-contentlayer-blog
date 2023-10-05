import Image from "next/image"
import { Tag } from "@/src/components"
import { allBlogs } from "@/.contentlayer/generated"
import { BlogDetails, RenderMDX } from "@/src/components/Blog"


export default function BlogPage({ params }) {

    

    const blog = allBlogs.find(blog => blog._raw.flattenedPath === params.slug)

    return <article className="">
            <div className="m-8 text-center relative w-full h-[70vh] bg-black">
                <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Tag name={blog.tags[0]} links={`/categories/categories/${blog.tags[0]}`} className="px-6 text-sm py-2" />
                    <h1 className="inline-block mt-6 font-semibold capitalize text-white text-5xl leading-normal\ relative w-5/6">
                        {blog.title}
                    </h1>
                </div>
                <div className="absolute top-0 bottom-0 left-0 right-0 h-full bg-black/60" />
                    <Image 
                        src={blog.image.filePath.replace("../public", "")}
                        placeholder="blur"
                        blurDataURL={blog.image.blurhashDataUrl}
                        alt={blog.title}
                        height={blog.image.height}
                        width={blog.image.width}
                        className='aspect-square w-full h-full object-center object-cover'
                    />
            </div>
            <BlogDetails blog={blog} slug={params.slug} />

            <div className="grid grid-cols-12 gap-16 mt-8 px-10">
                <div className="col-span-4">Tic</div>
                <RenderMDX blog={blog} />
            </div>
        </article>
}