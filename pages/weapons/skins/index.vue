<script setup lang="ts">
import { useArsenalStore } from "@/store/useArsenalStore";

const arsenalStore = useArsenalStore();
const route = useRoute();

const skinsRequest = async () => {
  try {
    const request = await fetch("https://valorant-api.com/v1/weapons/skins");
    const { data } = await request.json();
    arsenalStore.setSkins(data);
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  skinsRequest();
});
</script>

<template>
  <div v-for="item in arsenalStore.skins" :key="item.uuid">
    {{ item.displayName }}
  </div>
</template>
