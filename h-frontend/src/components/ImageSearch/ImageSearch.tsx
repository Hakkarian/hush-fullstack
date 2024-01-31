import React from "react";
import DropFileInput from "../../shared/DropFileInput";
import pictureStore from "store/PictureStore";
import similarImg from "icons/magnifying-glass.svg";

const ImageSearch = () => {
  const handleSearch = async (file: File) => {
    console.log('outa here')
    await pictureStore.searchSimilar(file);
  };
  return (
    <>
      <DropFileInput
        imagePath={similarImg}
        borderRadius={"20px"}
        size={100}
        name="Similarity search"
        onFileChange={(file: File) => handleSearch(file)}
      />
    </>
  );
};

export default ImageSearch;
