"use client";

import React from "react";
import SectionTitle from "../../modules/SectionTitle/SectionTitle";
import moviesType from "@/app/types/MoviesType";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import movieType from "@/app/types/MovieType";
import { Autoplay } from "swiper/modules";
import SliderTvShowBox from "../../modules/TvShowBox/SliderTvShowBox";
import TvShowsType from "@/app/types/TvShowsType";
import TvShowType from "@/app/types/TvShowType";

function LatestTvShows(props: TvShowsType) {
  const { results } = props;
  return (
    <section className="Latest-tv__shows__section mt-28">
      <SectionTitle href="/" title="Latest Tv Shows" />
      <div className="Tv-Shows__slider mt-8">
        <Swiper className="mySwiper" 
        autoplay
        modules={[Autoplay]}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }} spaceBetween={30}>
          {results.map((show: TvShowType) => (
            <SwiperSlide>
              <SliderTvShowBox
                key={show.id}
                id={show.id}
                original_language={show.original_language}
                poster_path={show.poster_path}
                title={show.name}
                vote_average={show.vote_average}
                vote_count={show.vote_count}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default LatestTvShows;
