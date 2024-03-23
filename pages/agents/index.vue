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

onMounted(() => {
  fetchAgents();
});

const handleCardClick = (uuid: string, displayName: string) => {
  router.push(`/agents/${uuid}`);
  useSeoMeta({ title: `VALORANT AGENT : ${displayName.toUpperCase()}` });
};
</script>

<template>
  <div
    :style="{
      backgroundImage: `url('/MAIN_VALORANT.jpg')`,
      backgroundSize: 'cover',
    }"
  >
    <Container class="flex items-center justify-between h-full">
      <Carousel
        ref="carousel"
        orientation="vertical"
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
      <div class="text-white flex flex-col gap-5 w-80">
        <p>// CHECK THE HEADCOUNT</p>
        <p>
          Find more ways to plant the Spike and style on your enemies with
          scrappers, strategists, and hunters of every description
        </p>
      </div>
    </Container>
  </div>
</template>
