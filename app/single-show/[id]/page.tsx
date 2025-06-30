import SingleShow from "@/app/components/templates/single-tvShow/SingleShow";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

const getShowData = async (id: number) => {
  const tvShowRes = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
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

  return tvShowRes.json();
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
  const movie = await getShowData(Number(id))
 
  // optionally access and extend (rather than replace) parent metadata
 
  return {
    title: movie.name
  }
}


async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const tvShow: singleTvShowType = await getShowData(id);

  return (
    <section className="single-show__section mt-[6rem] translate-y-12">
      <SingleShow {...tvShow} />
    </section>
  );
}

export default page;
