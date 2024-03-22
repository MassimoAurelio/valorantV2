<script setup lang="ts">
import { usePopupStore } from "@/store/popupStore";
import HeaderPopup from "~/components/header/HeaderPopup.vue";
const popupStore = usePopupStore();

useSeoMeta({
  title: "VALORANT: MAIN PAGE",
  ogTitle: "VALORANT: Main Page",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});
</script>

<template>
  <section class="relative h-[92vh]">
    <div
      :style="{
        backgroundImage: `url('/VALORANT_Logo_V.jpg')`,
        backgroundSize: 'cover',
      }"
    >
      <Container class="flex items-center justify-center h-full">
        <div class="h-[92vh] w-full">
          <div class="relative z-2">
            <div class="flex flex-col justify-center items-center gap-1 h-96">
              <p class="text-white">A 5v5 character-based tactical shooter</p>
              <div class="w-80 h-20 flex items-center justify-center">
                <NuxtImg src="/valorant.svg" alt="img" />
              </div>
              <button
                class="p-1 border border-white"
                @click="popupStore.togglePopup"
              >
                <div
                  class="flex flex-row justify-center items-center w-48 h-12 bg-red-500 hover:bg-slate-900 border border-red-400"
                >
                  <span></span><span class="text-white">SIGN IN</span>
                </div>
              </button>
              <HeaderPopup />
            </div>
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>
