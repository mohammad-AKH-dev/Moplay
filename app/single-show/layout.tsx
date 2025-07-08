import React from "react";
import Navbar from "../components/modules/Navbar/Navbar";
import Footer from "../components/modules/Footer/Footer";
import CopyRightSection from "../components/modules/CopyRight/CopyRightSection";
import ThemeContextProvider from "../contexts/ThemeContext";
import UserContextProvider from "../contexts/UserContext";
import { ToastContainer } from "react-toastify";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <ToastContainer />
        <div className="single-show-page">
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
