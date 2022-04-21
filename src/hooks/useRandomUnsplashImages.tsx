import { useEffect } from "react";

import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";

import useStore from "../stores/useStore";

interface UseRandomUnsplashImages {
  images: Random[];
}

export const useRandomUnsplashImages = (
  amountOfImages?: number
): UseRandomUnsplashImages => {
  const { images, setImages } = useStore();

  useEffect(() => {
    if (images.length > 0) return;

    const unsplashApi = createApi({
      accessKey: "BbUQBRtjYCfcRUoqR9nvd1Ksv0lZKwv13WvFUIxHsbQ",
    });

    const fetchImages = async () => {
      console.log("Fetching images from Unsplash..");

      try {
        const count = amountOfImages ?? 1;
        const emptyImagesArray: Random[] = [];
        const { response } = await unsplashApi.photos.getRandom({ count });

        response
          ? setImages(emptyImagesArray.concat(response))
          : setImages(emptyImagesArray);
      } catch (error) {
        console.error(error);
        setImages([]);
      }
    };

    if (images.length === 0) fetchImages();
  });

  return {
    images,
  };
};
