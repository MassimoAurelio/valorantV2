import type { IArsenal } from "@/types";

export const useArsenalStore = defineStore({
  id: "arsenal",

  state: () => ({
    arsenal: [] as IArsenal[],
    category: {} as IArsenal[],
    dynamicGuns: {} as IArsenal,
    skins: [] as IArsenal[],
    showContent: ref<boolean[]>([]),
    showImage: ref<boolean[]>([]),
  }),

  actions: {
    setArsenal(arsenal: IArsenal[]) {
      this.arsenal = arsenal;
      this.showContent = Array(arsenal.length).fill(false);
      this.showImage = Array(arsenal.length).fill(true);
    },

    setCategory(category: IArsenal[]) {
      this.category = category;
    },
    setDynamic(dynamicGuns: IArsenal) {
      this.dynamicGuns = dynamicGuns;
    },

    setSkins(skins: IArsenal[]) {
      this.skins = skins;
    },
    toggleCardItem(isHovering: boolean, index: number) {
      this.showContent = Array(this.arsenal.length).fill(false);
      this.showImage = Array(this.arsenal.length).fill(true);
      this.showContent[index] = isHovering;
      this.showImage[index] = !isHovering;
    },
  },
});
