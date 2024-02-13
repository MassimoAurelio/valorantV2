<script setup lang="ts">
import { useSearchStore } from "@/store/headerStore";
const headerStore = useSearchStore();
</script>

<template>
  <div class="cursor-pointer bg-zinc-800 p-2 rounded-xl">
    <img
      src="/search.svg"
      v-if="headerStore.showSearch"
      @click="headerStore.toggleSearch"
    />
    <div v-else class="relative">
      <input class="bg-zinc-800 border-hidden outline-none" />
      <Icon
        class="absolute right-2 top-0"
        name="ic:sharp-close"
        size="25"
        @click="headerStore.toggleSearch"
      />
    </div>
  </div>
</template>
