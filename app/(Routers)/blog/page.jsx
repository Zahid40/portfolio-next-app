import { NotFoundBlogImage } from '@/const';
import data from '@/public/data'
import Image from 'next/image'

function BlogsPage() {
  const {blogs} = data;

  if(Object.keys(blogs).length === 0){
    return(
      <main className='h-svh flex justify-center items-center flex-col space-y-6 p-main'>
        <div className='relative md:w-1/3 aspect-square  w-full  '>

        <Image src={NotFoundBlogImage} fill style={{objectFit:'contain'}} sizes='300px'   />
        </div>
        <p>
          Currently I&apos;m Working on Blogs ....
        </p>
      </main>
    )
  }
  return (
    <div className='w-full  pb-12 pt-[10vh] px-main max-w-6xl m-auto min-h-svh h-auto  relative '>
      Blogs
    </div>
  )
}

export default BlogsPage
