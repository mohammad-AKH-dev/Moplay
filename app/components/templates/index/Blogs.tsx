"use client";

import React, { useState } from "react";
import BlogBox from "../../modules/BlogBox/BlogBox";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../../modules/Button/Button";

function Blogs() {
  const [paths, setPaths] = useState([
    "/images/blogs/blog-1.jpg",
    "/images/blogs/blog-2.jpg",
    "/images/blogs/blog-3.jpg",
  ]);
  return (
    <section className="blogs-section container text-center mt-24 mb-12">
      <div className="blogs__header">
        <h5 className="blogs__subtitle tracking-[.3rem] text-link text-[15px] sm:text-[18px] uppercase font-bold">
          Our Blog
        </h5>
        <h3 className="blogs__title dark:text-white font-bold tracking-wider text-[28px] sm:text-[35px] mt-4">
          Our Latest News & <marker className="text-link">Blog</marker>
        </h3>
      </div>
      <div className="blog-boxes__wrapper grid grid-cols-1 sm:grid-cols-2 gap-y-12 lg:gap-y-0 lg:grid-cols-3 gap-x-6 mt-12">
        {paths.map((path) => (
          <BlogBox src={path} key={path} />
        ))}
      </div>
      <div className="blogs_image mt-24 relative">
        <Image
          width={2000}
          height={2000}
          src={"/images/blogs/blog-bg.jpg"}
          alt="blog-image"
          className="max-h-[352px] rounded-2xl object-cover brightness-50"
        />
        <div className="blog-image__content text-white absolute top-5 sm:top-20 right-0 left-0 max-w-[600px] mx-auto">
          <h3 className="blog-image__title text-[26px] sm:text-[38px] font-bold">Start your 30 days free trail.</h3>
          <p className="blog-image__subtitle text-[18px] sm:text-[20px] mt-2 mb-4">
            It is a long established fact reader will be distracted by the
            readable content.
          </p>
          <Button
            title="GET STARTED"
            customStyle="flex-row-reverse bg-link hover:bg-red transition-all text-white"
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
