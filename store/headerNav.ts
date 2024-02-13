import {
  GAMA_INFO_DATA,
  GAME_ITEM_DATA,
} from "@/components/data/header/game.info.data";

const gameItem = GAME_ITEM_DATA;
const gameInfo = GAMA_INFO_DATA;

export const headerNavStore = defineStore({
  id: "navigation",
  state: () => ({
    gameItem: GAME_ITEM_DATA,
    gameInfo: GAMA_INFO_DATA,
    dropdownStates: new Array(gameItem.length).fill(false),
  }),
  actions: {
    toggleDropDown(index: number) {
      this.dropdownStates[index] = !this.dropdownStates[index];
    },
  },
});
