<script setup lang="ts">
import { useAbilitiesStore } from "@/store/useAbilitiesStore";
const abilitiesStore = useAbilitiesStore();
</script>

<template>
  <section>
    <Container>
      <div class="flex flex-col gap-5 py-20">
        <h1 class="text-white text-5xl font-bold">SPECIAL ABILITIES</h1>
        <div class="flex gap-5 items-center text-white">
          <ul
            class="border border-bg-zinc-900 cursor-pointer p-3 max-w-32"
            v-for="(item, index) in abilitiesStore.abilities"
            :key="index"
            @click="abilitiesStore.openAbilities(index)"
          >
            <li>
              <NuxtImg :src="item.displayIcon" sizes="20"></NuxtImg>
            </li>
          </ul>
        </div>
        <template v-for="(item, index) in abilitiesStore.abilities">
          <div v-if="abilitiesStore.showAbilities[index]">
            <div class="text-slate-400">
              {{ item.displayName.toUpperCase() }}
            </div>
            <div class="w-72 text-white">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </template>
      </div>
    </Container>
  </section>
</template>
