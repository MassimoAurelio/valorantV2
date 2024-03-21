import type { IMaps } from "@/types";

export const useMapStore = defineStore({
  id: "map",

  state: () => ({
    maps: [] as IMaps[],
    dynamicMap: {} as IMaps,
    showPopup: false,
    selectedMap: null as IMaps | null,
  }),
  actions: {
    setMaps(maps: IMaps[]) {
      this.maps = maps;
    },
    setDynamicMap(dynamicMap: IMaps) {
      this.dynamicMap = dynamicMap;
    },
    setSelectedMap(map: IMaps) {
      this.selectedMap = map;
    },

    togglePopup() {
      this.showPopup = !this.showPopup;
    },
  },
});
