import React, { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import pictureStore from "../../store/PictureStore";
import { GalleryCss } from "./Gallery.styled";
import Loader from "shared/Loader";
import Button from "shared/CustomButton/Button";
import Tilt from "react-parallax-tilt";
import axios from "axios";

export interface Picture {
  id: number;
  cloudinaryUrl: string;
  cloudinaryId: string;
}

const backendUrl = process.env.REACT_APP_API_URL;

const Gallery: React.FC = observer(() => {
  const [pics, setPics] = useState([...pictureStore.pictures]);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(pictureStore.images)
  const [fetching, setFetching] = useState(true);

  console.log('page', page)

  useEffect(() => {
    if (pictureStore.images.length !== 0) {
      setPics([...pics, ...pictureStore.images]);
      pictureStore.emptyImageBox();
    }
    if (fetching || images.length) {
      setPics([...pics, ...pictureStore.images]);
      fetchPictures(page);
    }
  }, [pictureStore.similar, fetching, pics.length, pictureStore.images.length]);

  useEffect(() => {
    if (pics.length < pictureStore.totalCount) {
      document.addEventListener("scroll", handleScroll);
      return () => document.removeEventListener("scroll", handleScroll);
    }
  }, [page, pictureStore.totalCount, pics.length]);

  const handleScroll = async (e: any) => {
    if (
      (e.target! as any).documentElement.scrollHeight -
        (e.target! as any).documentElement.scrollTop -
        window.innerHeight <
      100
    ) {
      await axios
        .get(`${backendUrl}/gallery?page=${page}&per_page=${4}`)
        .then((response) => {
          setPics([...pics, ...response.data.pics]);
          setPage(page + 1);
        });
    }
  };

  const fetchPictures = async (page: number) => {
    await axios
      .get(`${backendUrl}/gallery?page=${page}&per_page=${4}`)
      .then(async (response) => {
        setPics([...response.data.pics]);

        await pictureStore.addCount(response.data.total_count);

        
        setFetching(false);

        setPage(page + 1);
      });
  };

  return (
    <GalleryCss>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>
      <ul className="gallery-list">
        {pictureStore.loading && <Loader />}
        {!pictureStore.loading &&
          pictureStore.similar.length === 0 &&
          pics.length !== 0 &&
          pics.map((picture: any) => (
            <li key={picture[0]} className="gallery-item">
              <Tilt>
                <img
                  src={picture[2]}
                  alt={picture[1]}
                  className="gallery-item__image"
                />
              </Tilt>
              <Button
                similarMode=""
                text="Delete"
                mainTheme="Ocean"
                branchTheme="Debris"
                func={async () => {
                  await pictureStore.deletePicture(picture[1]);
                  setPics(pics.filter((pic: any) => pic[1] !== picture[1]));
                }}
              />
            </li>
          ))}
        {!pictureStore.loading &&
          pictureStore.similar.length !== 0 &&
          pictureStore.similar.map((sim: { url: string; id: string }) => (
            <li key={sim.id} className="gallery-item">
              <Tilt>
                <img
                  src={sim.url}
                  alt={sim.id}
                  width="300"
                  className="gallery-item__image"
                />
              </Tilt>
            </li>
          ))}
      </ul>
    </GalleryCss>
  );
});

export default Gallery;
