<script setup lang="ts">
import { useFooterAuthLayout } from "@/store/useFooter";

const footer = useFooterAuthLayout();
</script>

<template>
  <footer>
    <div class="flex items-center flex-wrap text-xs gap-2 h-14 text-white">
      <ul v-for="item in footer.items" :key="item.name">
        <li class="cursor-pointer hover:text-zinc-500">{{ item.name }}</li>
      </ul>
      <div class="flex gap-3">
        <p>ЭТОТ САЙТ ЗАЩИЩЕН ПРИ ПОМОЩИ HCAPTCHA, И К НЕМУ ПРИМЕНЯЮТСЯ</p>
        <a
          class="underline"
          href="https://www.hcaptcha.com/privacy"
          target="_blank"
        >
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </a>

        <p>И</p>
        <a
          class="underline"
          href="https://www.hcaptcha.com/terms"
          target="_blank"
        >
          УСЛОВИЯ ОКАЗАНИЯ УСЛУГ.
        </a>
      </div>
    </div>
  </footer>
</template>
