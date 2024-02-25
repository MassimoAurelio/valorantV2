<script setup lang="ts">
import { useAgentsStore } from "@/store/useAgents";
const agentsStore = useAgentsStore();
const route = useRoute();
const uuid = route.params.id;

const fetchDynamicsAgents = async (uuid: any) => {
  try {
    const response = await fetch(`https://valorant-api.com/v1/agents/${uuid}`);
    const { data } = await response.json();
    agentsStore.setDynamics(data);
  } catch (error) {
    console.error("WARNING:", error);
  }
};



onMounted(() => {
  fetchDynamicsAgents(uuid);
});
</script>

<template>
  <section>
    <div class="flex flex-row justify-center items-center">
      <div class="w-2/3">
        <img :src="agentsStore.dynamicAgents.fullPortrait" alt="img" />
      </div>
      <div
        class="flex flex-col justify-center items-start gap-5 w-80 ml-auto mt-0 z-1 h-64"
      >
        <h1>{{ agentsStore.dynamicAgents.displayName }}</h1>
        <span>// BIOGRAPHY</span>
        <div>{{ agentsStore.dynamicAgents.description }}</div>
      </div>
    </div>
  </section>
</template>
