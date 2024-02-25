interface IAbilities {
  slot: string;
  displayName: string;
  displayIcon: string;
  description: string;
}
interface IRole {
  description: string;
  displayIcon: string;
  displayName: string;
}

interface IAgents {
  abilities: IAbilities[];
  description: string;
  displayIcon: string;
  displayIconSmall: string;
  uuid: string;
  displayName: string;
  role: IRole[];
}

export const useAgentsStore = defineStore({
  id: "Agents",
  state: () => ({
    agents: [] as IAgents[],
  }),

  actions: {
    setAgents(agents: IAgents[]) {
    
      this.agents = agents;
    },
  },
});
