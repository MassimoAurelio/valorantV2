<script setup lang="ts">
import { useDropDownMenu } from "@/store/dropDown";
import { useBurgerMenu } from "@/store/burgerNav";
import { usePopupStore } from "@/store/popupStore";
const burgerNav = useBurgerMenu();
const dropDownStore = useDropDownMenu();
const popupStore = usePopupStore();
</script>

<template>
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
      <HeaderCompsHeaderSearch />
      <BurgerCompsBurgerNav />
      <!-- <div
        class="cursor-pointer text-white"
        @click="dropDownStore.toggleDropDown"
      >
        SPIELINFO
      </div>
      <div class="flex flex-col text-white" v-if="dropDownStore.showDropDown">
        <a href="">first</a>
        <a href="">second</a>
      </div> -->
      <UIButton size="sm" class="bg-red-500" @click="popupStore.togglePopup"
        >Play now</UIButton
      >
    </div>
  </div>
</template>
