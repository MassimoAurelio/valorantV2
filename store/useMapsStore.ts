import type { IMaps } from "@/types";

export const useMapStore = defineStore({
  id: "map",

  state: () => ({
    maps: [] as IMaps[],
    dynamicMap: {} as IMaps,
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

    handlePreviousClick() {
      const currentIndex = this.maps.findIndex(
        (map) => map.uuid === this.selectedMap?.uuid
      );
      const previousIndex =
        (currentIndex - 1 + this.maps.length) % this.maps.length;
      this.setSelectedMap(this.maps[previousIndex]);
    },
    handleNextClick() {
      const currentIndex = this.maps.findIndex(
        (map) => map.uuid === this.selectedMap?.uuid
      );
      const nextIndex = (currentIndex + 1) % this.maps.length;
      this.setSelectedMap(this.maps[nextIndex]);
    },
  },
});
