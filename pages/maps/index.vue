<script setup lang="ts">
import { useMapStore } from "@/store/useMapsStore";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { onMounted } from "vue";

useSeoMeta({
  title: "VALORANT Maps: Explore Icebox, Bind, Haven, Split and Ascent",
});

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

onMounted(() => {
  mapsReq();
});
</script>

<template>
  <section class="relative">
    <Container>
      <h1 class="text-8xl text-white font-bold">MAPS</h1>
      <div class="flex flex-col">
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
            >
              <div class="p-1">
                <div class="w-full h-full rounded-lg">
                  <NuxtImg
                    :src="map.splash"
                    alt="map img"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious @click="mapStore.handlePreviousClick" />
          <CarouselNext @click="mapStore.handleNextClick" />
        </Carousel>
        <MapsMapDescription />
      </div>
    </Container>
  </section>
</template>
