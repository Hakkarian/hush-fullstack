import React, { FC } from "react";
import Gallery from "../../components/Gallery";
import { GalleryPageCss } from "./GalleryPage.styled";
import PictureForm from "../../components/PictureForm";

const GalleryPage: FC = () => {
  return (
    <GalleryPageCss>
      <PictureForm />
      <Gallery />
    </GalleryPageCss>
  );
};

export default GalleryPage;
