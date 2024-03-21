<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMapStore } from "@/store/useMapsStore";

const mapStore = useMapStore();

const limitedMaps = computed(() => {
  return mapStore.maps.slice(0, 5);
});
</script>

<template>
  <section v-if="mapStore.showPopup">
    <Container  class="flex items-center justify-center h-full">
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
          <CarouselItem v-for="(map, index) in limitedMaps" :key="index">
            <div class="w-full h-[70vh] flex">
              <NuxtImg
                v-if="
                  map.stylizedBackgroundImage &&
                  map?.uuid === mapStore.selectedMap?.uuid
                "
                :src="map?.stylizedBackgroundImage"
                alt="Stylized Background Image"
              />
              <NuxtImg
                v-if="map?.splash && map.uuid === mapStore?.selectedMap?.uuid"
                :src="map?.splash"
                alt="Splash Image"
              />
              <NuxtImg
                v-if="
                  map?.premierBackgroundImage &&
                  map?.uuid === mapStore?.selectedMap?.uuid
                "
                :src="map?.premierBackgroundImage"
                alt="Premier Background Image"
              />
              <NuxtImg
                v-if="
                  map?.listViewIconTall &&
                  map?.uuid === mapStore?.selectedMap?.uuid
                "
                :src="map?.displayIcon"
                alt="List View Icon Tall"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    </Container>
  </section>
</template>
