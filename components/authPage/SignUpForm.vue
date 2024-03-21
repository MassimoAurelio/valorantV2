<script setup lang="ts">
import { socialsButtonsStore } from "@/store/authPageStore";
import AuthConstructor from "@/components/ui/authPopup/authFormConstructor.vue";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const buttonsStore = socialsButtonsStore();
</script>

<template>
  <Container>
    <div class="flex justify-end items-center min-h-screen">
      <div class="absolute left-0 top-20">
        <NuxtLink to="/"> <NuxtImg src="/logo.svg" width="150px" /></NuxtLink>
      </div>
      <AuthConstructor>
        <template #title>
          <h1>Вход</h1>
        </template>
        <template #inputs>
          <UIInput placeholder="Email" />
          <UIInput placeholder="Password" />
        </template>

        <template #socials-button>
          <div class="flex justify-center item-center gap-3">
            <ul v-for="item in buttonsStore.item" :key="item.img">
              <li><Icon :name="item.img" size="25" /></li>
            </ul>
          </div>
        </template>

        <template #check-box>
          <Checkbox id="terms" />
          <Label for="terms"> Не выходить из учетной записи</Label>
        </template>

        <template #submit-btn>
          <button
            class="w-16 h-12 rounded-sm border border-slate-300 flex items-center justify-center"
          >
            <Icon name="mingcute:arrow-right-fill" size="20" />
          </button>
        </template>

        <template #restore-btn>
          <div class="flex flex-col justify-center items-center text-sm">
            <span>
              <a href="">НЕ МОЖЕТЕ ЗАЙТИ?</a>
            </span>

            <NuxtLink to="/autharization">
              <span>
                <a href="">СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</a>
              </span>
            </NuxtLink>
          </div>
        </template>
      </AuthConstructor>
    </div>
  </Container>
</template>
