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
  useSeoMeta({ title: `VALORANT AGENT : ${displayName.toUpperCase()}` });
};

onMounted(() => {
  fetchDynamicsAgents(uuid);
});
</script>

<template>
  <section class="flex flex-row items-center justify-center relative">
    <div class="absolute inset-0 overflow-hidden z-0 w-full">
      <video
        preload="true"
        muted
        loop
        playsinline
        poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbded518020183769/5eb26f5389bac8148a8006cc/agent-background-generic.JPG"
      >
        <source
          src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29d7c4f6bc077e9e/5eb26f54402b8b4d13a56656/agent-background-generic.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <Carousel
      ref="carousel"
      orientation="vertical"
      class="relative w-full max-w-xsw-full max-w-s"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="-mt-1 h-[700px] z-10">
        <CarouselItem
          v-for="agent in agentsStore?.agents"
          :key="agent?.uuid"
          class="pl-0 md:basis-1/2 lg:basis-1/6 p-2 text-8xl font-black text-white"
          @click.stop="handleCardClick(agent?.uuid, agent?.displayName)"
        >
          <div class="cursor-pointer">
            <h2
              class="text-8xl font-semibold transition-transform transform hover:translate-x-2"
            >
              {{ agent?.displayName.toUpperCase() }}
            </h2>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <div class="flex justify-center items-center z-10">
      <img
        :src="agentsStore?.dynamicAgents?.fullPortrait"
        alt="img"
        class="mx-auto object-cover w-full h-full"
      />
    </div>
    <div
      class="flex flex-col items-start gap-5 w-1/2 ml-auto mt-0 text-white z-10"
    >
      <span>// ROLE</span>

      <div class="flex flex-row justify-center items-center gap-2">
        <h1 class="font-black text-white text-5xl">
          {{ agentsStore.dynamicAgents.role.displayName.toUpperCase() }}
        </h1>
        <img :src="agentsStore.dynamicAgents.role.displayIcon" class="w-10" />
      </div>

      <span>// BIOGRAPHY</span>
      <div>{{ agentsStore?.dynamicAgents?.description }}</div>
    </div>
  </section>
</template>
