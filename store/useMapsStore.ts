import type { IMaps } from "@/types";

export const useMapStore = defineStore({
  id: "map",

  state: () => ({
    maps: [] as IMaps[],
    dinamicMap: {} as IMaps,
    showPopup: false,
  }),
  actions: {
    setMaps(maps: IMaps[]) {
      this.maps = maps;
    },
    setDynamicMap(dinamicMap: IMaps) {
      this.dinamicMap = dinamicMap;
    },

    togglePopup() {
      this.showPopup = !this.showPopup;
    },
  },
});
