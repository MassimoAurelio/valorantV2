<script setup lang="ts">
import { headerNavStore } from "@/store/headerNav";
import { dropdownClass } from "@/hooks/redLineClass";
const headerStore = headerNavStore();
const redLineClass = dropdownClass;
</script>

<template>
  <div
    class="flex flex-row items-center gap-1 text-white cursor-pointer relative z-50"
  >
    <div
      v-for="(item, index) in headerStore.gameItem"
      :key="item.name"
      class="p-4"
      @mouseenter="() => headerStore.toggleDropDown(index)"
      @mouseleave="() => headerStore.toggleDropDown(index)"
    >
      <a>
        <div
          class="hover:bg-zinc-800 p-2 rounded-md flex flex-row items-center justify-center"
        >
          <p class="text-sm font-semibold">{{ item.name }}</p>
          <Icon
            name="gridicons:dropdown"
            size="20"
            v-if="headerStore.hasDropdownData(item.id)"
          />
        </div>

        <div
          class="bg-zinc-800 p-4 absolute rounded-md mt-3"
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
              class="text-white p-1 hover:bg-zinc-700 rounded-md min-w-44"
            >
              {{ dropdownItem.name }}
            </li>
          </ul>
        </div>
      </a>
    </div>
  </div>
</template>
