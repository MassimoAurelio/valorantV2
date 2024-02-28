export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    showSearch: true,
    searchQuery: "", 
  }),
  getters: {
    getShowSearch(): boolean {
      return this.showSearch;
    },
    getSearchQuery(): string {
      return this.searchQuery;
    },
  },
  actions: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
    clearSearch() {
      this.searchQuery = "";
    }
  },
});