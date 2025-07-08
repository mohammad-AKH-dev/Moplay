import React from "react";
import Navbar from "../components/modules/Navbar/Navbar";
import Footer from "../components/modules/Footer/Footer";
import CopyRightSection from "../components/modules/CopyRight/CopyRightSection";
import ThemeContextProvider from "../contexts/ThemeContext";
import { Metadata } from "next";
import UserContextProvider from "../contexts/UserContext";

export const metadata: Metadata = {
  title: "Tv-shows",
  description: "...",
};

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <div className="tv-shows-page">
          <Navbar />
          {children}
          <Footer />
          <CopyRightSection />
        </div>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default layout;
