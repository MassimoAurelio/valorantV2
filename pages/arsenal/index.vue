<script setup lang="ts">
import { useArsenalStore } from "@/store/useArsenalStore";

const arsenalStore = useArsenalStore();

const arsenalRequest = async () => {
  try {
    const request = await fetch("https://valorant-api.com/v1/weapons");
    const { data } = await request.json();
    arsenalStore.setCategory(data);
  } catch (e) {
    console.error(e);
  }
};

onMounted(arsenalRequest);
</script>

<template>
  <section class="flex flex-wrap">
    <div v-for="gun in arsenalStore.category" :key="gun.uuid" class="w-1/2">
      <div class="text-white p-5">
        <span class="p-2"> {{ gun.displayName }} </span>
        <img :src="gun.displayIcon" alt="" />
      </div>
    </div>
  </section>
</template>
