<script setup lang="ts">
import { useIsLoadingStore } from "@/store/loaderStore";
const loaderStore = useIsLoadingStore();
</script>

<template>
  <section class="min-h-screen bg-slate-900">
    <LayoutHeader />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <slot />
    </div>
    <LayoutFooter />
  </section>
</template>
