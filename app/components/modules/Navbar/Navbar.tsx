"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import Button from "../Button/Button";
import { LuLogIn } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";


type menuType = {
  id: number;
  title: string;
  path: string;
};

type navbarMenuType = menuType[];

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menus, setMenus] = useState<navbarMenuType>([
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Movies", path: "/genre/movies" },
    { id: 3, title: "Tv Shows", path: "/genre/tv-shows" },
  ]);
  const pathName = usePathname()
   
  console.log(pathName)
  useEffect(() => {
     if(darkMode) {
        document.documentElement.classList.add('dark')
        document.documentElement.style.backgroundColor = '#06090f'
     }else {
        document.documentElement.classList.remove('dark')
        document.documentElement.style.backgroundColor = '#ffffff'
     }
  }, [darkMode]);

  return (
    <nav className="navbar flex justify-between">
      <Link href={"/"} className="logo-wrapper">
        <Image
          src={`${darkMode ? '/images/logo.png' : '/images/logo-dark.png'}`}
          className="logo w-[120px] sm:w-[175px] object-contain"
          width={500}
          height={500}
          alt="logo"
        />
      </Link>
      <ul className="header-menu__list hidden lg:flex gap-x-12 text-[17px]">
        {menus.map((menu) => (
          <li
            className={`menu-item transition-all ${pathName === menu.path && 'text-link'} hover:text-link`}
            key={menu.id}
          >
            <Link href={menu.path}>{menu.title}</Link>
          </li>
        ))}
      </ul>
      <div className="nav-right__section text-[17px] flex items-center gap-x-6">
        <FiSearch className="cursor-pointer" />
        {darkMode ? (
          <IoMoon
            className="cursor-pointer"
            onClick={() => setDarkMode(false)}
          />
        ) : (
          <MdSunny
            className="cursor-pointer"
            onClick={() => setDarkMode(true)}
          />
        )}
       <Button title="SIGN IN" href="/login" customStyle="bg-link hidden lg:flex hover:bg-red">
         <LuLogIn/>
       </Button>
       <CiMenuFries className="cursor-pointer lg:hidden"/>
      </div>
    </nav>
  );
}

export default Navbar;
