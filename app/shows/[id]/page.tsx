import PageHeaderSection from "@/app/components/modules/PageHeaderSection/PageHeaderSection";
import AllTvShows from "@/app/components/templates/TvShows/AllTvShows";
import useFetch from "@/app/hooks/useFetch";
import moviesType from "@/app/types/MoviesType";
import TvShowsType from "@/app/types/TvShowsType";
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
    'https://api.themoviedb.org/3/genre/tv/list'
  );

  const latestTvShows: TvShowsType = await useFetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"
  );

  const trendingTvShows: TvShowsType = await useFetch(
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
  );

  const topRatedTvShows: TvShowsType = await useFetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
  );

  return (
    <>
      <PageHeaderSection
        title="TvShows"
        paths={[
          { name: "Home", path: "/" },
          { name: "TvShows", path: "/shows/1" },
        ]}
      />
   
      <AllTvShows shows={[latestTvShows,trendingTvShows,topRatedTvShows]} data={data}/>
    </>
  );
}


export default page;
