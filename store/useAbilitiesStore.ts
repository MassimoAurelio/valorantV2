interface IAbilities {
  description: string;
  displayIcon: string;
  displayName: string;
}

export const useAbilitiesStore = defineStore({
  id: "abilities",
  state: () => ({
    abilities: [] as IAbilities[],
    showAbilities: ref<boolean[]>([]),
  }),

  actions: {
    setAbilities(abilities: IAbilities[]) {
      this.abilities = abilities;
    },
    openAbilities(index: number) {
      this.showAbilities = this.showAbilities.map(() => false);
      this.showAbilities[index] = true;
    },
  },
});
