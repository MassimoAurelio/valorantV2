import { defineStore } from "pinia";


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
  displayIconSmall: string;
  fullPortrait: string;
  displayicon: string;
  uuid: any;
  displayName: string;
  role: IRole;
}

export const useAgentsStore = defineStore({
  id: "Agents",
  state: () => ({
    agents: [] as IAgents[],
    dynamicAgents: {} as IAgents,
  }),

  actions: {
    setAgents(agents: IAgents[]) {
      this.agents = agents;
    },
    setDynamics(dynamicAgents: IAgents) {
      this.dynamicAgents = dynamicAgents;
    },
  
  },
});
