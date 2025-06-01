import React from "react";
import SectionTitle from "../../modules/SectionTitle/SectionTitle";
import MovieBox from "../../modules/MovieBox/MovieBox";
import moviesType from "@/app/types/MoviesType";
import movieType from "@/app/types/MovieType";

function NowPlaying(props: moviesType) {
  const { results } = props;

  return (
    <section className="now-playing-section mt-16">
      <SectionTitle title="Now Playing" href="/" />
      <div className="movies-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-28 sm:gap-y-32 md:gap-y-24 mt-8">
        {results.slice(0,10).map((movie: movieType) => (
          <MovieBox
            key={movie.id}
            id={movie.id}
            original_language={movie.original_language}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
          />
        ))}
      </div>
    </section>
  );
}

export default NowPlaying;
