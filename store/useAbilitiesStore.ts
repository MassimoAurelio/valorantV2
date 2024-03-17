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
    selectedSkill: null as IAbilities | null,
  }),

  actions: {
    setAbilities(abilities: IAbilities[]) {
      this.abilities = abilities;
      this.showAbilities = abilities.map((_,index) => index === 0);
    },
    openAbilities(index: number) {
      this.showAbilities = this.showAbilities.map(() => false);
      this.showAbilities[index] = true;
    },
    setSelectedSkill(skill: IAbilities) {
      this.selectedSkill = skill;
    },
  },
});
