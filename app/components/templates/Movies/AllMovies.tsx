"use client";

import moviesType from "@/app/types/MoviesType";
import movieType from "@/app/types/MovieType";
import React, { useEffect, useState } from "react";
import MovieBox from "../../modules/MovieBox/MovieBox";
import { useParams } from "next/navigation";
import Pagination from "../../modules/Pagination/Pagination";

type AllMoviesPropsType = {
  movies: moviesType[];
  data: genresDataType;
};

type genreType = {
  id: number;
  name: string;
};

type genresDataType = {
  genres: genreType[];
};

type AllMoviesArrayType = movieType[][] | null;

function AllMovies(props: AllMoviesPropsType) {
  const rowsCount = 10;
  const params = useParams();
  const { id } = params;
  let endIndex = Number(id) * rowsCount;
  let startIndex = endIndex - rowsCount;
  const { movies, data } = props;
  const allMoviesArray: AllMoviesArrayType = movies
    ? movies.map((movie) => movie.results)
    : null;
  const allMovies = [
    ...allMoviesArray![0],
    ...allMoviesArray![1],
    ...allMoviesArray![2],
  ];
  const [genre, setGenre] = useState<number>(-1);
  const [genreName, setGenreName] = useState<string>("Select A Genre");
  const [filteredMovies, setFilteredMovies] = useState<movieType[]>([]);
  useEffect(() => {
    endIndex = Number(id) * rowsCount;
    startIndex = endIndex - rowsCount;
  }, [id]);

  useEffect(() => {
    setFilteredMovies(
      [...allMovies]
        .slice(startIndex, endIndex)
        .filter((movie) => movie.genre_ids.includes(genre))
    );
  }, [genre]);
  return (
    <>
      <section className="sorting-section container mt-12 text-center sm:text-end">
        <details className="dropdown dropdown-end min-w-[208px]">
          <summary className="btn m-1 w-full mx-0">{genreName}</summary>
          <ul className="menu dropdown-content bg-white dark:bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
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
      <section className="movies-boxes container">
        <div
          className={`movies-boxes__wrapper ${
            !filteredMovies.length && genre !== -1
              ? "flex items-center justify-center"
              : "grid place-items-center gap-y-[6.5rem] text-center sm:text-left grid-cols-1 mn:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          } mt-24`}
        >
          {/* default */}
          {genre === -1 &&
            allMovies
              .slice(startIndex, endIndex)
              .map((movie) => <MovieBox key={movie.id} {...movie} />)}
          {/* genres filtering */}
          {genre !== -1 &&
            [...filteredMovies].map((movie) => <MovieBox {...movie} />)}
          {!filteredMovies.length && genre !== -1 && (
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
                No movies found for this genre! Try another genre or check out
                our featured picks!
              </span>
            </div>
          )}
        </div>
        <Pagination
          title = "movies"
          currentPage={Number(id)}
          postsPerPage={10}
          totalPosts={allMovies.length}
        />
      </section>
    </>
  );
}

export default AllMovies;
