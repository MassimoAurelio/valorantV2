export const useDropDownMenu = defineStore({
  id: "dropdown",

  state: () => ({
    showDropDown: true,
  }),

  actions: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
  },
});
