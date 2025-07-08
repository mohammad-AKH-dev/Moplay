"use client";

import { userContext } from "@/app/contexts/UserContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { BiSolidSlideshow } from "react-icons/bi";
import { IoHomeSharp } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";

function UserPageHeader() {
  const UserContext = useContext(userContext);
  const pathName = usePathname()

  return (
    <section className="user-panel__page-header dark:bg-title mt-24 p-9 pb-20">
      <div className="user-panel__page-header_content container">
        <h2 className="user-panel__page-header_title text-[16px] sm:text-[20px] tracking-widest font-bold text-footer">
          Welcome Back{" "}
          <span className="text-link">{UserContext?.user?.userName}</span>
        </h2>
        <ul className="user-panel__page-header__links translate-y-16 flex flex-wrap sm:flex-nowrap gap-y-6 sm:gap-y-0 items-center gap-x-12">
          <li>
            <Link
              href={`/panel/${UserContext?.user?.id}`}
              className={`flex items-center gap-x-2 transition-all hover:text-link ${pathName === `/panel/${UserContext?.user?.id}` && 'text-link'}`}
            >
              <IoHomeSharp className="text-[14px]" /> Panel
            </Link>
          </li>
          <li>
            <Link
              href={`/panel/${UserContext?.user?.id}/movies`}
              className={`flex items-center gap-x-2 transition-all hover:text-link ${pathName === `/panel/${UserContext?.user?.id}/movies` && 'text-link'}`}
            >
              <RiMovie2Fill className="text-[14px]"/>
              Movies
            </Link>
          </li>
          <li>
            <Link
              href={`/panel/${UserContext?.user?.id}/shows`}
              className={`flex items-center gap-x-2 transition-all hover:text-link ${pathName === `/panel/${UserContext?.user?.id}/shows` && 'text-link'}`}
            >
              <BiSolidSlideshow className="text-[14px]"/>
              Shows
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UserPageHeader;
