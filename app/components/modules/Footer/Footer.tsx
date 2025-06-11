"use client";
import { themeContext } from "@/app/contexts/ThemeContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { BiLogoTelegram } from "react-icons/bi";
import FooterTag from "./FooterTag";

type footerFlagsType = {
  id: number;
  country: string;
  path: string;
};

function Footer() {
  const ThemeContext = useContext(themeContext);
  const [tags,setTags] = useState([
    "Top IMDB",
    "New Release",
    "Movies",
    "Tv Shows",
    "Videos",
    "Action",
    "Fantasy",
    "Animation",
    "Music",
    "Crime",
    "Horror",
    "Sports",
    "Drama",
    "Watch",
    "Sitemap",
    "Talk Show",
    "Comedy",
    "Watch",
    "Latest Movie",
    "Upcoming Movie"
  ])
  const [flags, setFlags] = useState<footerFlagsType[]>([
    {
      id: 0,
      country: "English",
      path: "/images/flags/english.png",
    },
    {
      id: 1,
      country: "Germany",
      path: "/images/flags/germany.png",
    },
    {
      id: 2,
      country: "France",
      path: "/images/flags/france.png",
    },
    {
      id: 3,
      country: "China",
      path: "/images/flags/china.png",
    },
    {
      id: 4,
      country: "Spanish",
      path: "/images/flags/spain.png",
    },
  ]);
  return (
    <footer className="dark:bg-[#0A0D14] mt-24 pb-12">
      <div className="container pt-16 pb-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 lg:gap-y-0 lg:grid-cols-5 gap-x-12">
        <div className="footer-box">
          <Image
            width={500}
            height={500}
            src={`${
              ThemeContext?.value ? "/images/logo.png" : "/images/logo-dark.png"
            }`}
            alt="moplay"
            className="w-[120px] sm:w-[200px] object-contain"
          />
          <p className="text-[16px] leading-7 mt-4 mb-4">
            We are many variations of passages available the majority have
            suffered alteration in some form by injected humour words
            believable.
          </p>
          <select
            defaultValue="English"
            className="select outline-none w-[125px] rounded-xl bg-transparent"
          >
            {flags.map((flag) => (
              <div className="flex items-center gap-x-4 rounded-xl">
                <option value={flag.country}>{flag.country}</option>
              </div>
            ))}
          </select>
        </div>
        <div className="footer-box">
          <h5 className="footer-box__title text-[20px] mb-8 tracking-wider font-semibold relative">
            MoPlay
            <span className="absolute before:w-[6px] before:top-0 before:bg-white dark:before:bg-light rounded-xl before:rounded-xl before:h-[3px] before:absolute before:left-[22px]
             top-9 left-0 w-[40px] inline-block h-[3px] bg-link"></span>
          </h5>
          <ul className="footer-box__links-list text-[16px] flex flex-col gap-y-5">
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 
            before:bg-link before:absolute"
            >
              About Us
            </li>
            <li
              className="list-item relative before:w-[5px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all before:h-[3px] before:-left-4 before:top-3 
            before:bg-link before:absolute"
            >
              Testimonials
            </li>
            <li
              className="list-item relative before:w-[5px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all before:h-[3px] before:-left-4 before:top-3 
            before:bg-link before:absolute"
            >
              Contact Us
            </li>
            <li
              className="list-item relative before:w-[5px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all before:h-[3px] before:-left-4 before:top-3 
            before:bg-link before:absolute"
            >
              Terms Of Service
            </li>
            <li
              className="list-item relative before:w-[5px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all before:h-[3px] before:-left-4 before:top-3 
            before:bg-link before:absolute"
            >
              Privacy policy
            </li>
            <li
              className="list-item relative before:w-[5px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all before:h-[3px] before:-left-4 before:top-3 
            before:bg-link before:absolute"
            >
              Update News
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h5 className="footer-box__title text-[20px] mb-8 tracking-wider font-semibold relative">
            Genres
            <span className="absolute before:w-[6px] before:top-0 before:bg-white dark:before:bg-light rounded-xl before:rounded-xl before:h-[3px] before:absolute before:left-[22px]
             top-9 left-0 w-[40px] inline-block h-[3px] bg-link"></span>
          </h5>
          <ul className="footer-box__links-list text-[16px] flex flex-col gap-y-5">
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Action
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Biography
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Documentary
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Adventure
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Talk Show
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Psychological
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h5 className="footer-box__title text-[20px] tracking-wider mb-8 font-semibold relative">
            Support
            <span className="absolute before:w-[6px] before:top-0 before:bg-white dark:before:bg-light rounded-xl before:rounded-xl before:h-[3px] before:absolute before:left-[22px]
             top-9 left-0 w-[40px] inline-block h-[3px] bg-link"></span>
          </h5>
          <ul className="footer-box__links-list text-[16px] flex flex-col gap-y-5">
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Help Center
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              FAQ's
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              My Account
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Request Movie
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Support
            </li>
            <li
              className="list-item relative before:w-[5px] before:h-[3px] hover:before:w-[10px] transition-all
            hover:pl-2 hover:text-link cursor-pointer delay-100 ease-linear hover:transition-all  before:-left-4 before:top-3 before:bg-link before:absolute"
            >
              Media Center
            </li>
          </ul>
        </div>
        <div className="footer-box">
          <h5 className="footer-box__title text-[20px] mb-8 tracking-wider font-semibold relative">
            Newsletter
            <span className="absolute before:w-[6px] before:top-0 before:bg-white dark:before:bg-light rounded-xl before:rounded-xl before:h-[3px] before:absolute before:left-[22px]
             top-9 left-0 w-[40px] inline-block h-[3px] bg-link"></span>
          </h5>
          <p className="text-[16px] mb-6 leading-7">
            Subscribe Our Newsletter To Get Latest Update And News
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-lg text-[16px] p-6 outline-none rounded-xl bg-transparent w-full mb-6"
          />
          <button className="btn bg-link border-none w-full font-normal text-[12px] xl:text-[14px] hover:bg-red uppercase transition-all py-6 px-4 xl:p-6 whitespace-nowrap rounded-xl text-white">
            <BiLogoTelegram />
            Subscirbe Now
          </button>
        </div>
      </div>
      <div className="footer-tags container flex flex-wrap gap-x-4 gap-y-4">
         {
          tags.map(tag => (
            <FooterTag title={tag}/>
          ))
         }
      </div>
    </footer>
  );
}

export default Footer;
