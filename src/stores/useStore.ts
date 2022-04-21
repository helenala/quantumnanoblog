import create, { State, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import produce, { Draft } from "immer";

import { Random } from "unsplash-js/dist/methods/photos/types";

interface StoreState extends State {
  images: Random[];
  setImages: (images: Random[]) => void;
}

const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
  ): StateCreator<T> =>
  (set, get, api) =>
    config((fn) => set(produce<T>(fn)), get, api);

const useStore = create<StoreState>(
  persist(
    immer((set) => ({
      images: [],
      setImages: (images: Random[]) => set(() => ({ images })),
    })),
    {
      name: "Store", // unique name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useStore;
