<script setup lang="ts">
interface Props {
  title?: "Войти" | "Какой у вас адрес электронной почты?";
}

const props = defineProps<Props>();

const slots = useSlots();
const { title = "Войти" } = props;
</script>

<template>
  <form
    class="min-w-96 max-w-96 min-h-auto max-h-auto flex items-center justify-center bg-white p-10"
  >
    <div class="flex flex-col gap-5 w-full">
      <div class="flex flex-col justify-center items-center">
        <slot name="title"></slot>
      </div>
      <div class="flex flex-col gap-3">
        <slot name="inputs"> </slot>
      </div>

      <div class="flex flex-col items-center justify-center gap-3">
        <slot name="socials-button"></slot>
      </div>

      <div class="flex text-xs gap-2">
        <slot name="check-box"></slot>
      </div>

      <div class="flex justify-center item-center">
        <slot name="submit-btn"></slot>
      </div>

      <div class="flex justify-center items-center">
        <slot name="restore-btn"> </slot>
      </div>
    </div>
  </form>
</template>
