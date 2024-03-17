<script setup lang="ts">
import { useArsenalStore } from "@/store/useArsenalStore";
import { useBurgerMenu } from "@/store/burgerNav";
import { WEAPON_CATEGORY } from "@/types";

const arsenalStore = useArsenalStore();
const dropDownStore = useBurgerMenu();
const selectedCategory = ref("");

const arsenalRequest = async () => {
  try {
    const request = await fetch("https://valorant-api.com/v1/weapons");
    const { data } = await request.json();
    if (selectedCategory.value) {
      const filterCategory = data.filter(function (item: any) {
        return (
          item.category === `EEquippableCategory::${selectedCategory.value}`
        );
      });
      arsenalStore.setArsenal(filterCategory);
    } else {
      arsenalStore.setArsenal(data);
    }
  } catch (e) {
    console.error(e);
  }
};

const handleCategoryClick = (category: string) => {
  selectedCategory.value = category === "ALL WEAPON" ? "" : category;
  arsenalRequest();
  dropDownStore.toggleDropDown();
};

onMounted(() => {
  arsenalRequest();
});

onUnmounted(() => {
  dropDownStore.showDropDown = false;
  selectedCategory.value = "";
});
</script>

<template>
  <section class="p-10">
    <div class="flex flex-row justify-between items-center w-full">
      <h1 class="text-white text-8xl font-extrabold">
        CHOOSE YOUR <br />
        WEAPON
      </h1>
      <div class="flex flex-col relative">
        <div
          class="flex flex-row justify-between h-14 w-64 items-center bg-white p-5 cursor-pointer border border-black"
          @click="dropDownStore.toggleDropDown"
        >
          <span class="font-medium">{{
            selectedCategory ? selectedCategory.toUpperCase() : "ALL WEAPON"
          }}</span>
          <div>
            <Icon name="gridicons:dropdown" size="30" />
          </div>
        </div>
        <div
          class="text-black absolute top-full left-0 bg-white w-full border border-black"
          v-if="dropDownStore.showDropDown"
        >
          <div
            v-for="item in WEAPON_CATEGORY"
            class="p-3 cursor-pointer font-medium text-black"
            @click="handleCategoryClick(item.categoryName)"
          >
            {{ item.categoryName.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap py-7">
      <div
        v-for="(gun, index) in arsenalStore.arsenal"
        :key="gun.uuid"
        class="w-1/2 cursor-pointer"
      >
        <div
          class="text-white p-5 hover:bg-red-500 transition ease-in-out delay-100 flex flex-col justify-between min-h-72 max-h-72"
          @mouseover="arsenalStore.toggleCardItem(true, index)"
          @mouseleave="arsenalStore.toggleCardItem(false, index)"
        >
          <span class="p-2 text-5xl font-bold">{{
            gun.displayName.toUpperCase()
          }}</span>
          <NuxtImg
            v-if="arsenalStore.showImage[index]"
            :src="gun.displayIcon"
            alt="Gun Image"
            class="object-contain h-40 w-full"
            loading="lazy"
          />

          <div
            class="flex flex-row justify-center items-center gap-5 h-dvh text-2xl font-bold"
            v-if="arsenalStore.showContent[index]"
          >
            <div>
              TYPES //
              {{
                gun.category.replace("EEquippableCategory::", "").toUpperCase()
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
