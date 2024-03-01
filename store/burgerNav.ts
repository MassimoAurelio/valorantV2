export const useBurgerMenu = defineStore({
  id: "burger",
  state: () => ({
    showBurger: false,
    showDropDown: false,
  }),

  actions: {
    togglePopup() {
      this.showBurger = !this.showBurger;
    },
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
  },
});
