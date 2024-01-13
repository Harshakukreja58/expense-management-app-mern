import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};
export default layout;