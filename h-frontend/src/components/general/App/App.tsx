import React, { FC, useEffect } from "react";
import Header from "../Header";
import { Wrapper } from "../../../styles";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "../../../pages/GalleryPage/GalleryPage";
import MainPage from "../../../pages/MainPage/MainPage";
import ToTop from "components/ToTop";
import { Toaster } from "react-hot-toast";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";

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
        <Route index element={<MainPage />} />
        <Route path="/hush-gallery" element={<GalleryPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <ToTop />
    </Wrapper>
  );
};

export default App;
