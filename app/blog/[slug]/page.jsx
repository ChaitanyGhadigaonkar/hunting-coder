"use client";

import { usePathname } from "next/navigation";
import React from "react";
import axios from "axios";
import Image from "next/image";
import HeroImage from "../../../public/Hero.jpg"


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
  // const date = Date(2015, 9, 3).toLocaleString('en-US',{ month: 'short', day: 'numeric', year: 'numeric' })
  const blogContent = {__html : blogData.content}
  return (

    <>
      <div className="blog flex flex-col items-center gap-2 px-4 py-10 ">
        <Image src={HeroImage} alt="Blog Image" width={300} height={70} />
        <div className="top">
          <h1 className="font-bold text-2xl py-2">{blogData.title}</h1>
          <p className="tags text-base ">JavaScript, React </p>
          <div className="author">
          <h4 className="font-semibold font-base ">Author : <span className="font-normal">{blogData.author}</span></h4>
          <p className="read"> 13 min read </p>
          </div>
        </div>
        <div className="bottom">
          <div className="description text-base" dangerouslySetInnerHTML={blogContent}>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
