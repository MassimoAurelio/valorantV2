interface IMaps {
  displayName: string;
  narrativeDescription: string;
  uuid: string | number;
  listViewIcon: string;
}

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
