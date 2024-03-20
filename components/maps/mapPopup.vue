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
  <div>
    <!-- Затемненный фон -->
    <div
      v-if="mapStore.showPopup"
      class="fixed inset-0 bg-black opacity-50 z-50"
    ></div>

    <!-- Компонент попапа -->
    <div
      v-if="mapStore.showPopup"
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 z-50"
    >
      <!-- Кнопка закрытия -->
      <button
        class="text-white absolute top-0 right-0 z-60"
        @click="mapStore.togglePopup()"
      >
        CLOSE
      </button>

      <!-- Содержимое попапа -->
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
  </div>
</template>
