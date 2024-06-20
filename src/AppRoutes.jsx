import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserDetails from "./Pages/UserDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<UserDetails />} />
    </Routes>
  );
};

export default AppRoutes;
