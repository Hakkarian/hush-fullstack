import React from "react";
import DropFileInput from "../../shared/DropFileInput";
import pictureStore from "store/PictureStore";

const ImageSearch = () => {
  const handleSearch = async (file: File) => {
    await pictureStore.searchSimilar(file);
  };
  return (
    <>
      <DropFileInput
        borderRadius={"20px"}
        size={100}
        name="Similarity search"
        onFileChange={(file: File) => handleSearch(file)}
      />
    </>
  );
};

export default ImageSearch;
