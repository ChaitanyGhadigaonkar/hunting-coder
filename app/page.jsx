import React from 'react'
import HeroImage from "../public/Hero.jpg"
import Image from 'next/image'
import LatestBlogs from "./LatestBlogs"
import axios from 'axios'
import { toast } from 'react-hot-toast'


// TODO: 
// add Blog links for 
// shorten the content of the blogs on main page
// display dates 

async function getBlogs(){

  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/api/blogs`);
    const {blogs} = await response.data;
    return blogs;
  } catch (err) {
    return [];
  }
    
}


const page = async() => {

  const blogs = await getBlogs();

  return (
    <>
      
      <div className="top flex flex-col items-center justify-center">
        <Image className='rounded-lg object-contain mx-5 w-72 h-72 lg:w-96 lg:h-96 ' src={HeroImage} alt="Hero Image" />
        <h1 className="text-4xl font-semibold ">Hunting Coder</h1>
      </div>

      <div className="latest flex flex-col items-center gap-5 mx-5 my-12">
          <h1 className="text-3xl font-medium mb-5">You can read the latest blogs here !!</h1>
          {
            blogs.map((blog)=>{
              return <>
              <div className="blogs">
                <LatestBlogs key={blog._id} id={blog._id} title={blog.title} description={blog.content}/>
          </div>
              </>
            })
          }
          
      </div>
    </>
  )
}

export default page
