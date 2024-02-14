<script setup lang="ts">
import { headerNavStore } from "@/store/headerNav";
import { dropdownClass } from "@/hooks/redLineClass";
const headerStore = headerNavStore();
const redLineClass = dropdownClass;
</script>

<template>
  <div
    class="flex flex-row items-center gap-1 text-slate-300 cursor-pointer relative"
  >
    <div
      v-for="(item, index) in headerStore.gameItem"
      :key="item.name"
      class="p-4"
    >
      <a
        @mouseenter="() => headerStore.toggleDropDown(index)"
        @mouseleave="() => headerStore.toggleDropDown(index)"
      >
        <div class="hover:bg-zinc-800 p-2 rounded-xl">
          <p>{{ item.name }}</p>
        </div>

        <div
          class="bg-zinc-800 p-2 absolute rounded-lg mt-3"
          v-if="
            headerStore.dropdownStates[index] &&
            headerStore.hasDropdownData(item.id)
          "
        >
          <ul class="relative">
            <div :class="redLineClass(index)"></div>
            <li
              v-for="dropdownItem in headerStore.getDropdownData(item.id)"
              :key="dropdownItem.name"
              class="text-slate-300 p-2"
            >
              {{ dropdownItem.name }}
            </li>
          </ul>
        </div>
      </a>
    </div>
  </div>
</template>
