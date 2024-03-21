<script setup lang="ts">
import { useMapStore } from "@/store/useMapsStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { onMounted } from "vue";

const mapStore = useMapStore();

const mapsReq = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/maps");
    const { data } = await response.json();
    mapStore.setMaps(data);
    if (data.length > 0) {
      mapStore.setSelectedMap(data[0]);
    }
  } catch (error) {
    console.error("WARNING:", error);
  }
};

const handlePreviousClick = () => {
  const currentIndex = mapStore.maps.findIndex(
    (map) => map.uuid === mapStore.selectedMap.uuid
  );
  const previousIndex =
    (currentIndex - 1 + mapStore.maps.length) % mapStore.maps.length;
  mapStore.setSelectedMap(mapStore.maps[previousIndex]);
};

const handleNextClick = () => {
  const currentIndex = mapStore.maps.findIndex(
    (map) => map.uuid === mapStore.selectedMap.uuid
  );
  const nextIndex = (currentIndex + 1) % mapStore.maps.length;
  mapStore.setSelectedMap(mapStore.maps[nextIndex]);
};

onMounted(() => {
  mapsReq();
});
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
          v-for="map in mapStore?.maps"
          :key="map.uuid"
          class="relative p-2"
          @click="mapStore.setSelectedMap(map)"
        >
          <div class="p-1">
            <Card>
              <CardContent>
                <div class="w-full h-full">
                  <NuxtImg
                    :src="map.splash"
                    alt="map img"
                    class="object-cover w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious @click="handlePreviousClick" />
      <CarouselNext @click="handleNextClick" />
    </Carousel>

    <div
      class="absolute right-0 bg-gray-700 max-w-72 rounded-lg p-3 text-white"
    >
      <p class="z-100">{{ toRaw(mapStore.selectedMap)?.displayName }}</p>
      <p>{{ toRaw(mapStore.selectedMap)?.narrativeDescription }}</p>
      <button class="p-2" @click="mapStore.togglePopup()">
        <p>View gallery</p>
      </button>
    </div>
    <MapsMapPopup v-if="mapStore.showPopup" />
  </section>
</template>
