"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import Button from "../../modules/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { userContext } from "@/app/contexts/UserContext";
import movieType from "@/app/types/MovieType";
import TvShowType from "@/app/types/TvShowType";
import { themeContext } from "@/app/contexts/ThemeContext";
import { Flip, toast } from "react-toastify";
import SeasonDetails from "./SeasonDetails";

type showsType = {
  id?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  password?: string;
  movies?: movieType[];
  shows?: TvShowType[];
} | null;

type showSeasonType = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

function SingleShow(props: singleTvShowType) {
  const ThemeContext = useContext(themeContext);
  const [user, setUser] = useState<showsType>(null);
  const [selectedSeason, setSelectedSeason] = useState<showSeasonType | null>(
    null
  );
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // fetch the informations we need
    const user: showsType = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      fetch(`https://moplay-api.onrender.com/api/users/${String(user.id)}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, []);

  const addToFavouriteShows = async (props: singleTvShowType) => {
    setDisabled(true);
    if (!user?.shows?.some((show) => show.id === props.id)) {
      const data = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        userName: user?.userName,
        password: user?.password,
        movies: user?.movies,
        shows: [...(user?.shows || []), props],
      };
      const res = await fetch(
        `https://moplay-api.onrender.com/api/users/${String(user?.id)}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const updatedShows = await res.json();
      setUser(updatedShows);

      if (res.ok) {
        toast.success("show successfully added to favorites list", {
          position: "top-left",
          autoClose: 2800,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: ThemeContext?.value ? "dark" : "light",
          transition: Flip,
        });
      } else {
        toast.error("Something went wrong, please try again.", {
          position: "top-left",
          autoClose: 2800,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: ThemeContext?.value ? "dark" : "light",
          transition: Flip,
        });
      }
    } else {
      toast.error("You have already added this item.", {
        position: "top-left",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: ThemeContext?.value ? "dark" : "light",
        transition: Flip,
      });
    }
    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  };

  const removeFavouriteShow = async () => {
    setDisabled(true);
    const filteredShows = user?.shows?.filter((show) => show.id !== props.id); // حذف نمایش با id مشخص
    setUser((prevState: showsType) => {
      if (!prevState) return null; // اگر prevState null باشه، null برگردون
      return {
        ...prevState,
        shows: filteredShows,
      };
    });

    const data = {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      userName: user?.userName,
      password: user?.password,
      movies: user?.movies,
      shows: filteredShows,
    };

    const res = await fetch(
      `https://moplay-api.onrender.com/api/users/${String(user?.id)}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      toast.success("show successfully removed from favorites list", {
        position: "top-left",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: ThemeContext?.value ? "dark" : "light",
        transition: Flip,
      });
    } else {
      toast.error("Something went wrong, please try again.", {
        position: "top-left",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: ThemeContext?.value ? "dark" : "light",
        transition: Flip,
      });
    }

    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  };

  const {
    id,
    name,
    poster_path,
    seasons,
    production_countries,
    first_air_date,
    last_air_date,
    number_of_seasons,
    number_of_episodes,
    overview,
    genres,
    vote_average,
    status,
    production_companies,
  } = props;

  return (
    <div className="single-movie-wrapper grid grid-cols-1 lg:grid-cols-2 container gap-y-3 lg:gap-x-12">
      <div className="single-movie__left-section">
        <SeasonDetails
          vote_average={selectedSeason?.vote_average!}
          air_date={selectedSeason?.air_date!}
          episode_count={selectedSeason?.episode_count!}
          season_number={selectedSeason?.season_number!}
          overview={selectedSeason?.overview!}
          name={selectedSeason?.name!}
          poster_path={selectedSeason?.poster_path!}
        />
        <div className="single-movie__img-wrapper overflow-hidden rounded-2xl relative">
          <img
            alt="img"
            className="w-full h-[600px] lg:h-[500px] object-cover rounded-2xl hover:scale-110 transition-all duration-100"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          />
        </div>
        <Swiper
          className="mySwiper mt-8"
          autoplay
          loop
          modules={[Autoplay]}
          breakpoints={{
            360: {
              slidesPerView: 2.3,
            },
            640: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={1}
          spaceBetween={50}
        >
          <Suspense fallback={<span>Loading...</span>}>
            {seasons.map((season) => (
              <SwiperSlide
                key={season.id}
                onClick={() => {
                  setSelectedSeason(season);
                  console.log(season);
                }}
              >
                <label
                  className="season-wrapper group transition-all cursor-pointer"
                  htmlFor="my_modal_7"
                >
                  <div className="show-image__wrapper flex flex-col items-center justify-center text-center mx-auto min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] rounded-2xl overflow-hidden transition-all">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${season.poster_path}`}
                      className="rounded-2xl group-hover:scale-110 transition-all group-hover:brightness-75"
                    />
                  </div>
                  <div className="show-season__detailes text-[11px] mt-2 flex mx-auto mn:mr-0 mn:ml-0 w-[150px] items-center justify-between">
                    <h5 className="season-title uppercase overflow-hidden text-ellipsis whitespace-nowrap font-bold tracking-widest transition-all group-hover:text-link">
                      {season.name}
                    </h5>
                    <span className="imdb text-footer">
                      IMDB:{Math.round(season.vote_average)}/10
                    </span>
                  </div>
                </label>
              </SwiperSlide>
            ))}
          </Suspense>
        </Swiper>
      </div>
      <div className="single-movie__right-section text-left sm:text-center lg:text-left mt-16 lg:mt-0">
        <h2 className="single-movie__title text-[36px]">{name}</h2>
        <p className="single-movie__desc leading-8 mt-2 mx-auto lg:mr-0 lg:ml-0 max-w-[500px] text-[16px] text-ellipsis overflow-hidden">
          {overview}
        </p>
        <div className="single-movie__detailes text-[24px] mt-4">
          <div className="single-movie__genres text-[20px] text-link">
            {genres.map((genre, index) =>
              index !== genres.length - 1 ? (
                <span key={genre.id}>
                  {genre.name}
                  {new Array(1).fill(0).map((zero, index) => (
                    <span key={index}>,</span>
                  ))}
                </span>
              ) : (
                <span key={genre.id}>{genre.name}</span>
              )
            )}
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-x-6 text-[16px] xl:text-[18px] mt-6">
            <div className="single-movie__company whitespace-nowrap text-ellipsis overflow-hidden">
              Company: {production_companies[0].name}
            </div>
            <div className="single-movie__popularity whitespace-nowrap overflow-hidden text-ellipsis">
              IMDB: {Math.floor(vote_average)}/10
            </div>
          </div>
          <div className="shows-episodes__count flex text-center lg:text-left items-center sm:justify-center lg:justify-start text-[16px] xl:text-[18px] gap-x-6">
            <div className=" text-[18px] mt-4">
              Seasons: {number_of_seasons}
            </div>
            <div className=" text-[18px] mt-4">
              Episodes: {number_of_episodes}
            </div>
          </div>
          <div className="text-[16px] xl:text-[18px] text-center lg:text-left mt-4 flex flex-wrap sm:flex-nowrap sm:justify-center lg:justify-start items-center gap-x-6">
            <div className="first_release">First Release: {first_air_date}</div>
            <div className="last_release">Last Release: {last_air_date}</div>
          </div>
          <div className="text-[16px] xl:text-[18px] flex flex-col sm:flex-row   justify-start sm:text-center lg:text-left sm:justify-center lg:justify-start items-center gap-x-6">
            <div
              className={` text-[16px] xl:text-[18px] mt-6 flex w-full sm:justify-center xl:justify-start items-center gap-x-4`}
            >
              Status:{" "}
              <span
                className={`${
                  status === "Released" && "bg-green-600"
                } p-4 py-1  rounded-md text-white bg-link`}
              >
                {status}
              </span>
            </div>
            <div className="country text-[16px] w-full justify-start sm:justify-center xl:justify-start xl:text-[18px] flex mt-6 items-center">
              Country:{" "}
              {production_countries[0]?.iso_3166_1
                ? production_countries[0]?.iso_3166_1
                : "Not Mentioned"}
            </div>
          </div>
        </div>
        {!user?.shows?.some((show) => show.id === props.id) ? (
          <button
            type="button"
            disabled={disabled}
            className={`btn tracking-widest ${
              disabled ? "bg-link w-[136px]" : "bg-red"
            } hover:bg-link transition-all p-4 py-6 mt-10`}
            onClick={() => addToFavouriteShows(props)}
          >
            {disabled ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <span>Add To Favourites</span>
            )}
          </button>
        ) : (
          <button
            type="button"
            disabled={disabled}
            className={`btn tracking-widest ${
              disabled ? "bg-link w-[136px]" : "bg-red"
            } hover:bg-link transition-all p-4 py-6 mt-10`}
            onClick={() => removeFavouriteShow()}
          >
            {disabled ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <span>This Item Is In Your Favourite List</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleShow;
