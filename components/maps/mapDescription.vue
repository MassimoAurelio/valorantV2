<script setup lang="ts">
import { useMapStore } from "@/store/useMapsStore";

const mapStore = useMapStore();
</script>

<template>
  <Container class="flex items-center justify-center h-full">
    <div class="bg-gray-700 max-w-72 rounded-lg p-3 text-white">
      <p class="z-100">{{ toRaw(mapStore.selectedMap)?.displayName }}</p>
      <p>{{ toRaw(mapStore.selectedMap)?.narrativeDescription }}</p>
      <button class="p-2" @click="mapStore.togglePopup()">
        <p>View gallery</p>
      </button>
    </div>
  </Container>
</template>
