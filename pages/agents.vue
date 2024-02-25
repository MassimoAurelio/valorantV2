<script setup lang="ts">
import { useAgentsStore } from "@/store/useAgents";

const agentsStore = useAgentsStore();

const fetchAgents = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/agents/");
    const { data } = await response.json();
    agentsStore.setAgents(data);
  } catch (error) {
    console.error("WARNING:", error);
  }
};

fetchAgents();
</script>

<template>
  <section class="relative">
    <NuxtImg src="/agents.webp" alt="img" class="absolute w-full" />
    <div class="absolute flex flex-col items-start">
      <div
        v-for="agent in agentsStore.agents"
        :key="agent.uuid"
        class="p-2 text-8xl font-black text-white"
      >
        {{ agent.displayName }}
      </div>
    </div>
  </section>
</template>
