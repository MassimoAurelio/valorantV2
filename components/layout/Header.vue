<script setup lang="ts">
import {
  GAMA_INFO_DATA,
  GAME_ITEM_DATA,
} from "@/components/data/header/game.info.data";

const gameInfo = GAMA_INFO_DATA;
const gameItem = GAME_ITEM_DATA;

const dropdownStates = ref(new Array(gameItem.length).fill(false));

const showSearch = ref(true);
const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};

const toggleDropDown = (index: number) => {
  dropdownStates.value[index] = !dropdownStates.value[index];
};
</script>

<template>
  <header>
    <div>
      <div class="bg-neutral-900 h-20 flex items-center px-8 relative">
        <div>
          <NuxtLink to="/">
            <NuxtImg src="/logo.svg" width="100px" class="mx-auto" />
          </NuxtLink>
        </div>
        <div
          class="flex flex-row items-center gap-1 text-slate-300 cursor-pointer relative"
        >
          <div
            v-for="(items, index) in gameItem"
            :key="items.name"
            @mouseenter="() => toggleDropDown(index)"
            @mouseleave="() => toggleDropDown(index)"
            class="p-4"
          >
            <a>
              <p>{{ items.name }}</p>
              <div
                class="bg-slate-800 p-2 absolute rounded-lg"
                v-if="dropdownStates[index]"
              >
                <ul v-for="item in gameInfo" :key="item.name">
                  <li class="text-slate-300 p-2">{{ item.name }}</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
        <div class="absolute right-10 flex flex-row items-center gap-3">
          <div class="cursor-pointer">
            <img
              src="/public/search.svg"
              v-if="showSearch"
              @click="toggleSearch"
            />
            <div v-else class="bg-zinc-800 p-1 rounded-xl relative">
              <UIInput />
              <Icon
                class="absolute right-3 top-3"
                name="ic:sharp-close"
                size="25"
                @click="toggleSearch"
              />
            </div>
          </div>
          <div>
            <UIButton variant="ghost">
              <img src="/public/earth.svg" alt="img"
            /></UIButton>
          </div>
          <div>
            <UIButton size="sm" class="bg-red-500">Play now</UIButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
