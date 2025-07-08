"use client";

import moviesType from "@/app/types/MoviesType";
import movieType from "@/app/types/MovieType";
import React, { useEffect, useReducer, useState } from "react";
import MovieBox from "../../modules/MovieBox/MovieBox";
import { useParams } from "next/navigation";
import Link from "next/link";
import Pagination from "../../modules/Pagination/Pagination";
import { eventNames } from "process";
import TvShowsType from "@/app/types/TvShowsType";
import TvShowType from "@/app/types/TvShowType";
import TvShowBox from "../../modules/TvShowBox/TvShowBox";

type AllTvShowsPropsType = {
  shows: TvShowsType[];
  data: genresDataType;
};

type genreType = {
  id: number;
  name: string;
};

type genresDataType = {
  genres: genreType[];
};

type AllMoviesArrayType = TvShowType[][] | null;

function AllTvShows(props: AllTvShowsPropsType) {
  const rowsCount = 10;
  const params = useParams();
  const { id } = params;
  let endIndex = Number(id) * rowsCount;
  let startIndex = endIndex - rowsCount;
  const { shows, data } = props;
  const allShowsArray: AllMoviesArrayType = shows
    ? shows.map((show) => show.results)
    : null;
  const allShows = [
    ...allShowsArray![0],
    ...allShowsArray![1],
    ...allShowsArray![2],
  ];
  const [genre, setGenre] = useState<number>(-1);
  const [genreName, setGenreName] = useState<string>("Select A Genre");
  const [filteredShows, setFilteredShows] = useState<TvShowType[]>([]);
  useEffect(() => {
    endIndex = Number(id) * rowsCount;
    startIndex = endIndex - rowsCount;
  }, [id]);

  useEffect(() => {
    setFilteredShows(
      [...allShows]
        .slice(startIndex, endIndex)
        .filter((movie) => movie.genre_ids.includes(genre))
    );
  }, [genre]);
  return (
    <>
      <section className="sorting-section container mt-12 text-center sm:text-end">
        <details className="dropdown dropdown-end min-w-[208px]">
          <summary className="btn m-1 w-full mx-0 text-white">{genreName}</summary>
          <ul className="menu dropdown-content bg-white  z-[999] dark:bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li
              className=""
              onClick={() => {
                setGenre(-1);
                setGenreName("Select A Genre");
              }}
            >
              <span>Select A Genre</span>
            </li>
            {data.genres.map((mainGenre) => (
              <li
                key={mainGenre.id}
                onClick={() => {
                  setGenre(mainGenre.id);
                  setGenreName(mainGenre.name);
                }}
                className={`${mainGenre.id === genre && "bg-link"}`}
              >
                <span>{mainGenre.name}</span>
              </li>
            ))}
          </ul>
        </details>
      </section>
      <section className="tv-shows-boxes container">
        <div
          className={`tv-shows-boxes__wrapper ${
            !filteredShows.length && genre !== -1
              ? "flex items-center justify-center"
              : "grid place-items-center gap-y-[6.5rem] text-center sm:text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          } mt-24`}
        >
          {/* default */}
          {genre === -1 &&
            allShows
              .slice(startIndex, endIndex)
              .map((show) => <TvShowBox key={show.id} title={show.name} {...show} />)}
          {/* genres filtering */}
          {genre !== -1 &&
            [...filteredShows].map((show) => (
              <TvShowBox title={show.name} {...show} />
            ))}
          {!filteredShows.length && genre !== -1 && (
            <div
              role="alert"
              className="alert alert-error alert-soft flex items-center justify-center font-[35px] max-w-[515px] text-center mb-[8rem]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold capitalize">
                No Shows found for this genre! Try another genre or check out
                our featured picks!
              </span>
            </div>
          )}
        </div>
        <Pagination
          title="shows"
          currentPage={Number(id)}
          postsPerPage={10}
          totalPosts={allShows.length}
        />
      </section>
    </>
  );
}

export default AllTvShows;
