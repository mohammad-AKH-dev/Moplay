"use client";
import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

type themeContextValueType = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
} | null;
 
export const themeContext = createContext<themeContextValueType>(null);

const ThemeContextProvider = ({children}:React.PropsWithChildren) => {
  const [isDark, setIsDark] = useState<boolean>(true);
  return (
    <themeContext.Provider value={{ value: isDark, setValue: setIsDark }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider