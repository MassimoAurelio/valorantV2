import type { IArsenal } from "@/types";

export const useArsenalStore = defineStore({
  id: "arsenal",

  state: () => ({
    arsenal: [] as IArsenal[],
    category: [] as IArsenal[],
  }),

  actions: {
    setArsenal(arsenal: IArsenal[]) {
      this.arsenal = arsenal;
    },

    setCategory(category: IArsenal[]) {
      this.category = category;
    },
  },
});
