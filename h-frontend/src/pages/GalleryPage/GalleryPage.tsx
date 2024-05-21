import React, { FC, useContext } from "react";
import Gallery from "../../components/Gallery";
import { GalleryPageCss } from "./GalleryPage.styled";
import PictureForm from "../../components/PictureForm";
import { Context } from "components/general/App/App";
import GalleryRisey from "components/Gallery/GalleryRisey";

const GalleryPage: FC = () => {
  const owner = useContext(Context);
  if (owner === "risey") {
    document.body.style.backgroundColor = "#111"
  } else {
    document.body.style.backgroundColor = "#fff";
  }
  return (
    <GalleryPageCss>
      <PictureForm />
      {owner === "hush" && <Gallery />}
      {owner === "risey" && <GalleryRisey />}
    </GalleryPageCss>
  );
};

export default GalleryPage;
