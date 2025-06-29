"use client";

import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import Button from "../../modules/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

async function SingleSHow(props: singleTvShowType) {
  const {
    name,
    poster_path,
    seasons,
    production_countries,
    first_air_date,
    last_air_date,
    number_of_seasons,
    number_of_episodes,
    overview,
    genres,
    vote_average,
    status,
    production_companies,
  } = props;

  return (
    <div className="single-movie-wrapper grid grid-cols-1 lg:grid-cols-2 container gap-y-3 lg:gap-x-12">
      <div className="single-movie__left-section">
        <div className="single-movie__img-wrapper overflow-hidden rounded-2xl relative">
          <img
            alt="img"
            className="w-full h-[600px] lg:h-[500px] object-cover rounded-2xl hover:scale-110 transition-all duration-100"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          />
        </div>
        <Swiper className="mySwiper mt-8" slidesPerView={4} spaceBetween={30} autoplay loop modules={[Autoplay]}>
          <Suspense fallback={<span>Loading...</span>}>
            {seasons.map((season) => (
              <SwiperSlide>
                <div className="season-wrapper group transition-all cursor-pointer">
                  <div className="show-image__wrapper max-w-[150px] max-h-[150px] rounded-2xl overflow-hidden transition-all">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                      className="rounded-2xl group-hover:scale-110 transition-all group-hover:brightness-75"
                    />
                  </div>
                  <div className="show-season__detailes text-[11px] mt-2 flex items-center justify-between">
                    <h5 className="season-title uppercase overflow-hidden text-ellipsis whitespace-nowrap font-bold tracking-widest transition-all group-hover:text-link">
                      {season.name}
                    </h5>
                    <span className="imdb text-footer">
                      IMDB:{Math.round(season.vote_average)}/10
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Suspense>
        </Swiper>
      </div>
      <div className="single-movie__right-section text-center lg:text-left">
        <h2 className="single-movie__title text-[36px]">{name}</h2>
        <p className="single-movie__desc leading-8 mt-2 mx-auto lg:mr-0 lg:ml-0 max-w-[500px] text-[16px] text-ellipsis overflow-hidden">
          {overview}
        </p>
        <div className="single-movie__detailes text-[24px] mt-4">
          <div className="single-movie__genres text-[20px] text-link">
            {genres.map((genre, index) =>
              index !== genres.length - 1 ? (
                <span>
                  {genre.name}
                  {new Array(1).fill(0).map((zero) => (
                    <span>,</span>
                  ))}
                </span>
              ) : (
                <span>{genre.name}</span>
              )
            )}
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-x-6 text-[18px] mt-6">
            <div className="single-movie__company">
              Company: {production_companies[0].name}
            </div>
            <div className="single-movie__popularity">
              IMDB: {Math.floor(vote_average)}/10
            </div>
          </div>
          <div className="shows-episodes__count flex items-center gap-x-6">
            <div className=" text-[18px] mt-4">
              Seasons: {number_of_seasons}
            </div>
            <div className=" text-[18px] mt-4">
              Episodes: {number_of_episodes}
            </div>
          </div>
          <div className="text-[18px] mt-4 flex items-center gap-x-6">
            <div className="first_release">First Release: {first_air_date}</div>
            <div className="last_release">Last Release: {last_air_date}</div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className={` text-[18px] mt-6 flex items-center gap-x-4`}>
              Status:{" "}
              <span
                className={`${
                  status === "Released" && "bg-green-600"
                } p-4 py-1  rounded-md text-white bg-link`}
              >
                {status}
              </span>
            </div>
            <div className="country text-[18px] flex mt-6 items-center">
              Country: {production_countries[0].iso_3166_1}
            </div>
          </div>
        </div>
        <Button
          title="Add To Favourites"
          customStyle="bg-red hover:bg-link transition-all p-4 py-6 mt-10"
        />
      </div>
    </div>
  );
}

export default SingleSHow;
