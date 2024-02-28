import type { IAbilities, IRole, IAgents } from "@/types";

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
