<script setup lang="ts"></script>

<template>
  <LayoutHeader />
  <section style="min-height: 100vh">
    <div class="main-container">
      <slot />
    </div>
  </section>
  <LayoutFooter />
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
}
.main-container {
  padding-left: 5vw;
  padding-right: 5vw;
  max-width: 1600px;
  min-height: 1000px;
  margin: 0 auto;
  background-color: #fecdd3;
}
</style>
