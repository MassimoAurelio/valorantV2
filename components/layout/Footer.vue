<script setup lang="ts">
import {
  useFooterSocialsStore,
  useFooterInfoButtonsStore,
  useFooterImgStore,
} from "@/store/useFooter";

const footerImgStore = useFooterSocialsStore();
const footerInfoButton = useFooterInfoButtonsStore();
const footerImg = useFooterImgStore();
</script>

<template>
  <footer class="bg-zinc-950 flex flex-col justify-center items-center gap-5">
    <div class="bg-zinc-700 h-24 flex justify-center items-center w-full">
      <div>
        <ul class="flex flex-row justify-center items-center gap-5 text-white">
          <li class="p-2 hover:bg-zinc-500 rounded-sm">
            <a href="https://playvalorant.com/en-gb/download/" target="_blank"
              >Download Game Client</a
            >
          </li>
          <li class="p-2 hover:bg-zinc-500 rounded-sm">
            <a
              href="https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&referrer=singular_click_id%3D55d6b54f-0d76-429f-84fa-2a65ff040153"
              target="_blank"
              >Download Riot Mobile Companion App</a
            >
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
