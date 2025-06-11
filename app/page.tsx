import Image from "next/image";
import Navbar from "./components/modules/Navbar/Navbar";
import Landing from "./components/templates/index/Landing";
import NowPlaying from "./components/templates/index/NowPlaying";
import moviesType from "./types/MoviesType";
import PopularMovies from "./components/templates/index/PopularMovies";
import useFetch from "./hooks/useFetch";
import TrendingMovies from "./components/templates/index/TrendingMovies";
import TopRatedMovies from "./components/templates/index/TopRatedMovies";
import TvShowsType from "./types/TvShowsType";
import LatestTvShows from "./components/templates/index/LatestTvShows";
import TrendingTvShows from "./components/templates/index/TrendingTvShows";
import TopRatedTvShows from "./components/templates/index/TopRatedTvShows";
import AboutUs from "./components/templates/index/AboutUs";
import PricingPalns from "./components/templates/index/PricingPalns";
import Partners from "./components/templates/index/Partners";
import Blogs from "./components/templates/index/Blogs";
import Footer from "./components/modules/Footer/Footer";
import ThemeContextProvider from "./contexts/ThemeContext";
import CopyRightSection from "./components/modules/CopyRight/CopyRightSection";

export default async function Home() {
  const nowPlayingMovies: moviesType = await useFetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

  const popularMovies: moviesType = await useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=5"
  );

  const trendingMovies: moviesType = await useFetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
  );

  const topRatedMovies: moviesType = await useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );

  const latestTvShows: TvShowsType = await useFetch(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"
  );

  const trendingTvShows: TvShowsType = await useFetch(
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
  );

  const topRatedTvShows: TvShowsType = await useFetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
  );

  return (
    <div className="font-regular text-[30px] pt-8">
      <ThemeContextProvider>
        <Navbar />
        <Landing />
        <NowPlaying {...nowPlayingMovies} />
        <PopularMovies {...popularMovies} />
        <TrendingMovies {...trendingMovies} />
        <TopRatedMovies {...topRatedMovies} />
        <LatestTvShows {...latestTvShows} />
        <TrendingTvShows {...trendingTvShows} />
        <TopRatedTvShows {...topRatedTvShows} />
        <AboutUs />
        <PricingPalns />
        <Partners />
        <Blogs />
        <Footer />
        <CopyRightSection/>
      </ThemeContextProvider>
    </div>
  );
}
