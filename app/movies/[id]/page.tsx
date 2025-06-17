import PageHeaderSection from "@/app/components/modules/PageHeaderSection/PageHeaderSection";
import AllMovies from "@/app/components/templates/Movies/AllMovies";
import useFetch from "@/app/hooks/useFetch";
import moviesType from "@/app/types/MoviesType";
import React from "react";

type genreType = {
  id: number;
  name: string;
};

type genresDataType = {
  genres: genreType[];
};

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

async function page() {
  const data: genresDataType = await useFetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en"
  );

  const popularMovies: moviesType = await useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=5"
  );

  const trendingMovies: moviesType = await useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  );

  const topRatedMovies: moviesType = await useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );

  return (
    <>
      <PageHeaderSection
        title="movies"
        paths={[
          { name: "Home", path: "/" },
          { name: "Movies", path: "/movies/1" },
        ]}
      />
   
      <AllMovies movies={[popularMovies, trendingMovies, topRatedMovies]} data={data}/>
    </>
  );
}

export default page;
