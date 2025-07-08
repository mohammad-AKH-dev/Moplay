import Button from "@/app/components/modules/Button/Button";
import MovieBox from "@/app/components/modules/MovieBox/MovieBox";
import TvShowBox from "@/app/components/modules/TvShowBox/SliderTvShowBox";
import movieType from "@/app/types/MovieType";
import TvShowType from "@/app/types/TvShowType";
import { Metadata } from "next";
import React from "react";
import { RiMovie2Fill } from "react-icons/ri";

type showsType = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  movies: movieType[];
  shows: TvShowType[];
} | null;

export const metadata: Metadata = {
  title: "panel/shows",
  description: "...",
};

async function page({ params }: { params: Promise<{ id: string | number }> }) {
  const { id } = await params;

  const res = await fetch(`https://moplay-api.onrender.com/api/users/${id}`, {
    cache: "no-store",
  });
  const shows: showsType = await res.json();

  return (
    <section className="favourite-shows__section container mt-12">
      <h3 className="favourite-shows__title text-[26px] uppercase font-bold tracking-widest">
        shows
      </h3>
      <div
        className={`shows-wrapper mt-16 ${
          shows?.shows.length &&
          "grid grid-cols-1 mn:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-16 sm:gap-y-6 xl:gap-x-9 xl:gap-y-9"
        }`}
      >
        {shows?.shows.length ? (
          shows.shows.map((show) => (
            <TvShowBox title={show.name} key={show.id} {...show} />
          ))
        ) : (
          <div className="notification flex flex-col items-center justify-center gap-y-3 mt-12">
            <RiMovie2Fill className="text-footer text-[100px]" />
            <h2 className="text-[32px] font-bold text-footer capitalize tracking-wider">
              No shows found to show.
            </h2>
            <p className="text-[16px] max-w-[350px] text-center">
              You can go to the shows link to add a new show to your favorites
              list.
            </p>
            <Button
              title="shows"
              href="/shows/1"
              customStyle="bg-link hover:bg-red"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default page;
