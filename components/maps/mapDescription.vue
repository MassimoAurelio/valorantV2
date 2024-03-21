<script setup lang="ts">
import { useMapStore } from "@/store/useMapsStore";

const mapStore = useMapStore();
</script>

<template>
  <!-- <div class="absolute right-0 bg-gray-700 max-w-72 rounded-lg p-3 text-white">
    <p class="z-100">{{ mapStore.dinamicMap.displayName }}</p>
    <p>{{ mapStore.dinamicMap.narrativeDescription }}</p>
    <button class="p-2" @click="mapStore.togglePopup()">
      <p>View gallery</p>
    </button>
  </div> -->
</template>
