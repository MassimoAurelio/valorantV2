<script>
import { useBurgerMenu } from "@/store/burgerNav";

const dropDownStore = useBurgerMenu();
</script>

<template>
  <div>
    <a href=""><slot></slot></a>
  </div>
  <div class="">
    <div class="dropdown-menu">
      <slot name="menu"></slot>
    </div>
  </div>
</template>
