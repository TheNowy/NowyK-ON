import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import Contacts from "../../pages/contacts/Contacts";
import Blog from "../../pages/blog/Blog";
import NotFound from "../../pages/error/Error";

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/News" element={<Blog />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
