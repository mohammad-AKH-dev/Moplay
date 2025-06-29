import React from "react";
import Navbar from "../components/modules/Navbar/Navbar";
import Footer from "../components/modules/Footer/Footer";
import CopyRightSection from "../components/modules/CopyRight/CopyRightSection";
import ThemeContextProvider from "../contexts/ThemeContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tv-shows',
  description: '...',
}

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeContextProvider>
      <div className="tv-shows-page">
        <Navbar />
        {children}
        <Footer />
        <CopyRightSection />
      </div>
    </ThemeContextProvider>
  );
}

export default layout;
