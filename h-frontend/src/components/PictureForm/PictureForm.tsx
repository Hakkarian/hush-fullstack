// src/components/AddPictureForm.tsx
import React, { useState } from "react";
import pictureStore from "../../store/PictureStore";
import ImageSearch from "../ImageSearch";
import { PictureFormCss } from "./PictureForm.styled";
import DropFileInput from "shared/DropFileInput";
import Button from "shared/Button";
import AddButton from "shared/CustomButton/AddButton";

const PictureForm: React.FC = () => {
  const [image, setImage] = useState<null | File>(null);


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

  return (
    <PictureFormCss>
      <AddButton />
      <ImageSearch />
      <div className="add-image">
        <DropFileInput
          size={50}
          borderRadius="50px"
          name="Add picture"
          onFileChange={handleAddPicture}
        />
        {/* <Button
          disabled={pictureStore.loading}
          text="Turn simiarity OFF"
          className="button--similarity-off"
          onClick={async () => await pictureStore.deleteSimilarPics()}
        >
        </Button> */}
      </div>
    </PictureFormCss>
  );
};

export default PictureForm;
