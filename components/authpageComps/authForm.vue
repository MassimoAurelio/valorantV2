<script setup lang="ts">
import { socialsButtonsStore } from "@/store/authPageStore";

const buttonsStore = socialsButtonsStore();
</script>

<template>
  <form class="max-w-96 w-auto h-5/6 flex items-center bg-white p-10">
    <div class="flex flex-col gap-5">
      <div class="flex flex-col justify-center items-center">
        <h1>Какой у вас адрес электронной почты?</h1>
        <h2>Не волнуйтесь, мы никому не скажем.</h2>
      </div>
      <div>
        <UIInput placeholder="Email" />
      </div>

      <div class="flex text-xs gap-2">
        <input type="checkbox" />
        <p>
          Да; Riot может использовать и передавать мой адрес электронной почты
          сторонним компаниям (например, Google, Twitch) для персонализации
          рекламы, а также отправлять мне информацию о новых релизах,
          обновлениях игр, событиях и других материалах, связанных с Riot.
        </p>
      </div>

      <div class="flex flex-col items-center justify-center gap-3 flex text-xs">
        <p>ТАКЖЕ МОЖНО СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ С ПОМОЩЬЮ</p>
        <div class="flex items-center justify-center gap-3">
          <ul v-for="item in buttonsStore.item" :key="item.img">
            <li><Icon :name="item.img" size="25" /></li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center item-center">
        <button
          class="w-16 h-12 rounded-sm border border-sky-500 flex items-center justify-center"
        >
          <Icon name="mingcute:arrow-right-fill" size="20" />
        </button>
      </div>
      <div class="flex justify-center items-center">
        <span>
          <a href="">УЖЕ ЕСТЬ УЧЕТНАЯ ЗАПИСЬ?</a>
        </span>
      </div>
    </div>
  </form>
</template>
