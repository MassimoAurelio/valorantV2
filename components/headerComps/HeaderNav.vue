<script setup lang="ts">
import { headerNavStore } from "@/store/headerNav";
const headerStore = headerNavStore();
</script>

<template>
  <div
    class="flex flex-row items-center gap-1 text-slate-300 cursor-pointer relative"
  >
    <div
      v-for="(items, index) in headerStore.gameItem"
      :key="items.name"
      @mouseenter="() => headerStore.toggleDropDown(index)"
      @mouseleave="() => headerStore.toggleDropDown(index)"
      class="p-4"
    >
      <a>
        <p>{{ items.name }}</p>
        <div
          class="bg-zinc-800 p-2 absolute rounded-lg"
          v-if="headerStore.dropdownStates[index]"
        >
          <ul v-for="item in headerStore.gameInfo" :key="item.name">
            <li class="text-slate-300 p-2">{{ item.name }}</li>
          </ul>
        </div>
      </a>
    </div>
  </div>
</template>
