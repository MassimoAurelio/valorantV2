<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useAgentsStore } from "@/store/useAgents";
import "swiper/css";
import "swiper/css/virtual";

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
    <div>
      <NuxtImg src="/agents.webp" alt="img" class="absolute w-full" />
    </div>

    <Swiper :slides-per-view="3" :space-between="0">
      <SwiperSlide
        v-for="agent in agentsStore.agents"
        :key="agent.uuid"
        class="p-2 text-8xl font-black text-white"
      >
        <div class="cursor-pointer">{{ agent.displayName }}</div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
