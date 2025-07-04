"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import Button from "../Button/Button";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { redirect, usePathname } from "next/navigation";
import { IoHomeSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { themeContext } from "@/app/contexts/ThemeContext";
import { userContext } from "@/app/contexts/UserContext";
import { FaUserCircle } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { RiMovie2Fill } from "react-icons/ri";
import { BiSolidSlideshow } from "react-icons/bi";

type menuType = {
  id: number;
  title: string;
  path: string;
};

type navbarMenuType = menuType[];

function Navbar() {
  const UserContext = useContext(userContext);
  const ThemeContext = useContext(themeContext);
  const pathName = usePathname();
  const [isShowLinks, setIsShowLinks] = useState(false);
  const [menus, setMenus] = useState<navbarMenuType>([
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Movies", path: `/movies/1` },
    { id: 3, title: "Tv Shows", path: `/shows/1` },
  ]);
  const navRef = useRef<HTMLElement>(null);

  const isDark = (value: boolean) => {
    ThemeContext?.setValue(value);
    localStorage.setItem("theme", JSON.stringify(value));
  };

  console.log("context =>", UserContext);

  const logout = () => {
    localStorage.removeItem('user')
    UserContext?.setValue(null)
    redirect('/login')
  }

  useEffect(() => {
    const scrollEvent = () => {
      if (navRef.current) {
        if (
          document.body.scrollTop >= 80 ||
          document.documentElement.scrollTop >= 80
        ) {
          navRef.current.classList.remove("py-9");
          navRef.current.classList.add("py-6");
        } else {
          navRef.current.classList.add("py-9");
          navRef.current.classList.remove("py-6");
        }
      }
    };
    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  useEffect(() => {
    if (ThemeContext?.value) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#06090f";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#ffffff";
    }
  }, [ThemeContext?.value]);

  return (
    <>
      <nav
        ref={navRef}
        className="navbar px-6 fixed top-0 py-9 transition-all duration-300 z-[999] bg-white dark:bg-title"
      >
        <div
          className={`transition-all delay-200 duration-100 ${
            isShowLinks
              ? "backdrop-blur-sm z-[99] fixed w-full h-full"
              : "-z-[99] static backdrop-blur-0 "
          }  -top-5 right-0 left-0`}
        ></div>
        <div className="navbar-content container flex justify-between">
          <Link href={"/"} className="logo-wrapper">
            <Image
              src={`${
                ThemeContext?.value
                  ? "/images/logo.png"
                  : "/images/logo-dark.png"
              }`}
              className="logo w-[120px] sm:w-[175px] object-contain"
              width={500}
              height={500}
              alt="logo"
            />
          </Link>
          <ul className="header-menu__list hidden translate-y-2 lg:flex gap-x-12 text-[17px]">
            {menus.map((menu) => (
              <li
                className={`menu-item transition-all ${
                  pathName === menu.path && "text-link"
                } hover:text-link`}
                key={menu.id}
              >
                <Link href={menu.path}>{menu.title}</Link>
              </li>
            ))}
          </ul>
          <div className="nav-right__section text-[17px] flex items-center gap-x-6">
            <FiSearch className="cursor-pointer" />
            {ThemeContext?.value ? (
              <IoMoon
                className="cursor-pointer"
                onClick={() => isDark(false)}
              />
            ) : (
              <MdSunny
                className="cursor-pointer"
                onClick={() => isDark(true)}
              />
            )}
            {UserContext?.user ? (
              <div className="relative z-[9999] hidden lg:block">
                <FaUserCircle
                  className="cursor-pointer"
                  onClick={() => setIsShowLinks((prevState) => !prevState)}
                />
                <ul className={`bg-white text-title ${isShowLinks ? 'opacity-100 visible' : 'opacity-0 invisible -z-[9999]'} 
                transition-all delay-200 duration-100 rounded-xl absolute top-8 -left-[13.5rem] text-[15px] p-4 px-6`}>
                  <li className="flex items-center justify-between pb-2  gap-x-4 border-b border-[#fff]">
                    {UserContext.user?.userName}{" "}
                    <FaCircleUser className="text-[23px]" />
                  </li>
                  <li className="panel mt-4">
                    <Link
                      href={"/panel"}
                      className={`flex ${
                        pathName === "/panel" && "text-link"
                      } items-center gap-x-2 justify-end text-[16px]`}
                    >
                      Panel
                      <IoHomeSharp />
                    </Link>
                  </li>
                  <li className="favourite-movies mt-4">
                    <Link
                      href={"/panel/movies"}
                      className={`flex ${
                        pathName === "/panel/movies" && "text-link"
                      } items-center gap-x-2 justify-end text-[16px]`}
                    >
                      Favourite Movies
                      <RiMovie2Fill />
                    </Link>
                  </li>
                  <li className="favourite-shows mt-4">
                    <Link
                      href={"/panel/shows"}
                      className={`flex ${
                        pathName === "/panel/shows" && "text-link"
                      } items-center gap-x-2 justify-end text-[16px]`}
                    >
                      Favourite Shows
                      <BiSolidSlideshow />
                    </Link>
                  </li>
                  <li className="log-out mt-6">
                    <div
                      onClick={() => logout()}
                      className={`flex items-center cursor-pointer gap-x-2 justify-end pt-4 text-[16px] border-t border-[#fff]`}
                    >
                      Logout
                      <LuLogOut />
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <Button
                title="SIGN IN"
                href="/login"
                customStyle="bg-link hidden lg:flex hover:bg-red"
              >
                <LuLogIn />
              </Button>
            )}
            <div className="drawer drawer-end max-w-[17px] lg:hidden">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content w-[17px]">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button lg:hidden"
                >
                  <CiMenuFries className="cursor-pointer drawer-button lg:hidden my-drawer-4" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-white dark:bg-main text-base-content min-h-full w-80 p-12 text-end">
                  {/* Sidebar content here */}
                  <Link href={"/"} className="logo-wrapper relative ">
                    <Image
                      src={`${
                        ThemeContext?.value
                          ? "/images/logo.png"
                          : "/images/logo-dark.png"
                      }`}
                      className="logo w-[140px] absolute right-0 object-contain"
                      width={500}
                      height={500}
                      alt="logo"
                    />
                  </Link>
                  <div className="links-wrapper mt-16">
                    {menus.map((menu) => (
                      <li key={menu.id}>
                        <Link
                          className={`text-[18px] ${
                            pathName === menu.path
                              ? "text-link"
                              : "text-title dark:text-white"
                          }
                            transition-all hover:text-link flex items-center justify-end`}
                          href={menu.path}
                        >
                          {menu.title}
                        </Link>
                      </li>
                    ))}
                    <Button
                      title="SIGN IN"
                      href="/login"
                      customStyle="bg-link w-fit mt-6 ml-[6.4rem] justify-end flex hover:bg-red"
                    >
                      <LuLogIn />
                    </Button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
