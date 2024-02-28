<script setup lang="ts">
import { useAgentsStore } from "@/store/useAgents";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useScreenStore } from "@/store/resizeStore";

const agentsStore = useAgentsStore();
const resizeStore = useScreenStore();
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

const qwe = computed(() => {
  if (resizeStore.platform === "desctope") {
    return "relative flex flex-row items-center gap-96 justify-center";
  }
  if (resizeStore.platform === "tablet") {
    return "relative grid-cols-3";
  }
  if (resizeStore.platform === "mobile") {
    return "relative flex flex-col item-center";
  }
});

const img = computed(() => {
  if (resizeStore.platform === "desctope") {
    return "absolute flex justify-center items-center w-7/12";
  }
  if (resizeStore.platform === "tablet") {
    return "absolute right-0 w-7/12";
  }
  if (resizeStore.platform === "mobile") {
    return "";
  }
});

const carousel = computed(() => {
  if (resizeStore.platform === "desctope") {
    return "vertical";
  }
  if (resizeStore.platform === "tablet" || resizeStore.platform === "mobile") {
    return "horizontal";
  }
});

onMounted(() => {
  fetchDynamicsAgents(uuid);
});
</script>

<template>
  <section class="flex flex-row items-center justify-center relative py-3.5">
    <!-- <div class="absolute inset-0 overflow-hidden z-0 w-full h-full">
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
    </div> -->

    <div :class="qwe">
      <Carousel
        class="relative w-full max-w-sm"
        v-if="resizeStore.platform === 'mobile'"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class="w-full">
          <CarouselItem
            v-for="agent in agentsStore?.agents"
            :key="agent?.uuid"
            class="md:basis-1/3 lg:basis-1/3"
            @click.stop="handleCardClick(agent?.uuid, agent?.displayName)"
          >
            <div class="p-1">
              <div class="cursor-pointer">
                <h2
                  class="text-4xl text-white font-semibold transition-transform transform hover:translate-x-2"
                >
                  {{ agent?.displayName.toUpperCase() }}
                </h2>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel
        ref="carousel"
        orientation="vertical"
        v-if="
          resizeStore.platform === 'desctope' ||
          resizeStore.platform === 'tablet'
        "
        class="relative w-full max-w-xsw-full max-w-s mx-auto"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class="h-[700px]">
          <CarouselItem
            v-for="agent in agentsStore?.agents"
            :key="agent?.uuid"
            class="pl-0 md:basis-1/2 lg:basis-1/6 p-2 text-8xl font-black text-white w-96"
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
      <div :class="img">
        <img :src="agentsStore?.dynamicAgents?.fullPortrait" alt="img" />
      </div>

      <div class="flex flex-col items-start gap-5 w-4/5 text-white">
        <span>// ROLE</span>

        <div
          class="flex flex-row justify-center items-center gap-2"
          v-if="agentsStore.dynamicAgents.role"
        >
          <h1 class="font-black text-white text-5xl">
            {{ agentsStore.dynamicAgents.role.displayName.toUpperCase() }}
          </h1>
          <img :src="agentsStore.dynamicAgents.role.displayIcon" class="w-10" />
        </div>

        <span>// BIOGRAPHY</span>
        <div>{{ agentsStore?.dynamicAgents?.description }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
