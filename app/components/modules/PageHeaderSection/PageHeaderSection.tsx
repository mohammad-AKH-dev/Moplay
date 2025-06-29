"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type pathType = {
  name: string;
  path: string;
};

type PageHeaderSectionPropsType = {
  title: string;
  paths: pathType[];
};

function PageHeaderSection({ paths, title }: PageHeaderSectionPropsType) {
  const pathName = usePathname();
  return (
    <section className="pageHeader_section relative mt-[7rem]">
      <Image
        width={2000}
        height={2000}
        alt="movies-bg"
        src={"/images/movies-bg.jpg"}
        className="max-h-[280px] object-cover brightness-50"
      />
      <div className="movie_page__title text-white absolute top-20 left-0 right-0 text-center">
        <h3 className="title text-[35px] font-bold capitalize">{title}</h3>
        <div className="breadcrumbs text-[16px] text-center mx-auto">
          <ul className="flex items-center justify-center text-center">
            {paths.map((path,index) => (
              <li key={index}>
                <Link
                  href={path.path}
                  className={`${pathName === path.path && "text-link"}`}
                >
                  {path.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="image-divider absolute bottom-0 right-0 left-0 w-full h-[2px] bg-link"></div>
    </section>
  );
}

export default PageHeaderSection;
