import React, { FC } from "react";
import Header from "../Header";
import { Wrapper } from "../../../styles";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "../../../pages/GalleryPage/GalleryPage";
import MainPage from "../../../pages/MainPage/MainPage";
import ToTop from "components/ToTop";

const App: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/gallery" element={<GalleryPage />} />
        <Route index element={<MainPage />} />
      </Routes>
      <ToTop />
    </Wrapper>
  );
};

export default App;
