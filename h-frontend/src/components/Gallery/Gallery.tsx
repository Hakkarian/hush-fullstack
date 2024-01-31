import React, { useCallback, useEffect, useState } from "react";
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
  const [pics, setPics] = useState([...pictureStore.pictures]);
  const [sims] = useState([...pictureStore.similar]);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  console.log("pics ye", pics.length < totalCount);
  console.log('pics length', pics.length);
  console.log("totalCount", totalCount);
  console.log("page", page);

  
  useEffect(() => {
    if (fetching) {
      fetchPictures(page);
      setPage(page + 1);
    }
  }, [sims, fetching])

  useEffect(() => {
    if (!fetching) {
      document.addEventListener("scroll", handleScroll);
      return () => document.removeEventListener("scroll", handleScroll);
    }
  }, [page, fetching]);
  
  
  const handleScroll = async (e: any) => {
      if (
        (e.target! as any).documentElement.scrollHeight -
        (e.target! as any).documentElement.scrollTop -
        window.innerHeight <
        100 && pics.length < totalCount
      ) {
        await axios
          .get(`${backendUrl}/gallery?page=${page}&per_page=${4}`)
          .then((response) => {
            setPics([...pics, ...response.data.pics]);
            setPage(page + 1);
            setFetching(false);
          });
      }
    }

  const fetchPictures = async (page: number) => {
    await axios
      .get(`${backendUrl}/gallery?page=${page}&per_page=${4}`)
      .then((response) => {
        setPics(response.data.pics)
        setTotalCount(response.data.total_count);
        setFetching(false);
      });
    
  };


  return (
    <GalleryCss>
      <h2 style={{ textAlign: "center" }}>Gallery</h2>
        <ul className="gallery-list">
          {pictureStore.loading && <Loader />}
          {!pictureStore.loading &&
            sims.length === 0 &&
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
            sims.length !== 0 &&
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
              </li>
            ))}
        </ul>
    </GalleryCss>
  );
});

export default Gallery;
