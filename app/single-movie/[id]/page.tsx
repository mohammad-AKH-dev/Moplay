import SingleMovie from "@/app/components/templates/single-movie/SingleMovie";
import React from "react";

const getMovieData = async (id: number) => {
  const movieRes = await fetch(
    `https://api.themoviedb.org/3/movie/${Number(id)}?language=en-US`,
    {
      method: "GET",
      next: { revalidate: 3600 },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTA2YzQ4ODRlOGM5YWEwNDhlMGZlODMzNjFjZDUzMiIsIm5iZiI6MTc0Njg5MzkxOS40MjUsInN1YiI6IjY4MWY3YzVmNzQyNjZmYmU1OTdlNzNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9yjPjRYR3ho3ME22z_QHWmu8tHKJYkGuSMBqwoLnw",
      },
    }
  );

  return movieRes.json();
};

export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = params;
  const movie = await getMovieData(id);
  return {
    title: movie.title,
    description: movie.overview,
  };
}

async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const movie: SingleMovieType = await getMovieData(id);

  return (
    <section className="single-movie__section mt-[15rem]">
      <SingleMovie {...movie} />
    </section>
  );
}

export default page;
