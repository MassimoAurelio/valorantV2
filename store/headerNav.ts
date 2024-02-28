import {
  HEADER_ITEMS_DATA,
  GAME_INFO_DATA,
  SUPPORT_DATA,
  OUR_SOCIALS_DATA,
} from "@/types";

export const headerNavStore = defineStore({
  id: "navigation",
  state: () => ({
    gameItem: HEADER_ITEMS_DATA,
    dropdownStates: new Array(HEADER_ITEMS_DATA.length).fill(false),
  }),
  actions: {
    toggleDropDown(index: number) {
      this.dropdownStates[index] = !this.dropdownStates[index];
    },
    getDropdownData(itemId: number) {
      switch (itemId) {
        case 1:
          return GAME_INFO_DATA;
        case 5:
          return SUPPORT_DATA;
        case 6:
          return OUR_SOCIALS_DATA;
        default:
          return [];
      }
    },
    hasDropdownData(itemId: number) {
      return this.getDropdownData(itemId).length > 0;
    },
  },
});
