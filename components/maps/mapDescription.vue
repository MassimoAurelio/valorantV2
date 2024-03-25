<script setup lang="ts">
import { useMapStore } from "@/store/useMapsStore";

const mapStore = useMapStore();
</script>

<template>
  <Container class="flex items-start justify-end">
    <div class="bg-gray-700 max-w-72 rounded-lg p-3 text-white">
      <p class="z-100">{{ toRaw(mapStore.selectedMap)?.displayName }}</p>
      <p>{{ toRaw(mapStore.selectedMap)?.narrativeDescription }}</p>
      <button class="p-2">
        <p>View gallery</p>
      </button>
    </div>
  </Container>
</template>
