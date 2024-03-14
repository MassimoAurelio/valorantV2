<script setup lang="ts">
import { socialsButtonsStore } from "@/store/authPageStore";
import AuthConstructor from "@/components/ui/authPopup/authFormConstructor.vue";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const buttonsStore = socialsButtonsStore();
</script>

<template>
  <div class="flex justify-end items-center min-h-screen">
    <AuthConstructor>
      <template #title>
        <div>Какой у вас адрес электронной почты?</div>
        <h2 class="text-zinc-500">Не волнуйтесь, мы никому не скажем.</h2>
      </template>

      <template #inputs>
        <UIInput placeholder="Email" />
      </template>

      <template #check-box>
        <div class="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label for="terms"
            >Да; Riot может использовать и передавать мой адрес электронной
            почты сторонним компаниям (например, Google, Twitch) для
            персонализации рекламы, а также отправлять мне информацию о новых
            релизах, обновлениях игр, событиях и других материалах, связанных с
            Riot.</Label
          >
        </div>
      </template>

      <template #socials-button>
        <p class="text-xs">ТАКЖЕ МОЖНО СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ С ПОМОЩЬЮ</p>
        <div class="flex justify-center item-center gap-3">
          <ul v-for="item in buttonsStore.item" :key="item.img">
            <li><Icon :name="item.img" size="25" /></li>
          </ul>
        </div>
      </template>

      <template #submit-btn>
        <button
          class="w-16 h-12 rounded-sm border border-slate-300 flex items-center justify-center"
        >
          <Icon name="mingcute:arrow-right-fill" size="20" />
        </button>
      </template>

      <template #restore-btn>
        <div class="flex justify-center items-center text-xs">
          <NuxtLink to="/signup">
            <span>
              <a href="">УЖЕ ЕСТЬ УЧЕТНАЯ ЗАПИСЬ?</a>
            </span>
          </NuxtLink>
        </div>
      </template>
    </AuthConstructor>
  </div>
</template>
