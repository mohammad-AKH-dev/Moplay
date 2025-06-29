import SingleShow from "@/app/components/templates/single-tvShow/SingleShow";
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

export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = params;
  const show = await getShowData(id);
  return {
    title: show.name,
    description: show.overview,
  };
}

async function page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  const tvShow: singleTvShowType = await getShowData(id);

  return (
    <section className="single-show__section mt-[15rem]">
      <SingleShow {...tvShow} />
    </section>
  );
}

export default page;
