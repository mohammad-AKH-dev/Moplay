import Image from "next/image";
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import Button from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";

type blogBoxPropsType = {
  src: string;
};

function BlogBox(props: blogBoxPropsType) {
  const { src } = props;

  return (
    <div className="blog-box text-left">
      <div className="blog-box__img-wrapper rounded-2xl overflow-hidden">
        <Image
          width={2000}
          height={2000}
          src={src}
          alt="blog"
          className="rounded-2xl transition-all 
        delay-100 duration-150 hover:scale-110"
        />
      </div>
      <div className="blog-author&comments flex flex-col gap-y-1 md:gap-y-0 md:flex-row gap-x-6 pt-4">
        <div className="author flex items-center  md:justify-center text-[16px] gap-x-3">
          <BsPersonCircle className="text-link text-[18px]" />
          <h5 className="font-bold text-footer delay-100 cursor-pointer duration-150 hover:text-link transition-al">
            By Alicia Davis
          </h5>
        </div>
        <div className="comments flex items-center md:justify-center text-[16px] gap-x-3">
          <FaComments className="text-link text-[18px]" />
          <h5 className="font-bold text-footer delay-100 cursor-pointer duration-150 hover:text-link transition-al">
            03 Comments
          </h5>
        </div>
      </div>
      <div className="divider"></div>
      <h3 className="blog-box__title text-[22px] delay-100 duration-150 cursor-pointer dark:hover:text-link transition-all dark:text-white mb-4">
        There are many variations passage fact that suffered available.
      </h3>
      <Button
        title="READ MORE"
        customStyle="flex-row-reverse bg-link hover:bg-red transition-all text-white"
      >
        <FaArrowRight />
      </Button>
    </div>
  );
}

export default BlogBox;
