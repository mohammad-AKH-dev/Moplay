"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

type themeContextValueType = {
  value: boolean | null;
  setValue: Dispatch<SetStateAction<boolean | null>>;
} | null;

export const themeContext = createContext<themeContextValueType>(null);

const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isDark, setIsDark] = useState<boolean | null>(() => {
    if (typeof window !== "undefined") {
      return (
        JSON.parse(localStorage.getItem("theme")!) === true ||
        !localStorage.getItem("theme")
      );
    }
    return true;
  });
  const pathName = usePathname();
  
  useEffect(() => {
    const storage = localStorage ? localStorage.getItem("theme") : null
    const setTheme = () => {
      if (!storage) {
        localStorage.setItem("theme", JSON.stringify(true));
      } else {
        const theme = JSON.parse(localStorage.getItem("theme")!) as boolean;
        if (theme) {
          setIsDark(true);
        } else {
          setIsDark(false);
        }
      }
    };

    window.addEventListener("load", setTheme);

    return () => window.removeEventListener("load", setTheme);
  }, []);
  return (
    <themeContext.Provider value={{ value: isDark, setValue: setIsDark }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
