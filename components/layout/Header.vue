<script setup lang="ts">
import { usePopupStore } from "@/store/popupStore";
import { useScreenStore } from "@/store/resizeStore";
import { useSearchStore } from "@/store/headerSearch";
import { useBurgerMenu } from "@/store/burgerNav";

const search = useSearchStore();
const popupStore = usePopupStore();
const screenStore = useScreenStore();
const burgerNav = useBurgerMenu();
const { platform } = storeToRefs(screenStore);
</script>

<template>
  <header class="w-full z-50">
    <div>
      <div class="bg-neutral-900 h-20 flex items-center px-8 relative w-full">
        <div>
          <NuxtLink to="/">
            <NuxtImg src="/logo.svg" width="100px" class="mx-auto" />
          </NuxtLink>
        </div>
        <HeaderCompsHeaderNav v-if="platform === 'desctope'" />
        <div class="absolute right-10 flex flex-row items-center gap-3">
          <HeaderCompsHeaderSearch
            v-if="platform === 'desctope'"
        
          />
          <div class="hover:bg-zinc-800 p-2 rounded-xl">
            <a variant="ghost"> <img src="/earth.svg" alt="img" /></a>
          </div>

          <div class="flex justify-center items-center">
            <UIButton
              size="sm"
              class="bg-red-500"
              @click="popupStore.togglePopup"
              v-if="platform === 'desctope'"
              >Play now</UIButton
            >
          </div>
          <PopupsHeaderPopup />
          <div>
            <UIButton
              @click="burgerNav.togglePopup"
              v-if="platform === 'tablet' || platform === 'mobile'"
            >
              <Icon name="iconamoon:menu-burger-horizontal-bold" size="25" />
            </UIButton>
          </div>
        </div>
      </div>
    </div>
  </header>
  <LayoutBurger />
</template>
