'use client'

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import movieType from "@/app/types/MovieType";
import TvShowType from "@/app/types/TvShowType";
import { themeContext } from "@/app/contexts/ThemeContext";
import { Flip, toast } from "react-toastify";

type moviesType = {
  id?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  password?: string;
  movies?: movieType[];
  shows?: TvShowType[];
} | null;

function SingleMovie(props: SingleMovieType) {
  const ThemeContext = useContext(themeContext);
  const [user, setUser] = useState<moviesType>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const user: moviesType = JSON.parse(localStorage.getItem("user")!);
    if (user) {
      fetch(`https://moplay-api.onrender.com/api/users/${String(user.id)}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, []);

   const addToFavouriteMovies = async (props: SingleMovieType) => {
    setDisabled(true);
    if (!user?.movies?.some((movie) => movie.id === props.id)) {
      const data = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        userName: user?.userName,
        password: user?.password,
        movies: [...(user?.movies || []), props],
        shows: user?.shows,
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

      const updatedMovies = await res.json();
      setUser(updatedMovies);

      if (res.ok) {
        toast.success("movie successfully added to favorites list", {
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

  const removeFavouriteMovie = async () => {
      setDisabled(true);
      const filteredMovies = user?.movies?.filter((movie) => movie.id !== props.id); // حذف نمایش با id مشخص
      setUser((prevState: moviesType) => {
        if (!prevState) return null; // اگر prevState null باشه، null برگردون
        return {
          ...prevState,
          movies: filteredMovies,
        };
      });
  
      const data = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        userName: user?.userName,
        password: user?.password,
        movies: filteredMovies,
        shows: user?.shows,
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
        toast.success("movie successfully removed from favorites list", {
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
    title,
    poster_path,
    overview,
    genres,
    release_date,
    vote_count,
    vote_average,
    status,
    production_companies,
    tagline,
    budget,
  } = props;

  return (
    <div className="single-movie-wrapper grid grid-cols-1 lg:grid-cols-2 container gap-y-3 lg:gap-x-12">
      <div className="single-movie__left-section">
        <div className="single-movie__img-wrapper overflow-hidden rounded-2xl relative">
          <img
            alt="img"
            className="w-full h-[600px] lg:h-[500px] object-cover rounded-2xl hover:scale-110 transition-all duration-100"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          />
        </div>
      </div>
      <div className="single-movie__right-section text-center lg:text-left">
        <h2 className="single-movie__title text-[36px]">{title}</h2>
        <p className="single-movie__desc leading-8 mt-2 mx-auto lg:mr-0 lg:ml-0 max-w-[500px] text-[16px] text-ellipsis overflow-hidden">
          {overview}
        </p>
        <div className="single-movie__detailes text-[24px] mt-4">
          <div className="single-movie__genres text-link flex flex-wrap sm:flex-nowrap justify-center lg:justify-start items-center">
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
          <div className="flex items-center justify-center lg:justify-start gap-x-6 text-[15px] sm:text-[18px] mt-6">
            <div className="single-movie__company">
              Company: {production_companies[0].name}
            </div>
            <div className="single-movie__popularity">
              IMDB: {Math.floor(vote_average)}/10
            </div>
          </div>
          <div className="tag-line text-[15px] sm:text-[18px] mt-4 whitespace-nowrap overflow-hidden text-ellipsis">
            Tagline: {tagline}
          </div>
          <div className="text-[15px] sm:text-[18px] mt-4 flex justify-center lg:justify-start items-center gap-x-6">
            <div className="voted-users overflow-hidden text-ellipsis whitespace-nowrap">
              Vote: {vote_count} User voted
            </div>
            <div className="release_date overflow-hidden text-ellipsis whitespace-nowrap">
              Release: {release_date}
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-x-6">
            <div className={` text-[18px] mt-6 flex items-center gap-x-4`}>
              Status:{" "}
              <span
                className={`${
                  status === "Released" && "bg-green-600"
                } p-4 py-1  rounded-md text-white bg-link`}
              >
                {status}
              </span>
            </div>
            <div className="budget text-[18px] flex mt-6 items-center">
              Budget: ${budget.toLocaleString()}
            </div>
          </div>
        </div>
       {!user?.movies?.some((movie) => movie.id === props.id) ? (
          <button
            type="button"
            disabled={disabled}
            className={`btn tracking-widest mx-auto lg:mr-0 lg:ml-0 ${
              disabled ? "bg-link w-[136px]" : "bg-red"
            } hover:bg-link transition-all p-4 text-white mt-10`}
            onClick={() => addToFavouriteMovies(props)}
          >
            {disabled ? (
              <span className="loading loading-spinner loading-lg block -mt-[.7rem]"></span>
            ) : (
              <span>Add To Favourites</span>
            )}
          </button>
        ) : (
          <button
            type="button"
            disabled={disabled}
            className={`btn tracking-widest flex mx-auto lg:mr-0 lg:ml-0 items-center justify-center ${
              disabled ? "bg-link w-[136px]" : "bg-red"
            } hover:bg-link transition-all p-4 text-white mt-10`}
            onClick={() => removeFavouriteMovie()}
          >
            {disabled ? (
              <span className="loading loading-spinner loading-lg block -mt-[.7rem]"></span>
            ) : (
              <span>This Item Is In Your Favourite List</span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleMovie;
