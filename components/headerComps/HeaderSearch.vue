<script setup lang="ts">
import { useSearchStore } from "@/store/headerSearch";
const headerStore = useSearchStore();

interface Props {
  condition?: "close" | "open" | "hidden";
}

const props = defineProps<Props>();
const slots = useSlots();

const { condition = "close" } = props;
</script>

<template>
  <div>
    <div
      v-if="condition !== 'hidden'"
      class="cursor-pointer bg-zinc-800 p-2 rounded-xl"
    >
      <slot name="prepend"></slot>
      <img
        src="/search.svg"
        v-if="headerStore.showSearch && condition !== 'open'"
        @click="headerStore.toggleSearch"
      />
      <div v-else class="relative">
        <input class="bg-zinc-800 border-hidden outline-none w-full" />
        <Icon
          class="absolute right-0 top-0"
          name="ic:sharp-close"
          size="25"
          @click="headerStore.toggleSearch"
        />
      </div>
    </div>
  </div>
</template>
