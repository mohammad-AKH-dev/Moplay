import React from "react";
import SectionTitle from "../../modules/SectionTitle/SectionTitle";
import MovieBox from "../../modules/MovieBox/MovieBox";
import TvShowsType from "@/app/types/TvShowsType";
import TvShowType from "@/app/types/TvShowType";


function TopRatedTvShows(props: TvShowsType) {
  const { results } = props;

  return (
    <section className="Top-Rated-section mt-16 container">
      <SectionTitle title="Top Rated Tv Shows" href="/" />
      <div className="movies-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-28 sm:gap-y-32 md:gap-y-24 mt-8">
        {results.slice(0,10).map((movie: TvShowType) => (
          <MovieBox
            key={movie.id}
            id={movie.id}
            original_language={movie.original_language}
            poster_path={movie.poster_path}
            title={movie.name}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        ))}
      </div>
    </section>
  );
}

export default TopRatedTvShows;
