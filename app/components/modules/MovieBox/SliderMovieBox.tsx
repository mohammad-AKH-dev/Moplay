"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";

type movieBoxPropsType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  original_language: string;
  vote_count: number;
};

function SliderMovieBox(props: movieBoxPropsType) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const {
    id,
    title,
    poster_path,
    vote_average,
    original_language,
    vote_count,
  } = props;

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setIsLoaded(false)

    imgRef.current?.addEventListener("load", handleLoad);
    imgRef.current?.addEventListener("error", handleError);

    return () => {
      imgRef.current?.removeEventListener("load", handleLoad);
      imgRef.current?.removeEventListener("error", handleError);
    };
  }, [poster_path]);

  const getVoteColor = (score: number) => {
    if (score < 5) return "text-red";
    if (score === 5) return "text-footer";
    return "text-green-800";
  };

  return !isLoaded ? (
    <div
      className="movie-box group relative mn:max-w-[164px] sm:max-w-full max-h-[334px] sm:max-h-full sm:w-full sm:h-full"
      key={Date.now()}
    >
      <div className="movie-img__wrapper  overflow-hidden relative rounded-2xl">
        {/* Invisible but loadable image */}
        <img
          ref={imgRef}
          className="absolute opacity-0"
          key={Date.now()}
          src={`https://image.tmdb.org/t/p/w500/${poster_path.slice(1)}`}
          onLoad={() => {
            setIsLoaded(true);
          }}
          alt="movie"
        />
        {/* Skeleton Box */}
        <div className="rounded-2xl max-h-[300px] min-h-[264px] sm:min-h-[300px] skeleton"></div>
      </div>
      <div className="movie-detailes overflow-hidden mt-4">
        <h4 className="movie-title w-[226px] mn:w-[150px] sm:w-[226px] h-[27px] text-[18px] font-bold skeleton text-ellipsis overflow-hidden tracking-widest whitespace-nowrap"></h4>
        <div className="movie-time flex flex-wrap gap-x-2 flex-row mn:flex-col gap-y-[1rem] sm:flex-row justify-between mt-2 text-[16px]">
          <span className="skeleton w-[80px] h-[24px] mn:mx-auto sm:mr-0 sm:ml-0"></span>
          <span className="skeleton w-[80px] h-[24px] mn:mx-auto sm:mr-0 sm:ml-0"></span>
        </div>
      </div>
    </div>
  ) : (
    <Link
      key={id}
      href={`/single-movie/${id}`}
      className="movie-box group relative mn:max-w-[164px]  sm:max-w-[230px]  max-h-[334px] sm:max-h-full w-full sm:h-full"
    >
      <IoPlayCircleSharp
        className="text-[100px] group-hover:text-[70px] text-link absolute 
        -translate-y-[50%] top-[40%] cursor-pointer left-[50%] transition-all
        -translate-x-[50%] inset-0 opacity-0 invisible group-hover:visible delay-100 duration-200
        group-hover:opacity-100 group-hover:z-50"
      />
      <div className="movie-img__wrapper overflow-hidden relative rounded-2xl">
        <div className="badge badge-info absolute top-3 text-white rounded-xl right-3 z-50">
          {original_language}
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path.slice(1)}`}
          className="rounded-2xl group-hover:scale-110 max-h-[300px] w-full sm:max-w-[230px] min-h-[264px] mx-auto sm:min-h-[300px]  cursor-pointer group-hover:blur-sm transition-all duration-200 delay-100"
          key={id}
          alt="movie"
        />
      </div>
      <div className="movie-detailes overflow-hidden mt-4">
        <h4 className="movie-title text-[18px] font-bold text-ellipsis overflow-hidden tracking-widest whitespace-nowrap">
          {title}
        </h4>
        <div className="movie-time flex flex-wrap gap-x-2 flex-row mn:flex-col sm:flex-row justify-between mt-2 text-[16px]">
          <span className={getVoteColor(Math.floor(vote_average))}>
            IMDB: {Math.floor(vote_average)}/10
          </span>
          <span className="text-link">{vote_count} User Voted</span>
        </div>
      </div>
    </Link>
  );
}

export default SliderMovieBox;
