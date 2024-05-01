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

  async addPicture(image: any) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const promise = axios.post(`${backendUrl}/pictures/add`, image);
    const response = await promise;
    console.log([...response.data.pictures]);

    runInAction(() => {
      pictureStore.totalCount = response.data.totalCount;
      pictureStore.images = [...response.data.pictures];
      pictureStore.loading = false;
    });

    toastPromise(promise as Promise<any>, "add");
  }

  async deletePicture(public_id: number) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const promise = axios.post(`${backendUrl}/pictures/${public_id}/delete`, {
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
  }

const pictureStore = new PictureStore();
export default pictureStore;
