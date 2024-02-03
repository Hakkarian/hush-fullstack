import React, { FC, useEffect } from "react";
import Header from "../Header";
import { Wrapper } from "../../../styles";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "../../../pages/GalleryPage/GalleryPage";
import MainPage from "../../../pages/MainPage/MainPage";
import ToTop from "components/ToTop";
import { Toaster } from "react-hot-toast";

const App: FC = () => {
  useEffect(() => {
    window.addEventListener("beforeload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e: any) => {
    e.preventDefault();
    console.log("Are you sure?");
  };
  return (
    <Wrapper>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/hush-gallery" element={<GalleryPage />} />
        <Route index element={<MainPage />} />
      </Routes>
      <ToTop />
    </Wrapper>
  );
};

export default App;
