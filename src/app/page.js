import Image from 'next/image'

import { allBlogs } from 'contentlayer/generated'
import { FeaturedPost, HomeCoverSection, RecentPost } from '../components';


export default function Home() {
  // console.log("allBlogs:\t", allBlogs[1]);
  console.log("--------------------------------------------------------------------------------------------------------------------");
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <RecentPost blogs={allBlogs} />
    </main>
  )
}
