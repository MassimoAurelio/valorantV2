export const usePopupStore = defineStore({
  id: "popup",
  state: () => ({
    showPopup: false,
  }),

  actions: {
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
  },
});
