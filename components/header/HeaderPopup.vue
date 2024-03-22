<script setup lang="ts">
import { usePopupStore } from "@/store/popupStore";
import { useScreenStore } from "@/store/resizeStore";
const popupStore = usePopupStore();
const resizeStore = useScreenStore();

const qwe = computed(() => {
  if (resizeStore.platform === "desctope") {
    return "mx-8";
  }
  if (resizeStore.platform === "tablet") {
    return "mx-8";
  }
  if (resizeStore.platform === "mobile") {
    return "";
  }
});

const colButton = computed(() => {
  if (resizeStore.platform === "desctope") {
    return "flex flex-row justify-center items-center gap-6";
  }
  if (resizeStore.platform === "tablet") {
    return "flex flex-row justify-center items-center gap-6";
  }
  if (resizeStore.platform === "mobile") {
    return "flex flex-col justify-center items-center gap-6";
  }
});
</script>

<template>
  <div
    v-if="popupStore.showPopup"
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
  >
    <div
      class="flex flex-col gap-10 w-[100vh] h-auto bg-slate-900 p-5 border-t border-white"
    >
      <div class="flex justify-end items-start">
        <UIButton @click="popupStore.showPopup = false">Close</UIButton>
      </div>
      <div
        class="flex flex-row items-center justify-center text-2xl text-white font-semibold"
      >
        <span :class="qwe"> \ </span>
        <div class="w-auto">GET SET UP TO PLAY</div>
        <span :class="qwe"> \ </span>
      </div>
      <div :class="colButton">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-white text-xs font-thin">
            I don’t have a Riot account yet
          </p>
          <NuxtLink to="/autharization" @click="popupStore.showPopup = false">
            <button class="p-1 border border-white">
              <div
                class="flex flex-row justify-center items-center w-48 h-12 bg-white hover:bg-slate-900 hover:text-white border border-slate-600"
              >
                <span></span><span> MAKE ONE </span>
              </div>
            </button>
          </NuxtLink>
        </div>

        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-white text-xs font-thin">I have a Riot account</p>
          <NuxtLink to="/signup" @click="popupStore.showPopup = false">
            <button class="p-1 border border-white">
              <div
                class="flex flex-row justify-center items-center w-48 h-12 bg-red-500 hover:bg-slate-900 border border-red-400"
              >
                <span></span><span class="text-white">SIGN IN</span>
              </div>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
