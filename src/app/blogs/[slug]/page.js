import Image from "next/image"
import { Tag } from "@/src/components"
import { allBlogs } from "@/.contentlayer/generated"
import { BlogDetails, RenderMDX } from "@/src/components/Blog"
import siteMetadata from '@/src/utils/siteMetaData'

// Generate custom tags from static content at build time, rather than on-demand
export async function generateStaticParams() {
    return allBlogs.map(blog => ({ slug: blog._raw.flattenedPath }));
}

export async function generateMetadata({ params }) {
    // Fetch teh data of the individual blog
    const blog = allBlogs.find(blog => blog._raw.flattenedPath === params.slug);
    if(!blog) return;

    const publishedAt = new Date(blog.publishedAt).toISOString();
    const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

    let imageList = [ siteMetadata.socialBanner ];
    if(blog.image){
        imageList = typeof blog.image.filePath === "string" ?
                    [siteMetadata.siteUrl + blog.image.filePath.replace("../public","")]
                    : blog.image
    }
    const ogImages = imageList.map(img => {
        return { url: img.includes("http") ? img : siteMetadata.siteUrl+img }
    });
    const authors = blog?.author ? [blog.author] : siteMetadata.author;

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: siteMetadata.siteUrl + blog.URL,
            siteName: siteMetadata.title,
            locale: 'en_US',
            type: 'article',
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            images: ogImages,
            authors: authors.length > 0 ? authors : [siteMetadata.author],
        },
        twitter:{
            card:'summary_large_image',
            description: blog.description,
            title: blog.title,
            images: ogImages,
        },
    }
}

export default function BlogPage({ params }) {

    const blog = allBlogs.find(blog => blog._raw.flattenedPath === params.slug);

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
                <div className="col-span-4">
                    <details className="border-[1px] border-solid border-black text-black rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto">
                        <summary className="text-lg font-semibold capitalize cursor-pointer">Page Sections</summary>
                        <ul className="mt-4 font-in text-base">
                            {
                                blog?.toc?.map(({ slug, level, text }) => {
                                        
                                    return(
                                        <li key={slug} className="py-1">
                                            <a 
                                                href={`#${slug}`}
                                                data-level={level}
                                                className="data-[level=two]:pl-0 data-[level=two]:pt-2 
                                                data-[level=two]:border-t border-solid border-black/30
                                                
                                                data-[level=three]:pl-6 flex items-center justify-start
                                                "
                                            >
                                                { level === "three" ? 
                                                    <span className="flex w-1 h-1 mr-1 rounded-full bg-black">&nbsp;</span>
                                                    :
                                                    null
                                                }
                                                <span className="font-in hover:underline">{text}</span>
                                            </a>
                                        </li> 
                                    )
                                })
                            }
                        </ul>
                    </details>
                </div>
                <RenderMDX blog={blog} />
            </div>
        </article>
}