<script setup lang="ts">
import { useBurgerMenu } from "@/store/burgerNav";
import { usePopupStore } from "@/store/popupStore";
const burgerNav = useBurgerMenu();
const popupStore = usePopupStore();
</script>

<template>
  <div
    v-if="burgerNav.showBurger"
    class="fixed inset-0 bg-black bg-opacity-70 z-40"
  ></div>
  <div
    v-if="burgerNav.showBurger"
    class="w-80 h-full absolute right-0 top-0 flex flex-col justify-center z-50 bg-zinc-900 p-4"
  >
    <div class="flex flex-col gap-3 h-full">
      <div class="flex flex-row relative justify-between">
        <NuxtImg src="/logo.svg" width="50px" />
        <UIButton @click="burgerNav.togglePopup" class="flex items-end">
          <Icon name="mingcute:close-line" size="25" />
        </UIButton>
      </div>
      <HeaderSearch :condition="'open'" />
      <BurgerNav />
      <UIButton size="sm" class="bg-red-500" @click="popupStore.togglePopup"
        >Play now</UIButton
      >
    </div>
  </div>
</template>
