import React, { LegacyRef, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import pictureStore from "../../store/PictureStore";
import { GalleryCss } from "./Gallery.styled";
import Loader from "shared/Loader";
import Button from "shared/CustomButton/Button";
import Tilt from 'react-parallax-tilt';
import axios from "axios";

export interface Picture {
  id: number;
  cloudinaryUrl: string;
  cloudinaryId: string;
}

const backendUrl = process.env.REACT_APP_API_URL;

const Gallery: React.FC = observer(() => {
  let pictures = [...pictureStore.pictures];
  const similars = pictureStore.similar;
  const bottomRef = useRef(null);
  const [pics, setPics] = useState([...pictureStore.pictures]);
  const [sims, setSims] = useState([...similars]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  console.log(pics, 'pics')

  
const handleScroll = useCallback(
  async (e: any) => {
    if (
      (e.target! as any).documentElement.scrollHeight -
        (e.target! as any).documentElement.scrollTop -
      window.innerHeight < 100
    ) {
      setPage((prevPage) => prevPage + 1);
      await axios.get<Picture[]>(
        `${backendUrl}/gallery?page=${page}&per_page=${4}`
      ).then(response => setPics([...pics, ...response.data]))
    }
    setFetching(false);
  },
  [page]
  );

  const fetchPictures = async (page: number) => {
      await axios.get<Picture[]>(
        `${backendUrl}/gallery?page=${page}&per_page=${4}`
      ).then(response => setPics(response.data))
    }
  
  useEffect(() => {
    if (fetching) {
      fetchPictures(page);
    }
  }, [sims, fetching])

useEffect(() => {
  document.addEventListener("scroll", handleScroll);
  return () => document.removeEventListener("scroll", handleScroll);
}, [page]);


  return (
    <GalleryCss>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>
        <ul className="gallery-list">
          {pictureStore.loading && <Loader />}
          {!pictureStore.loading &&
            similars.length === 0 &&
            pics.length !== 0 &&
            pics.map((picture: any) => (
              <li key={picture[0]} className="gallery-item">
                <Tilt>
                  <img
                    src={picture[2]}
                    alt={picture[1]}
                    width="300"
                    className="gallery-item__image"
                  />
                </Tilt>
                <Button
                  text="Delete"
                  mainTheme="Ocean"
                  branchTheme="Debris"
                  onSimilarDeletion={async () =>
                    await pictureStore.deletePicture(picture[1])
                  }
                />
              </li>
            ))}
          {!pictureStore.loading &&
            similars.length !== 0 &&
            sims.map((sim: { url: string; id: string }) => (
              <li key={sim.id} className="gallery-item">
                <div className="inner">
                  <img
                    src={sim.url}
                    alt={sim.id}
                    width="300"
                    className="gallery-item__image"
                  />
                </div>
                <div className="demo-overlay"></div>
                {/* <Button text="Delete" disabled={pictureStore.loading}
                className="gallery-item__button gallery-item__button--delete"
                onClick={async () => await pictureStore.deleteSimilarPics()}
              /> */}
              </li>
            ))}

          <div ref={bottomRef} style={{ height: "10px" }} />
        </ul>
    </GalleryCss>
  );
});

export default Gallery;
