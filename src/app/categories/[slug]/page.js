import { allBlogs } from "@/.contentlayer/generated";
import { BlogLayoutThree, Categories } from "@/src/components/Blog";
import { slug } from "github-slugger";


const CategoryPage = ({ params }) => {
    // filter the blog as per the params.slug crete the array for all the categories
    const allCategories=["all"];
    const blogs = allBlogs.filter(blog => {
        return blog.tags.some(tag => {
            const slugifiedTag = slug(tag);
            if(!allCategories.includes(slugifiedTag)){
                allCategories.push(slugifiedTag);
            }
            if(params.slug==="all"){
                return true;
            }
            return slugifiedTag === params.slug;
        })
    });

  return <article className=" mt-12 flex flex-col text-black">
    <div className=" px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-5xl">
            #{params.slug}
        </h1>
        <span className="mt-2 inline-block">Discover more categories</span>
    </div>
    <Categories categories={allCategories} currentSlug={params.slug} />
    <div className="grid grid-cols-3 grid-rows-2 gap-16 mx-24 px-32">
        {blogs.map((blog, index)=>(
            <article key={index} className="col-span-1 row-span-1 relative">
                <BlogLayoutThree blog={blog} />
            </article>
        ))}
    </div>
  </article>
}

export default CategoryPage