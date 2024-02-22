import {
  HEADER_ITEMS_DATA,
  GAME_INFO_DATA,
  SUPPORT_DATA,
  OUR_SOCIALS_DATA,
} from "@/components/data/header/game.info.data";

export const useDropDownMenu = defineStore({
  id: "dropdown",

  state: () => ({
    showDropDown: true,
  }),

  actions: {
    toggleDropDown(index: number) {
      this.showDropDown = !this.showDropDown;
    },
  },
});
