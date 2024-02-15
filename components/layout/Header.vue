<script setup lang="ts">
const showPopup = ref(false);

const togglePopup = () => {
  showPopup.value = !showPopup.value;
};
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
            <UIButton size="sm" class="bg-red-500" @click="togglePopup"
              >Play now</UIButton
            >
          </div>
          <div
            v-if="showPopup"
            class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          >
            <div class="w-9/12 h-80 bg-slate-900 p-5">
              <div class="flex justify-end items-start">
                <UIButton @click="togglePopup">Cancel</UIButton>
              </div>
              <div class="flex flex-row items-center justify-center text-2xl text-white font-semibold">
                <div> \ </div>
                <div class="">GET SET UP TO PLAY</div>
                <div> \ </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
