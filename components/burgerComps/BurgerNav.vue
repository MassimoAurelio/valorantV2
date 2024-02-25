<script setup lang="ts">
import { headerNavStore } from "@/store/headerNav";

const headerStore = headerNavStore();
</script>

<template>
  <div
    class="flex flex-col items-start gap-1 text-white cursor-pointer relative z-50"
  >
    <div
      v-for="(item, index) in headerStore.gameItem"
      :key="item.name"
      class="p-4 w-full"
      @click="headerStore.toggleDropDown(index)"
    >
      <a>
        <div
          class="hover:bg-zinc-800 p-2 rounded-md flex flex-row justify-between items-center"
        >
          <p class="text-sm font-semibold" @click="headerStore.toggleDropDown">
            {{ item.name }}
          </p>
          <Icon
            name="gridicons:dropdown"
            size="20"
            v-if="headerStore.hasDropdownData(item.id)"
          />
        </div>

        <div v-if="headerStore.dropdownStates[index]">
          <ul class="relative">
            <li
              v-for="dropdownItem in headerStore.getDropdownData(item.id)"
              :key="dropdownItem.name"
              class="text-white p-1 hover:bg-zinc-700 rounded-md w-full"
            >
              {{ dropdownItem.name }}
            </li>
          </ul>
        </div>
      </a>
    </div>
  </div>
</template>
