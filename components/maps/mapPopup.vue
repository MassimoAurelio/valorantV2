<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMapStore } from "@/store/useMapsStore";

const mapStore = useMapStore();

const limitedMaps = computed(() => {
  return mapStore.maps.slice(0, 4).map((map) => ({
    ...map,
    images: {
      stylizedBackgroundImage: map.stylizedBackgroundImage,
      splash: map.splash,
      premierBackgroundImage: map.premierBackgroundImage,
      listViewIconTall: map.listViewIconTall,
    },
  }));
});
</script>

<template>
  <section v-if="mapStore.showPopup">
    <Container class="flex items-center justify-center h-full">
      <div
        v-if="mapStore.showPopup"
        class="fixed inset-0 bg-black opacity-50"
      ></div>
      <button
        class="fixed flex justify-center items-start text-white top-10 right-44 z-1"
        @click="mapStore.togglePopup()"
      >
        <NuxtImg src="/close.svg" class="w-10"></NuxtImg>
      </button>
      <div
        v-if="mapStore.showPopup"
        class="flex fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4"
      >
        <Carousel class="w-full">
          <CarouselContent>
            <CarouselItem v-for="(map, index) in limitedMaps" :key="index">
              <div class="flex">
                <div class="text-white w-1/2">
                  <h1>{{ map.displayName }}</h1>
                  <p>{{ map.narrativeDescription }}</p>
                </div>
                <div class="w-full h-[70vh] flex">
                  <template
                    v-for="(image, key) in map.images"
                    v-if="map.uuid === mapStore.selectedMap?.uuid"
                  >
                    <NuxtImg
                      :key="key"
                      v-if="image"
                      :src="image"
                      class="w-full h-full object-cover"
                      :alt="key"
                    />
                  </template>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </Container>
  </section>
</template>
