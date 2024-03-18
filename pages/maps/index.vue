<script setup lang="ts">
import { useMapStore } from "@/store/useMapsStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const mapStore = useMapStore();

const showPopup = ref(false);

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};

const mapsReq = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/maps");
    const { data } = await response.json();
    mapStore.setMaps(data);
  } catch {}
};

mapsReq();
</script>

<template>
  <section class="relative">
    <h1 class="text-8xl text-white font-bold">MAPS</h1>
    <Carousel
      ref="carousel"
      orientation="horizontal"
      class="relative w-full max-w-xsw-full max-w-s mx-auto"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="-mt-1 h-[700px]">
        <CarouselItem
          v-for="map in mapStore.maps"
          :key="map.uuid"
          class="relative p-2"
        >
          <div class="w-1/2">
            <NuxtImg :src="map.splash" alt="map img" />
          </div>
          <div
            class="absolute right-0 bg-gray-700 max-w-72 rounded-lg p-3 text-white"
          >
            <p class="z-100">{{ map.displayName }}</p>
            <p>{{ map.narrativeDescription }}</p>
            <button class="p-2" @click="togglePopup()">
              <p>View gallery</p>
            </button>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <MapsMapPopup v-if="showPopup" />
  </section>
</template>
