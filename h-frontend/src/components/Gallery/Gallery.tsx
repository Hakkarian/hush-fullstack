import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import pictureStore from "../../store/PictureStore";
import { GalleryCss } from "./Gallery.styled";
import Loader from "shared/Loader";
import Button from "shared/Button";
import EraseButton from "shared/CustomButton/DeleteButton";
import DeleteButton from "shared/CustomButton/DeleteButton";

const Gallery: React.FC = observer(() => {
  const pics = pictureStore.pictures;
  const sims = pictureStore.similar;
  const bottomRef = useRef(null);
  
  console.log('sims is', sims)


  useEffect(() => {

        pictureStore.fetchPictures();

    }, [sims])
  
  useEffect(() => {
    (bottomRef.current as any)?.scrollIntoView({behavior: 'smooth'})
  }, [pics])


  return (
    <GalleryCss>
      <h2>Picture List</h2>
      <ul className="gallery-list">
        {pictureStore.loading && <Loader />}
        {!pictureStore.loading &&
          sims.length === 0 &&
          pics.length !== 0 &&
          pics.map((picture: any) => (
            <li key={picture[0]} className="gallery-item">
              <img
                src={picture[2]}
                alt={picture[1]}
                width="300"
                className="gallery-item__image"
              />
              <EraseButton />
            </li>
          ))}
        {!pictureStore.loading &&
          sims.length !== 0 &&
          sims.map((sim: { url: string; id: string }) => (
            <li key={sim.id} className="gallery-item">
              <img
                src={sim.url}
                alt={sim.id}
                width="300"
                className="gallery-item__image"
              />
              {/* <Button text="Delete" disabled={pictureStore.loading}
                className="gallery-item__button gallery-item__button--delete"
                onClick={async () => await pictureStore.deleteSimilarPics()}
              /> */}
              <DeleteButton />
            </li>
          ))}
        <div ref={bottomRef} style={{ height: "10px" }} />
      </ul>
    </GalleryCss>
  );
});

export default Gallery;
