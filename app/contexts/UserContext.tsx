"use client";

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useEffect, useState } from "react";
import TvShowType from "../types/TvShowType";
import movieType from "../types/MovieType";

type userContextProviderType = {
    user: userContextValueType,
    setValue: Dispatch<SetStateAction<userContextValueType>>
} | null

type userContextValueType = {
  userName: string;
  email: string;
  password: string;
  movies: movieType[];
  shows: TvShowType[];
} | null;

type userContextProviderPropsType = {
  children: React.ReactNode;
};

export const userContext = createContext<userContextProviderType>(null);

const UserContextProvider = ({
  children,
}: PropsWithChildren<userContextProviderPropsType>) => {
  const [user, setUser] = useState<userContextValueType>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("user")!)
        ? JSON.parse(localStorage.getItem("user")!)
        : null;
    }
    return true;
  });

  const getData = () => {
    if (user) {
      fetch(
        `${
          user.userName.includes("@gmail")
            ? `https://moplay-api.onrender.com/api/users?email=${user.email}`
            : `https://moplay-api.onrender.com/api/users?userName=${user.userName}`
        }`
      )
        .then((res) => res.json())
        .then((data) => {
          setUser({
            userName: data[0].userName,
            email: data[0].email,
            password: data[0].password,
            movies: data[0].movies,
            shows: data[0].shows,
          });
        });
    } else {
      setUser(null);
      localStorage.setItem("user", JSON.stringify(null));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <userContext.Provider value={{user,setValue:setUser}}>{children}</userContext.Provider>;
};

export default UserContextProvider;
