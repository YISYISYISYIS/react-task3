import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import FilteredProvider from "../constext/FilteredProvider";
import SignUp from "../components/login/SignUp";
import Login from "../components/login/Login";

const Router = () => {
  return (
    <FilteredProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </FilteredProvider>
  );
};

export default Router;
