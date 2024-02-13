<script setup lang="ts"></script>

<template>
  <header>
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
          <div>
            <UIButton size="sm" class="bg-red-500">Play now</UIButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
