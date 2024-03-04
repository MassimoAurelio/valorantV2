<script setup lang="ts">
import { useArsenalStore } from "@/store/useArsenalStore";

const arsenalStore = useArsenalStore();
const route = useRoute();
const uuid = route.params.id;

const gunsRequest = async (uuid: any) => {
  try {
    const request = await fetch(`https://valorant-api.com/v1/weapons/${uuid}`);
    const { data } = await request.json();
    arsenalStore.setDynamic(data);
  } catch (e) {
    console.error(e);
  }
};

onMounted(() => {
  gunsRequest(uuid);
});
</script>

<template>
  <div>
    {{ arsenalStore.dynamicGuns.displayName }}
  </div>
  <div>
    <NuxtImg
      :src="arsenalStore.dynamicGuns.displayIcon"
      alt="Gun Image"
      class="object-contain h-40 w-full"
    />
  </div>
</template>
