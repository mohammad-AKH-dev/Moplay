import Link from "next/link";
import React, { PropsWithChildren } from "react";

type buttonPropsType = {
  title: string;
  href?: string;
  customStyle?: string;
};

function Button({
  title,
  href,
  children,
  customStyle,
}: PropsWithChildren<buttonPropsType>) {
  return (
    <>
      {href ? (
        <Link href={href} className={`btn text-white ${customStyle} border-none tracking-widest`}>
          {children}
          {title}
        </Link>
      ) : (
        <button className={`btn ${customStyle} border-none tracking-widest`}>
          {children}
          {title}
        </button>
      )}
    </>
  );
}

export default Button;
