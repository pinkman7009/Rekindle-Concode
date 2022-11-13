import React from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      <Navbar path={location.pathname} />
      {children}
    </>
  );
};

export default Layout;
