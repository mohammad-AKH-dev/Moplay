"use client";

import React from "react";
import SectionTitle from "../../modules/SectionTitle/SectionTitle";
import moviesType from "@/app/types/MoviesType";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import movieType from "@/app/types/MovieType";
import SliderMovieBox from "../../modules/MovieBox/SliderMovieBox";
import { Autoplay } from "swiper/modules";

function PopularMovies(props: moviesType) {
  const { results } = props;
  return (
    <section className="popular-movies__section mt-28 container">
      <SectionTitle href="/" title="Popular Movies" />
      <div className="popular-movies__slider mt-8">
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
          {results.map((movie: movieType) => (
            <SwiperSlide className="mn:max-w-[230px] sm:max-w-full">
              <SliderMovieBox
                key={movie.id}
                id={movie.id}
                original_language={movie.original_language}
                poster_path={movie.poster_path}
                title={movie.title}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default PopularMovies;
