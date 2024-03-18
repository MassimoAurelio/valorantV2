<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMapStore } from "@/store/useMapsStore";

const mapStore = useMapStore();
</script>

<template>
  <Carousel
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <CarouselContent>
      <CarouselItem v-for="map in mapStore.maps" :key="map.uuid">
        <div class="w-1/2">
          <NuxtImg :src="map.splash" alt="map img" />
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</template>
