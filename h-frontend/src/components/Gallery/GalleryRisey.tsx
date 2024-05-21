import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import pictureStore from "../../store/PictureStore";
import { GalleryCss } from "./Gallery.styled";
import Loader from "shared/Loader";
import Button from "shared/CustomButton/Button";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { Tilt } from "react-tilt";

export interface Picture {
  id: number;
  cloudinaryUrl: string;
  cloudinaryId: string;
}

const backendUrl = process.env.REACT_APP_API_URL;

const GalleryRisey: React.FC = observer(() => {
  const [pics, setPics] = useState([...pictureStore.riseyImages]);
  const [page, setPage] = useState(1);
  const [images] = useState(pictureStore.riseyImages);
  const [fetching, setFetching] = useState(true);

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });


  useEffect(() => {
    if (pictureStore.riseyImages.length !== 0) {
      setPics([...pics, ...pictureStore.riseyImages]);
      pictureStore.emptyImageBoxRisey();
    }
    if (fetching || images.length) {
      setPics([...pics, ...pictureStore.riseyImages]);
      fetchPictures(page);
    }
    // eslint-disable-next-line
  }, [fetching, pics.length, pictureStore.totalCountRisey, pictureStore.riseyImages.length]);

  useEffect(() => {
    if (pics.length < pictureStore.totalCountRisey) {
      document.addEventListener("scroll", handleScroll);
      return () => document.removeEventListener("scroll", handleScroll);
    }
    // eslint-disable-next-line
  }, [page, pictureStore.totalCountRisey, pics.length]);

  const handleScroll = async (e: any) => {
    if (
      (e.target! as any).documentElement.scrollHeight -
        (e.target! as any).documentElement.scrollTop -
        window.innerHeight <
      100
    ) {
      await axios
        .get(`${backendUrl}/risey-pictures?page=${page}&per_page=${4}`)
        .then(async (response) => {
          setPics([...pics, ...response.data.pictures]);
          setPage(page + 1);
        });
    }
  };

  const fetchPictures = async (page: number) => {
    await axios
      .get(`${backendUrl}/risey-pictures?page=${page}&per_page=${4}`)
      .then(async (response) => {
        setPics([...response.data.pictures]);

        await pictureStore.addCountRisey(response.data.totalCount);

        setFetching(false);

        setPage(page + 1);
      });
  };

  return (
    <GalleryCss>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>
      <ul className="gallery-list">
        {pictureStore.loading && <Loader />}
        {pics.length !== 0 &&
          pics.map((picture: any) => (
            <li key={picture.id} className="gallery-item">
              {isTabletOrMobile ? (
                <>
                  <Tilt>
                    <img
                      src={picture.cloudinary_url}
                      alt="drawing"
                      className={`gallery-item__image image--risey`}
                    />
                  </Tilt>
                </>
              ) : (
                <img
                  src={picture.cloudinary_url}
                  alt="drawing"
                  className={`gallery-item__image image--risey`}
                />
              )}
              <Button
                text="Delete"
                mainTheme="Minecraft"
                branchTheme="Grave"
                func={async () => {
                  await pictureStore.deleteRiseyPicture(picture.id);
                  setPics(
                    pics.filter(
                      (pic: any) =>
                        pic.cloudinary_url !== picture.cloudinary_url
                    )
                  );
                }}
              />
            </li>
          ))}
      </ul>
    </GalleryCss>
  );
});

export default GalleryRisey;
