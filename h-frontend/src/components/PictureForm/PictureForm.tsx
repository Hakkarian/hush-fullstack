// src/components/AddPictureForm.tsx
import React, { useEffect, useState } from "react";
import pictureStore from "../../store/PictureStore";
import ImageSearch from "../ImageSearch";
import { PictureFormCss } from "./PictureForm.styled";
import DropFileInput from "shared/DropFileInput";
import Button from "shared/CustomButton/Button";

import addImage from "../../icons/add-image.svg";
import { observer } from "mobx-react-lite";

const PictureForm: React.FC = observer(() => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (pictureStore.similar.length !== 0) {
      setShown(true);
    } else {
      setShown(false)
    }
  }, [pictureStore.similar.length])
  const handleAddPicture = async (file: File) => {
    try {
      const picture = new FormData();
      if (file) {
        picture.append("image", file);
      }
      await pictureStore.addPicture(picture);
    } catch (error) {
    }
  };

  

  return (
    <PictureFormCss>
      <ImageSearch />
      <div className="add-image">
        {shown ? (
          <Button
            text="turn similarity off"
            mainTheme="Ocean"
            branchTheme="Debris"
            similarMode="normal"
            onDeletion={async () => await pictureStore.deleteSimilarPics()}
          />
        ) : (
          <Button
            text="delete all pictures"
            mainTheme="Ocean"
            branchTheme="Coral"
            similarMode=""
            onDeletion={async () => await pictureStore.deletePictures()}
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
});

export default PictureForm;
