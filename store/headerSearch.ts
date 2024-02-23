export interface IHeader {}

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    showSearch: true,
  }),
  getters: {
    getShowSearch(): boolean {
      return this.showSearch;
    },
  },
  actions: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
});
