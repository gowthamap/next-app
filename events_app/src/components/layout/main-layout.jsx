import Footer from "../footer/footer";
import Header from "../header/header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
