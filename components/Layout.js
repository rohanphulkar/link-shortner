import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="min-h-screen" data-aos="fade">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
