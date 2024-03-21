<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMapStore } from "@/store/useMapsStore";

const mapStore = useMapStore();
</script>

<template>
  <section>
    <div
      v-if="mapStore.showPopup"
      class="fixed inset-0 bg-black opacity-50"
    ></div>
    <button
      class="fixed flex justify-center items-start text-white top-0 right-0 z-1"
      @click="mapStore.togglePopup()"
    >
      <NuxtImg src="/close.svg" class="w-10"></NuxtImg>
    </button>
    <div
      v-if="mapStore.showPopup"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4"
    >
      <Carousel class="w-full">
        <CarouselContent>
          <CarouselItem v-for="map in mapStore.maps" :key="map.uuid">
            <div class="w-full flex">
              <NuxtImg :src="map.splash" alt="map img" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </section>
</template>
