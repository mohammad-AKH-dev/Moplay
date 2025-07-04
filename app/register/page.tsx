"use client";
import React, { useContext, useState } from "react";
import Navbar from "../components/modules/Navbar/Navbar";
import Footer from "../components/modules/Footer/Footer";
import { SubmitHandler, useForm } from "react-hook-form";
import ThemeContextProvider, { themeContext } from "../contexts/ThemeContext";
import * as yup from "yup";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flip, toast, ToastContainer } from "react-toastify";
import { redirect } from "next/navigation";

type registerFormInputsType = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};

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

function page() {
  const [isChecked, setIsChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const ThemeContext = useContext(themeContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<registerFormInputsType>({
    resolver: yupResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<registerFormInputsType> = async (data) => {
    setDisabled(true);
    if (data) {
      const body = {
        id: crypto.randomUUID(),
        data,
        movies: {},
        shows: {},
      };
      try {
        const res = await fetch("https://moplay-api.onrender.com/api/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const user = await res.json();
        if (user) {
          reset();
          toast.success("Your Account Registered Successfully!", {
            onClose: () => redirect("/"),
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
      setTimeout(() => {
        setDisabled(false);
      }, 3000);
    }
  };

  return (
    <ThemeContextProvider>
      <ToastContainer/>
      <div className="login-page">
        <Navbar />
        <div className="form-wrapper  flex items-center justify-center container">
          <form
            className="w-full p-8 border border-link rounded-2xl sm:w-[60%] md:w-[55%] lg:w-[40%] xl:w-[30%] mx-auto mt-36"
            onSubmit={handleSubmit(onSubmit)}
          >
            <legend className="form-title text-[28px] text-center font-bold mb-4">
              Register
            </legend>
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                firstName:
              </label>
              <input
                {...register("firstName")}
                type="text"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="error text-[12px] text-red">
                {errors.firstName && errors.firstName.message}
              </span>
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                lastName:
              </label>
              <input
                {...register("lastName")}
                type="text"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="error text-[12px] text-red">
                {errors.lastName && errors.lastName.message}
              </span>
            </div>
            <div className="mb-5">
              <label
                htmlFor="userName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                userName:
              </label>
              <input
                {...register("userName")}
                type="text"
                id="userName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="error text-[12px] text-red">
                {errors.userName && errors.userName.message}
              </span>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                email:
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="error text-[12px] text-red">
                {errors.email && errors.email.message}
              </span>
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                password:
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="error text-[12px] text-red">
                {errors.password && errors.password.message}
              </span>
            </div>
            <div className="flex text-[14px] flex-wrap xl:flex-nowrap justify-between">
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    onChange={(event) => setIsChecked(event.target.checked)}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Link
                href={"/login"}
                className="text-link text-[12px]  mb-4 lg:mb-0"
              >
                Do You Have Account? Login!
              </Link>
            </div>
            <button
              type="submit"
              disabled={disabled}
              className={`text-white ${
                disabled
                  ? "bg-blue-300"
                  : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              }   focus:ring-4 m-auto  focus:outline-none focus:ring-blue-300  cursor-pointer font-medium rounded-lg text-sm w-full sm:w-[50%] flex items-center justify-center px-5 py-2.5 text-center`}
            >
              {disabled ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default page;
