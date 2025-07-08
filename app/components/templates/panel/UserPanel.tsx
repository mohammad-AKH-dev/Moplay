"use client";

import { themeContext } from "@/app/contexts/ThemeContext";
import movieType from "@/app/types/MovieType";
import TvShowType from "@/app/types/TvShowType";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Flip, toast } from "react-toastify";
import * as yup from "yup";

type Inputs = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};

type cookieUserType = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};

type userPanelPropsType = {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  movies: movieType[];
  shows: TvShowType[];
} | null;

const emailRegex = /^[\w+.-]+@[\w-]+\.[a-zA-Z]{2,}$/g;
const registerSchema = yup.object({
  firstName: yup.string().required("please insert firstname."),
  lastName: yup.string().required("please insert lastname."),
  userName: yup
    .string()
    .required("please insert username")
    .min(5, "username should have at least 5 characters"),
  email: yup
    .string()
    .matches(emailRegex, "please enter a valid email")
    .required("please insert email"),
  password: yup
    .string()
    .required("please insert password")
    .min(5, "password should have at least 5 characters"),
});

function UserPanel(props: userPanelPropsType) {
  const params = useParams();
  const { id } = params;
  const [disabled, setDisabled] = useState(false);
  const ThemeContext = useContext(themeContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, errors },
  } = useForm<Inputs>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: props?.firstName,
      lastName: props?.lastName,
      email: props?.email,
      password: props?.password,
      userName: props?.userName,
    },
  });
  function setCookie(name: string, value: cookieUserType, days: number) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie =
      name + "=" + (JSON.stringify(value) || "") + expires + "; path=/";
  }
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setDisabled(true);
    if (isDirty) {
      const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        userName: data.userName,
        password: data.password,
        email: data.email,
        movies: props?.movies,
        shows: props?.shows,
      };
      try {
        const res = await fetch(
          `https://moplay-api.onrender.com/api/users/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        if (res.ok) {
          const user = await res.json();
          setCookie(
            "user",
            {
              firstName: user.firstName,
              lastName: user.lastName,
              userName: user.userName,
              email: user.email,
              password: user.password,
            },
            2
          );
          localStorage.setItem(
            "user",
            JSON.stringify({
              firstName: user.firstName,
              lastName: user.lastName,
              userName: user.userName,
              email: user.email,
              password: user.password,
            })
          );
          toast.success("You Have Updated Your Information!", {
            onClose: () => window.location.reload(),
            position: "top-left",
            autoClose: 2800,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: ThemeContext?.value === true ? "dark" : "light",
            transition: Flip,
          });
        }
      } catch (error) {
        toast.error("There was a problem, please try again.", {
          position: "top-left",
          autoClose: 2800,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: ThemeContext?.value === true ? "dark" : "light",
          transition: Flip,
        });
      }
    } else {
      toast.error("You have not changed any fields.", {
        position: "top-left",
        autoClose: 2800,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: ThemeContext?.value === true ? "dark" : "light",
        transition: Flip,
      });
    }
    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  };

  useEffect(() => {
    if (props) {
      setValue("firstName", props.firstName);
      setValue("lastName", props.lastName);
      setValue("email", props.email);
      setValue("userName", props.userName);
      setValue("password", props.password);
    }
  }, [props]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
      <div className="inputs-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-0 lg:gap-x-6 xl:gap-x-0 gap-y-6">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-title text-[15px] font-bold tracking-tight pb-1 dark:text-dark-title">FirstName:</legend>
          <input
            type="text"
            className="input bg-transparent dark:border-[#ecf9ff33] border-title "
            placeholder="firstname..."
            {...register("firstName")}
          />
          {errors.firstName && (
            <span className="text-[11px] text-red px-1">
              {errors.firstName.message}
            </span>
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-title text-[15px] font-bold tracking-tight pb-1 dark:text-dark-title">LastName:</legend>
          <input
            type="text"
            className="input bg-transparent dark:border-[#ecf9ff33] border-title"
            placeholder="lastname..."
            {...register("lastName")}
          />
          {errors.lastName && (
            <span className="text-[11px] text-red px-1">
              {errors.lastName.message}
            </span>
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-title text-[15px] font-bold tracking-tight pb-1 dark:text-dark-title">Email:</legend>
          <input
            type="email"
            className="input bg-transparent dark:border-[#ecf9ff33] border-title"
            placeholder="Email..."
            {...register("email")}
          />
          {errors.email && (
            <span className="text-[11px] text-red px-1">
              {errors.email.message}
            </span>
          )}
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-title text-[15px] font-bold tracking-tight pb-1 dark:text-dark-title">UserName:</legend>
          <input
            type="text"
            className="input bg-transparent dark:border-[#ecf9ff33] border-title"
            placeholder="username..."
            {...register("userName")}
          />
          {errors.userName && (
            <span className="text-[11px] text-red px-1">
              {errors.userName.message}
            </span>
          )}
        </fieldset>
        <fieldset className="fieldset ">
          <legend className="fieldset-legend text-title text-[15px] font-bold tracking-tight pb-1 dark:text-dark-title">Password:</legend>
          <input
            type="text"
            className="input bg-transparent dark:border-[#ecf9ff33] border-title"
            placeholder="password..."
            {...register("password")}
          />
          {errors.password && (
            <span className="text-[11px] text-red px-1">
              {errors.password.message}
            </span>
          )}
        </fieldset>
      </div>
      <button
        type="submit"
        disabled={disabled}
        className={`text-white ${
          disabled
            ? "bg-blue-300"
            : "bg-blue-700  hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        }   focus:ring-4   focus:outline-none focus:ring-blue-300 font-bold text-[13px] cursor-pointer rounded-lg  w-[200px] flex 
        items-center justify-center px-5 py-2.5 text-center mt-12`}
      >
        {disabled ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <span>Update</span>
        )}
      </button>
    </form>
  );
}

export default UserPanel;
