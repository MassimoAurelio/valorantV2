export const usePopupStore = defineStore({
  id: "popup",
  state: () => ({
    showPopup: false,
  }),

  actions: {
    togglePopup(show: boolean) {
      this.showPopup = show;
    },
  },
});
