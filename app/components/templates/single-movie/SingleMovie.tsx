import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Button from "../../modules/Button/Button";

async function SingleMovie(props: SingleMovieType) {
  const {
    title,
    poster_path,
    overview,
    genres,
    release_date,
    vote_count,
    vote_average,
    status,
    production_companies,
    tagline,
    budget
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
      </div>
      <div className="single-movie__right-section text-center lg:text-left">
        <h2 className="single-movie__title text-[36px]">{title}</h2>
        <p className="single-movie__desc leading-8 mt-2 mx-auto lg:mr-0 lg:ml-0 max-w-[500px] text-[16px] text-ellipsis overflow-hidden">
          {overview}
        </p>
        <div className="single-movie__detailes text-[24px] mt-4">
          <div className="single-movie__genres text-link">
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
          <div className="tag-line text-[18px] mt-4">Tagline: {tagline}</div>
          <div className="text-[18px] mt-4 flex items-center gap-x-6">
            <div className="voted-users">Vote: {vote_count} User voted</div>
            <div className="release_date">Release: {release_date}</div>
          </div>
          <div className="flex items-center gap-x-6">
            <div
              className={` text-[18px] mt-6 flex items-center gap-x-4`}
            >
              Status:{" "}
              <span
                className={`${
                  status === "Released" && "bg-green-600"
                } p-4 py-1  rounded-md text-white bg-link`}
              >
                {status}
              </span>
            </div>
            <div className="budget text-[18px] flex mt-6 items-center">Budget: ${budget.toLocaleString()}</div>
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

export default SingleMovie;
