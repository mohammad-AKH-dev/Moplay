
import SingleSHow from "@/app/components/templates/single-tvShow/SingleShow";
import React from "react";

async function page({ params }: { params: Promise<{ id: number }> }) {
  const {id} = await params

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

  const tvShow: singleTvShowType = await tvShowRes.json()
  console.log('id =>',id)
  console.log('tv show =>' , tvShow)

  return (
    <section className="single-movie__section mt-[15rem]">
       <SingleSHow {...tvShow}/>
    </section>
  );
}

export default page;
