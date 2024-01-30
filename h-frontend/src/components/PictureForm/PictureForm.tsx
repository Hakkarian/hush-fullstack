// src/components/AddPictureForm.tsx
import React, { useEffect } from "react";
import pictureStore from "../../store/PictureStore";
import ImageSearch from "../ImageSearch";
import { PictureFormCss } from "./PictureForm.styled";
import DropFileInput from "shared/DropFileInput";
import Button from "shared/CustomButton/Button";

import addImage from "../../icons/add-image.svg";

const PictureForm: React.FC = () => {

  console.log('hey check', pictureStore.similar.length);

  // useEffect(() => {
  //   window.addEventListener("reload", deleteSimilarPics);
  //   return () => {
  //     window.removeEventListener("reload", deleteSimilarPics);
  //   }
  // }, [])

  const handleAddPicture = async (file: File) => {
    try {
      const picture = new FormData();
      console.log("before");
      if (file) {
        console.log("insideadd");
        picture.append("image", file);
      }
      console.log("after");
      await pictureStore.addPicture(picture);
    } catch (error) {
      console.error("Error adding picture:", error);
    }
  };

  const deleteSimilarPics = async () => {
    await pictureStore.deleteSimilarPics();
  }

  return (
    <PictureFormCss>
      <ImageSearch />
      <div className="add-image">
        {pictureStore.similar.length !== 0 && (
          <Button
            text="turn similarity off"
            mainTheme="Ocean"
            branchTheme="Coral"
            onSimilarDeletion={async () => await pictureStore.deleteSimilarPics()}
          />
        )}
        <DropFileInput
          imagePath={addImage}
          size={50}
          borderRadius="50px"
          name=""
          onFileChange={handleAddPicture}
        />
      </div>
    </PictureFormCss>
  );
};

export default PictureForm;
