<script setup lang="ts">
import {
  useFooterSocialsStore,
  useFooterInfoButtonsStore,
  useFooterButtonStore,
} from "@/store/useFooter";

const footerImgStore = useFooterSocialsStore();
const footerInfoButton = useFooterInfoButtonsStore();
const footerButtons = useFooterButtonStore();
</script>

<template>
  <footer class="bg-zinc-950 flex flex-col justify-center items-center gap-5">
    <div class="bg-zinc-700 h-24 flex justify-center items-center w-full">
      <div class="flex">
        <ul
          class="flex flex-row justify-center items-center gap-5 text-white"
          v-for="item in footerButtons.item"
          :key="item.href"
        >
          <li class="p-2 hover:bg-zinc-500 rounded-sm">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="h-24 flex items-center justify-center gap-3 cursor-pointer w-full"
    >
      <ul v-for="item in footerImgStore.items" :key="item.img">
        <li class="p-2 rounded-2xl bg-zinc-700">
          <Icon :name="item.img" size="30" class="text-white" />
        </li>
      </ul>
    </div>
    <div
      class="bg-zinc-950 text-zinc-500 text-sm flex justify-center items-center w-full"
    >
      <p>
        © 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT and any associated
        logos are trademarks,<br />
        service marks, and/or registered trademarks of Riot Games, Inc.
      </p>
    </div>
    <div
      class="flex justify-center items-center gap-3 text-white w-full min-h-20"
    >
      <ul
        class="hover:bg-zinc-700 rounded-md"
        v-for="item in footerInfoButton.items"
        :key="item.name"
      >
        <li class="p-1">
          <a :href="item.href">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-row item-center">
      <div class="p-2 bg-zinc-700 rounded-sm">
        <img src="/public/16eu.jpg" alt="img" />
      </div>
      <div class="p-2 bg-zinc-700 rounded-sm">
        <img src="/public/in-game.png" alt="img" />
      </div>
      <div class="p-2 bg-zinc-700 rounded-sm">
        <img src="/public/violence.png" alt="img" />
      </div>
    </div>
  </footer>
</template>
