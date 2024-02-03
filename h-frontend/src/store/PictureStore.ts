// src/stores/PictureStore.ts
import axios from "axios";
import { toastPromise } from "constants/toasts";
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
      images: observable, 
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
    const promise = axios.post(`${backendUrl}/gallery/add`, file);
    const response = await promise;

    runInAction(() => {
      pictureStore.totalCount = response.data.total_count;
      pictureStore.images = response.data.images;
      pictureStore.loading = false;
    });

    toastPromise(promise as Promise<any>, "add");
  }

  async deletePicture(public_id: string) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const promise = axios.post(`${backendUrl}/gallery/remove`, {
      public_id,
    });
    const response = await promise;

    runInAction(() => {
      pictureStore.totalCount = response.data;
      pictureStore.loading = false;
    });
    toastPromise(
      promise as Promise<any>, 'delete');
  }

  async deleteSimilarPics() {
    runInAction(() => {
      pictureStore.loading = true;
    });
    pictureStore.similar.map(
      async (sim) => {
        const promise = axios.post(`${backendUrl}/gallery/remove-similar`, {
          public_id: sim.id,
        });
        await promise;
        toastPromise(promise as Promise<any>, "delete-similar");
      }
    );
    runInAction(() => {
      pictureStore.similar = [];
      pictureStore.loading = false;
    });
  }

  async deletePictures() {
     runInAction(() => {
       pictureStore.loading = true;
     });
    const response = await axios.get(`${backendUrl}/gallery/remove-pictures`);
     runInAction(() => {
       pictureStore.pictures = response.data;
       pictureStore.loading = false;
     });
    window.location.reload();
  }

  async searchSimilar(file: File) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const formData = new FormData();
    formData.append("image", file);
    const promise = axios.post(`${backendUrl}/gallery/similar`, formData);
    const pics = await promise;
    runInAction(() => {
      pictureStore.similar = pics.data as unknown as {
        url: string;
        id: string;
      }[];
      pictureStore.loading = false;
    });

    
    toastPromise(promise as Promise<any>,"similar");
  }
}

const pictureStore = new PictureStore();
export default pictureStore;
