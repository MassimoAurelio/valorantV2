<script setup lang="ts">
import { usePopupStore } from "@/store/popupStore";

const popupStore = usePopupStore();
</script>

<template>
  <div
    v-if="popupStore.showPopup"
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <div
      class="flex flex-col gap-10 w-8/12 h-80 bg-slate-900 p-5 border-t border-white"
    >
      <div class="flex justify-end items-start">
        <UIButton @click="popupStore.togglePopup">Cancel</UIButton>
      </div>
      <div
        class="flex flex-row items-center justify-center text-2xl text-white font-semibold"
      >
        <span class="mx-8">\</span>
        <div class="">GET SET UP TO PLAY</div>
        <span class="mx-8">\</span>
      </div>
      <div class="flex flex-row justify-center items-center gap-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-white text-xs font-thin">
            I don’t have a Riot account yet
          </p>
          <button class="p-1 border border-white">
            <div
              class="flex flex-row justify-center items-center w-48 h-12 bg-white hover:bg-slate-900 hover:text-white border border-slate-800"
            >
              <span></span><span> MAKE ONE </span>
            </div>
          </button>
        </div>
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-white text-xs font-thin">I have a Riot account</p>
          <button class="p-1 border border-white">
            <div
              class="flex flex-row justify-center items-center w-48 h-12 bg-red-500 hover:bg-slate-900 border border-red-400"
            >
              <span></span><span class="text-white">SIGN IN</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
