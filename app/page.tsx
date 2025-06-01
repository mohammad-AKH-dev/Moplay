import Image from "next/image";
import Navbar from "./components/modules/Navbar/Navbar";
import Landing from "./components/templates/index/Landing";
import NowPlaying from "./components/templates/index/NowPlaying";
import moviesType from "./types/MoviesType";
import PopularMovies from "./components/templates/index/PopularMovies";
import useFetch from "./hooks/useFetch";
import TrendingMovies from "./components/templates/index/TrendingMovies";
import TopRatedMovies from "./components/templates/index/TopRatedMovies";

export default async function Home() {
  const nowPlayingMovies: moviesType = await useFetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')

  const popularMovies: moviesType = await useFetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=5') 

  const trendingMovies: moviesType = await useFetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US')

  const topRatedMovies: moviesType = await useFetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')

  console.log(trendingMovies)

  return (
    <div className="font-regular text-[30px] p-8">
      <Navbar />
      <Landing />
      <NowPlaying {...nowPlayingMovies} />
      <PopularMovies {...popularMovies}/>
      <TrendingMovies {...trendingMovies}/>
      <TopRatedMovies {...topRatedMovies}/>
    </div>
  );
}
