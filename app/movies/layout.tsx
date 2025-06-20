import React from "react";
import Navbar from "../components/modules/Navbar/Navbar";
import Footer from "../components/modules/Footer/Footer";
import CopyRightSection from "../components/modules/CopyRight/CopyRightSection";
import ThemeContextProvider from "../contexts/ThemeContext";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeContextProvider>
      <div className="movies-page">
        <Navbar />
        {children}
        <Footer />
        <CopyRightSection />
      </div>
    </ThemeContextProvider>
  );
}

export default layout;
