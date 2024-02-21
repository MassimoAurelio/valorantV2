export const useBurgerMenu = defineStore({
  id: "burger",
  state: () => ({
    showBurger: false,
  }),

  actions: {
    togglePopup() {
      this.showBurger = !this.showBurger;
    },
  },
});
