"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";

import Button from "../../modules/Button/Button";
import 'animate.css';

type comingMovieType = {
  id: number;
  title: string;
  path: string;
  score: number;
  time: number;
  genre: string;
};

function Landing() {
  const [comingMovies, setComingMovies] = useState<comingMovieType[]>([
    {
      id: 1,
      title: "ant man wasp quantumania",
      path: "/images/slider/ant-man.jpg",
      score: 7.8,
      time: 7800,
      genre: "Action, Crime",
    },
    {
      id: 2,
      title: "harry potter legacy",
      path: "/images/slider/harry-potter.jpg",
      score: 9.5,
      time: 11700,
      genre: "Magic, Fantasy",
    },
    {
      id: 3,
      title: "raised by wolves",
      path: "/images/slider/raised-by-wolves.jpg",
      score: 9.2,
      time: 31200,
      genre: "Fantasy, Drama",
    },
  ]);

  return (
    <div className="landing container mt-24 pt-12">
      <Swiper
        pagination={true}
        autoplay
        loop
        modules={[Autoplay,Pagination]}
        className="mySwiper mt-12 rounded-3xl"
      >
        {comingMovies.map((movie) => (
          <SwiperSlide>
            <div className="movie-wrapper p-12 lg:p-24 min-h-[700px] min-w-full">
              <Image
                width={2000}
                height={2000}
                src={movie.path}
                alt={movie.title}
                className="w-full brightness-50 -z-10 h-full min-h-full cover rounded-3xl absolute inset-0"
              />
              <div className="movie-details__wrapper grid grid-cols-1 gap-y-12 lg:grid-cols-2 translate-y-14 xl:translate-y-28">
                <div className="movie-details">
                  <h4 className="release-date uppercase animate__animated text-[15px] lg:text-[18px] animate__fadeInDown 
                  tracking-[.5rem] lg:tracking-widest text-white font-bold">
                    New Release 2025{" "}
                  </h4>
                  <h1
                    className="movie-title animate__animated animate__fadeInLeft text-[24px] lg:text-[42px] flex flex-wrap gap-x-5
                   tracking-widest text-left text-white aurora font-bold max-w-[450px] uppercase"
                  >
                    
                    {movie.title
                      .trim()
                      .split(" ")
                      .map((str, index) => (
                        <div key={index}>
                          {index === 1 || index === 2 ? (
                            <span
                              key={index}
                              className={`aurora-item max-w-[450px] text-left tracking-widest `}
                            >
                              {str}
                            </span>
                          ) : (
                            <span className={` text-left `} key={index}>
                              {str}
                            </span>
                          )}
                        </div>
                      ))}
                  </h1>
                  <div className="movies-rating flex-wrap md:flex-nowrap text-white flex animate__animated animate__fadeInDown items-center gap-x-4 mt-8">
                    <div className="badge badge-info text-white">
                      <FaRegStar />
                      <span>{movie.score}</span>
                    </div>
                    <span className="uppercase text-[17px] font-bold">
                      imdb
                    </span>
                    <span className=" text-[17px]">2025</span>
                    <div className="movie-time text-[17px]  flex gap-x-1">
                      <span className="movie-hour">
                        {Math.floor(movie.time / 3600)}h
                      </span>
                      <span className="movie-minute">
                        {(movie.time % 3600) / 60}min
                      </span>
                    </div>
                    <span className="movie-genre text-[17px] ">
                      {movie.genre}
                    </span>
                  </div>
                  <div className="movie-desc text-[16px] sm:text-[19px] text-white mt-8 animate__animated animate__fadeInDown">
                    There are many variations of passages orem psum available
                    but the majority have suffered alteration in some repeat
                    predefined chunks form injected humour.
                  </div>
                  <div className="buttons-wrapper mt-6 flex flex-wrap sm:flex-nowrap gap-y-4 items-center animate__animated animate__fadeInUp gap-x-4">
                    <Button
                      title="play now"
                      customStyle="bg-link w-full text-white  sm:w-fit hover:bg-red transition-all uppercase"
                    >
                      <FaPlay />
                    </Button>
                    <Button
                      title="more detailes"
                      customStyle="bg-red w-full  text-white sm:w-fit hover:bg-link transition-all uppercase"
                    />
                  </div>
                </div>
                <div className="watch-trailer__section flex items-center justify-center pb-12 sm:pb-0">
                  <span className="watch-trailer text-white cursor-pointer animate__animated animate__fadeInLeft text-[20px] sm:text-[28px] flex items-center gap-x-3 transition-all hover:text-link">
                     <MdLocalMovies className="text-[30px] sm:text-[40px]"/>
                      Watch Trailer
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Landing;
