"use client";

import { usePathname } from "next/navigation";
import React from "react";
import axios from "axios";
import Image from "next/image";
import HeroImage from "../../../public/Hero.jpg";
import changeDateFormat from "@/utils/changeDateFormat";
import calculateTime from "@/utils/readingTime";

async function getBlogDetails(id) {
  try {
    const response = await axios.get(`${process.env.BACKEND_URL}/api/blog/${id}`);
    const { blog } = await response.data;
    return blog;
  } catch (err) {
    return [];
  }
}

const page = async () => {
  const pathname = usePathname();

  const id = pathname.split("/")[2];
  const blogData = await getBlogDetails(id);
  
  const date = changeDateFormat(blogData.createdAt)
  console.log(blogData.content)

  const blogContent = { __html: blogData.content };
  return (
    <>
      <div className="blog flex flex-col items-center gap-2 py-10 px-4">
        <Image className="rounded-lg" src={HeroImage} alt="Blog Image" width={300} height={70} />
        <div className="top px-2 text-left w-full py-4">
          <h1 className="font-bold text-2xl">{blogData.title}</h1>
          <p className="tags text-base ">JavaScript, React </p>
          <div className="author">
            <h4 className="font-semibold font-base ">
              Author : <span className="font-normal">{blogData.author}</span>
            </h4>
            <div className="date flex text-sm">
            <p className="read "> {calculateTime(blogData.content)} min read</p>
            <p className="date mx-3 text-sm">{date}</p>
            </div>
          </div>
        </div>
        <div className="bottom px-2">
          <div
            className="description text-base"
            dangerouslySetInnerHTML={blogContent}
          ></div>
        </div>
      </div>
    </>
  );
};

export default page;
