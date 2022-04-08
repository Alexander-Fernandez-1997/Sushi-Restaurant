import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screen/HomeScreen";
import { MenuScreen } from "./screen/MenuScreen";
import { GalleryScreen } from "./screen/GalleryScreen";
import { AboutScreen } from "./screen/AboutScreen";
import { LoginScreen } from "./screen/LoginScreen";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </>
  );
};
