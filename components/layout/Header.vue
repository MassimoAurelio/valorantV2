<script setup lang="ts">
import { usePopupStore } from "@/store/popupStore";

const popupStore = usePopupStore();
</script>

<template>
  <header class="w-full">
    <div>
      <div class="bg-neutral-900 h-20 flex items-center px-8 relative w-full">
        <div>
          <NuxtLink to="/">
            <NuxtImg src="/logo.svg" width="100px" class="mx-auto" />
          </NuxtLink>
        </div>
        <HeaderCompsHeaderNav />
        <div class="absolute right-10 flex flex-row items-center gap-3">
          <HeaderCompsHeaderSearch />
          <div class="hover:bg-zinc-800 p-2 rounded-xl">
            <a variant="ghost"> <img src="/earth.svg" alt="img" /></a>
          </div>

          <div class="flex justify-center items-center h-screen">
            <UIButton
              size="sm"
              class="bg-red-500"
              @click="popupStore.togglePopup"
              >Play now</UIButton
            >
          </div>
          <PopupsHeaderPopup />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
