<script setup lang="ts">
import { useMapStore } from "@/store/useMapsStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const mapStore = useMapStore();

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
  <section>
    <Carousel
      ref="carousel"
      orientation="horizontal"
      class="relative w-full max-w-xsw-full max-w-s mx-auto"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="h-[700px]">
        <CarouselItem
          v-for="map in mapStore.maps"
          :key="map.uuid"
          class="pl-0 md:basis-1/2 lg:basis-1/1 p-2 text-8xl font-black text-white w-96"
        >
          <div class="cursor-pointer">
            <h2
              class="text-8xl font-semibold transition-transform transform hover:translate-x-2"
            >
              {{ map?.displayName.toUpperCase() }}
            </h2>
          </div>
          <img :src="map.listViewIcon" alt="" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </section>
</template>
