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

  console.log('shown', shown);
  console.log('similar form', pictureStore.similar.length);

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

  
console.log("similar too", pictureStore.similar.length !== 0);

  return (
    <PictureFormCss>
      <ImageSearch />
      <div className="add-image">
        {shown && (
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
});

export default PictureForm;
