import React, { FC, useContext } from "react";
import Header from "../Header";
import { Wrapper } from "../../../styles";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "../../../pages/GalleryPage/GalleryPage";
import MainPage from "../../../pages/MainPage/MainPage";
import ToTop from "components/ToTop";
import { Toaster } from "react-hot-toast";
import SignInPage from "pages/SignInPage";
import SignUpPage from "pages/SignUpPage";

export const Context = React.createContext("");

const App: FC = () => {

  
  return (
      <Wrapper>
        <Toaster />
        <Header />
        <Routes>
          <Route index element={<MainPage />} />
          <Route
            path="/hush-gallery"
            element={
              <Context.Provider value={"hush"}>
                <GalleryPage />
              </Context.Provider>
            }
          />
          <Route
            path="/risey-gallery"
            element={
              <Context.Provider value={"risey"}>
                <GalleryPage />
              </Context.Provider>
            }
          />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
        <ToTop />
      </Wrapper>
  );
};

export default App;
