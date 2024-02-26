<script setup lang="ts">
import { usePopupStore } from "@/store/popupStore";
const popupStore = usePopupStore();

useSeoMeta({
  title: "VALORANT: MAIN PAGE",
  ogTitle: "VALORANT: Main Page",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <section class="relative h-96">
    <div class="h-full w-full">
      <div class="absolute inset-0 overflow-hidden">
        <video
          preload="true"
          muted
          loop
          playsinline
          poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt463ab493c63a3968/65988e9b14672f52fd6fad1d/Website_Hero_Image_1730x720.jpg"
          data-testid="hero:video"
          class="absolute h-full w-full object-cover"
        >
          <source
            src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce292b05bc900c63/659c99223ea361883557812f/VALORANT_EP8124_001_R007_InGameHomepage_v01_For_Website_Mobile_v2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
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
          <PopupsHeaderPopup />
        </div>
      </div>
    </div>
  </section>
</template>
