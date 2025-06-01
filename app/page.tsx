import Image from "next/image";
import Navbar from "./components/modules/Navbar/Navbar";
import Landing from "./components/templates/index/Landing";
import NowPlaying from "./components/templates/index/NowPlaying";
import moviesType from "./types/MoviesType";
import PopularMovies from "./components/templates/index/PopularMovies";

export default async function Home() {
  const nowPlayingMoviesRes = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      next: { revalidate: 3600 },
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTA2YzQ4ODRlOGM5YWEwNDhlMGZlODMzNjFjZDUzMiIsIm5iZiI6MTc0Njg5MzkxOS40MjUsInN1YiI6IjY4MWY3YzVmNzQyNjZmYmU1OTdlNzNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9yjPjRYR3ho3ME22z_QHWmu8tHKJYkGuSMBqwoLnw",
      },
    }
  );
  const nowPlayingMovies: moviesType = await nowPlayingMoviesRes.json();

  const popularMoviesRes = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=4",
    {
      next: { revalidate: 3600 },
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTA2YzQ4ODRlOGM5YWEwNDhlMGZlODMzNjFjZDUzMiIsIm5iZiI6MTc0Njg5MzkxOS40MjUsInN1YiI6IjY4MWY3YzVmNzQyNjZmYmU1OTdlNzNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM9yjPjRYR3ho3ME22z_QHWmu8tHKJYkGuSMBqwoLnw",
      },
    }
  );

  const popularMovies: moviesType = await popularMoviesRes.json();

  return (
    <div className="font-regular text-[30px] p-8">
      <Navbar />
      <Landing />
      <NowPlaying {...nowPlayingMovies} />
      <PopularMovies {...popularMovies} />
    </div>
  );
}
