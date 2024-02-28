import type { IMaps } from "@/types";

export const useMapStore = defineStore({
  id: "map",

  state: () => ({
    maps: [] as IMaps[],
  }),
  actions: {
    setMaps(maps: IMaps[]) {
      this.maps = maps;
    },
  },
});
