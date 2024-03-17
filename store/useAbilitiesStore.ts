interface IAbilities {
  description: string;
  displayIcon: string;
  displayName: string;
}

export const useAbilitiesStore = defineStore({
  id: "abilities",
  state: () => ({
    abilities: [] as IAbilities[],

  }),

  actions: {
    setAbilities(abilities: IAbilities[]) {
      this.abilities = abilities;
    },
    
  },
});
