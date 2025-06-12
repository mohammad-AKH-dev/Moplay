"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import Button from "../Button/Button";
import { LuLogIn } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { themeContext } from "@/app/contexts/ThemeContext";


type menuType = {
  id: number;
  title: string;
  path: string;
};

type navbarMenuType = menuType[];

function Navbar() {
  const ThemeContext = useContext(themeContext)
  const [menus, setMenus] = useState<navbarMenuType>([
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Movies", path: "/movies" },
    { id: 3, title: "Tv Shows", path: "/tv-shows" },
  ]);
  const pathName = usePathname()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const scrollEvent = () => {
       if(window.scrollY > 50){
         navRef.current?.classList.remove('py-12')
         navRef.current?.classList.add('py-6')
       }else {
        navRef.current?.classList.remove('py-6')
        navRef.current?.classList.add('py-12')
       }
    }
    window.addEventListener('scroll',scrollEvent)

    return () => window.removeEventListener('scroll',scrollEvent)
  },[])

  useEffect(() => {
     if(ThemeContext?.value) {
        document.documentElement.classList.add('dark')
        document.documentElement.style.backgroundColor = '#06090f'
     }else {
        document.documentElement.classList.remove('dark')
        document.documentElement.style.backgroundColor = '#ffffff'
     }
     console.log('navbar =>' , ThemeContext?.value)
  }, [ThemeContext?.value]);

  return (
    <nav ref={navRef} className="navbar px-6 sticky top-0 py-12 transition-all duration-300 z-[999] bg-white dark:bg-title">
      <div className="navbar-content container flex justify-between">

      <Link href={"/"} className="logo-wrapper">
        <Image
          src={`${ThemeContext?.value ? '/images/logo.png' : '/images/logo-dark.png'}`}
          className="logo w-[120px] sm:w-[175px] object-contain"
          width={500}
          height={500}
          alt="logo"
        />
      </Link>
      <ul className="header-menu__list hidden translate-y-2 lg:flex gap-x-12 text-[17px]">
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
        {ThemeContext?.value ? (
          <IoMoon
            className="cursor-pointer"
            onClick={() => ThemeContext.setValue(false)}
          />
        ) : (
          <MdSunny
            className="cursor-pointer"
            onClick={() => ThemeContext?.setValue(true)}
          />
        )}
       <Button title="SIGN IN" href="/login" customStyle="bg-link hidden lg:flex hover:bg-red">
         <LuLogIn/>
       </Button>
       <CiMenuFries className="cursor-pointer lg:hidden"/>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
