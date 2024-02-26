<script setup lang="ts">
import { useAgentsStore } from "@/store/useAgents";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const agentsStore = useAgentsStore();
const route = useRoute();
const router = useRouter();
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

const handleCardClick = (uuid: number, displayName: string) => {
  router.push(`/agents/${uuid}`);
  useSeoMeta({ title: `VALORANT AGENT : ${displayName}` });
};

onMounted(() => {
  fetchDynamicsAgents(uuid);
});
</script>

<template>
  <section class="flex flex-row items-center justify-center">
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
              {{ agent.displayName }}
            </h2>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <div class="flex justify-center items-center">
      <img
        :src="agentsStore.dynamicAgents.fullPortrait"
        alt="img"
        class="mx-auto object-cover w-full h-full"
      />
    </div>
    <div class="flex flex-col items-start gap-5 w-1/2 ml-auto mt-0">
      <h1>{{ agentsStore.dynamicAgents.displayName }}</h1>
      <span>// BIOGRAPHY</span>
      <div>{{ agentsStore.dynamicAgents.description }}</div>
    </div>
  </section>
</template>
