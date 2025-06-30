import SingleMovie from "@/app/components/templates/single-movie/SingleMovie";
import { Metadata, ResolvingMetadata } from "next";
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


type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params
 
  // fetch data
  const movie = await getMovieData(Number(id))
 
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: movie.title
  }
}



async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const movie: SingleMovieType = await getMovieData(id);

  return (
    <section className="single-movie__section mt-[6rem] translate-y-12">
      <SingleMovie {...movie} />
    </section>
  );
}

export default page;
