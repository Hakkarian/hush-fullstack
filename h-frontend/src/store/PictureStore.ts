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
  images: [number, string, string][] = [];
  riseyImages: [number, string, string][] = [];
  loading: boolean = false;
  totalCount: number = 0;
  totalCountRisey: number = 0;
  owner: string = "hush" || "risey";

  constructor() {
    makeObservable(this, {
      images: observable,
      riseyImages: observable,
      totalCount: observable,
      totalCountRisey: observable,
      owner: observable,
      addPicture: action,
      addRiseyPicture: action,
      deleteRiseyPicture: action,
      addCount: action,
    });
  }

  async emptyImageBox() {
    runInAction(() => {
      pictureStore.images = [];
    });
  }
  async emptyImageBoxRisey() {
    runInAction(() => {
      pictureStore.riseyImages = [];
    });
  }

  async addCount(count: number) {
    runInAction(() => {
      pictureStore.totalCount = count;
    });
  }

  async addCountRisey(count: number) {
    runInAction(() => {
      pictureStore.totalCountRisey = count;
    });
  }

  async addPicture(image: any) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const promise = axios.post(`${backendUrl}/pictures/add`, image);
    const response = await promise;

    console.log(
      "🚀 ~ PictureStore ~ runInAction ~ response.data.pictures:",
      response.data.pictures
    );
    runInAction(() => {
      pictureStore.totalCount = response.data.totalCount;
      pictureStore.images = [...pictureStore.images, response.data.pictures];

      pictureStore.loading = false;
    });

    toastPromise(promise as Promise<any>, "add");
  }

  async addRiseyPicture(image: any) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const promise = axios.post(`${backendUrl}/risey-pictures/add`, image);
    const response = await promise;

    console.log(
      "🚀 ~ PictureStore ~ runInAction ~ response.data.pictures:",
      response.data.pictures
    );
    runInAction(() => {
      pictureStore.totalCountRisey = response.data.totalCountRisey;
      pictureStore.riseyImages = [
        ...pictureStore.riseyImages,
        response.data.pictures,
      ];

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
    toastPromise(promise as Promise<any>, "delete");
  }

  async deleteRiseyPicture(public_id: number) {
    runInAction(() => {
      pictureStore.loading = true;
    });
    const promise = axios.post(
      `${backendUrl}/risey-pictures/${public_id}/delete`,
      {
        public_id,
      }
    );
    const response = await promise;

    runInAction(() => {
      pictureStore.totalCountRisey = response.data;
      pictureStore.loading = false;
    });
    toastPromise(promise as Promise<any>, "delete");
  }
}

const pictureStore = new PictureStore();
export default pictureStore;
