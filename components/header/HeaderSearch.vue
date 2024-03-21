<script setup lang="ts">
import { useSearchStore } from "@/store/headerSearch";
const headerStore = useSearchStore();

interface Props {
  condition?: "close" | "open" | "hidden";
}

const props = defineProps<Props>();

const { condition = "close" } = props;
</script>

<template>
  <div>
    <div
      v-if="condition !== 'hidden'"
      class="cursor-pointer bg-zinc-800 p-2 rounded-xl"
    >
      <slot name="prepend"></slot>
      <NuxtImg
        src="/search.svg"
        v-if="headerStore.showSearch && condition !== 'open'"
        @click="headerStore.toggleSearch"
        sizes="40"
      />
      <div v-else class="relative">
        <input
          class="bg-zinc-800 border-hidden outline-none w-full text-white"
          v-model="headerStore.searchQuery"
        />
        <Icon
          v-if="condition === 'close'"
          class="absolute right-0 top-0"
          name="mdi:close"
          size="25"
          @click="headerStore.toggleSearch"
        />
        <Icon
          v-if="condition === 'open'"
          class="absolute right-0 top-0"
          name="ic:sharp-close"
          size="25"
          @click="headerStore.clearSearch"
        />
      </div>
    </div>
  </div>
</template>
