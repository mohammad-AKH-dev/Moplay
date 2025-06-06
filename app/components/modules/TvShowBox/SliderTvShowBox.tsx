import Image from "next/image";
import React from "react";
import { IoPlayCircleSharp } from "react-icons/io5";

type TvBoxPropsType = {
    id: number
    title: string 
    poster_path: string
    vote_average: number
    original_language: string
    vote_count: number
}

function SliderTvShowBox(props: TvBoxPropsType) {

  const {id,title,poster_path,vote_average,original_language, vote_count} = props

  return (
    <div className="Tv-Show-box group relative max-w-[230px] mx-auto  sm:max-h-full sm:w-full sm:h-full">
      <IoPlayCircleSharp
        className="text-[100px] group-hover:text-[70px] text-link absolute 
        -translate-y-[50%] top-[40%] cursor-pointer left-[50%] transition-all
         -translate-x-[50%] inset-0 opacity-0 invisible group-hover:visible delay-100 duration-200
          group-hover:opacity-100 group-hover:z-50"
      />
      <div className="movie-img__wrapper overflow-hidden relative rounded-2xl">
        <div className="badge badge-info absolute top-3 text-white rounded-xl right-3 z-50">{original_language}</div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path.slice(1)}`}
          className="rounded-2xl group-hover:scale-110 max-h-[300px] min-h-[300px]  cursor-pointer group-hover:blur-sm transition-all duration-200 delay-100"
          width={1000}
          height={1000}
          alt="movie"
        />
      </div>
      <div className="movie-detailes overflow-hidden mt-4">
        <h4 className="movie-title text-[18px] font-bold text-ellipsis overflow-hidden tracking-widest whitespace-nowrap">
          {title}
        </h4>
        <div className="movie-time flex flex-wrap gap-x-2 flex-col sm:flex-row justify-between mt-2 text-[16px]">
          <span className={`text-footer ${Math.floor(vote_average) < 5 && 'text-red'} 
         ${Math.floor(vote_average) === 5 && 'text-footer'} ${Math.floor(vote_average) > 5 && 'text-green-800'}`}>IMDB: {Math.floor(vote_average)}/10</span>
          <span className="text-link">{vote_count} User Voted</span>
        </div>
      </div>
    </div>
  );
}

export default SliderTvShowBox;