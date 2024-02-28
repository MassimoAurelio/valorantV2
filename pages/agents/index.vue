<script setup lang="ts">
import { useAgentsStore } from "@/store/useAgents";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

useSeoMeta({
  title: "VALORANT: AGENTS",
});

const agentsStore = useAgentsStore();
const router = useRouter();

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

const handleCardClick = (uuid: number, displayName: string) => {
  router.push(`/agents/${uuid}`);
  useSeoMeta({ title: `VALORANT AGENT : ${displayName.toUpperCase()}` });
};
</script>

<template>
  <div class="relative w-full">
    <!--  <div>
      <NuxtImg src="/agents.webp" alt="img" class="absolute w-full z-0" />
    </div> -->
    <Carousel
      ref="carousel"
      orientation="vertical"
      class="relative w-full max-w-xsw-full max-w-s"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="-mt-1 h-[700px]">
        <CarouselItem
          v-for="agent in agentsStore.agents"
          :key="agent.uuid"
          class="pl-0 md:basis-1/2 lg:basis-1/6 p-2 text-8xl font-black text-white"
          @click.stop="handleCardClick(agent.uuid, agent.displayName)"
        >
          <div class="cursor-pointer">
            <h2
              class="text-8xl font-semibold transition-transform transform hover:translate-x-2"
            >
              {{ agent.displayName.toUpperCase() }}
            </h2>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
