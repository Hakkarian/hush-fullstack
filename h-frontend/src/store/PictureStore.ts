// src/stores/PictureStore.ts
import axios from "axios";
import { observable, action, makeObservable, runInAction } from "mobx";

export interface Picture {
  id: number;
  cloudinaryUrl: string;
  cloudinaryId: string;
}

export interface Similar {
  url: string;
  cloudinaryId: string;
}

const backendUrl = process.env.REACT_APP_API_URL;

class PictureStore {
  pictures: [number, string, string][] = [];
  similar: { url: string; id: string }[] = [];
  images: [number, string, string][] = [];
  loading: boolean = false;
  totalCount: number = 0;

  constructor() {
    makeObservable(this, {
      pictures: observable,
      similar: observable,
      totalCount: observable,
      addPicture: action,
      deletePicture: action,
      addCount: action,
    });
  }

  async emptyImageBox() {
    runInAction(() => {
      pictureStore.images = [];
    });
  }

  async addCount(count: number) {
    runInAction(() => {
      pictureStore.totalCount = count;
    });
  }

  async addPicture(file: any) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const response = await axios.post(`${backendUrl}/gallery/add`, file);

    console.log("picturex", response.data.image);

    runInAction(() => {
      pictureStore.totalCount = response.data.total_count;
      pictureStore.images = response.data.images;
      pictureStore.loading = false;
    });
  }

  async deletePicture(public_id: string) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const response = await axios.post(`${backendUrl}/gallery/remove`, {
      public_id,
    });

    runInAction(() => {
      pictureStore.totalCount = response.data;
      pictureStore.loading = false;
    });
  }

  async deleteSimilarPics() {
    runInAction(() => {
      pictureStore.loading = true;
    });
    pictureStore.similar.map(
      async (sim) =>
        await axios.post(`${backendUrl}/gallery/return`, { public_id: sim.id })
    );
    console.log("successful");
    runInAction(() => {
      pictureStore.similar = [];
      pictureStore.loading = false;
    });
  }

  async searchSimilar(file: File) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const formData = new FormData();
    console.log("hohere");
    formData.append("image", file);
    const pics = await axios.post<File>(
      `${backendUrl}/gallery/similar`,
      formData
    );
    runInAction(() => {
      pictureStore.similar = pics.data as unknown as {
        url: string;
        id: string;
      }[];
      pictureStore.loading = false;
    });
  }
}

const pictureStore = new PictureStore();
export default pictureStore;
