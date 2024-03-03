<script setup lang="ts">
import { useArsenalStore } from "@/store/useArsenalStore";
import { useBurgerMenu } from "@/store/burgerNav";
import { WEAPON_CATEGORY } from "@/types";

const arsenalStore = useArsenalStore();
const dropDownStore = useBurgerMenu();
const router = useRouter();
const selectedCategory = ref("");

const arsenalRequest = async () => {
  try {
    const request = await fetch("https://valorant-api.com/v1/weapons");
    const { data } = await request.json();
    arsenalStore.setArsenal(data);
    if (selectedCategory.value) {
      const filterCategory = data.filter(function (item: any) {
        return (
          item.category === `EEquippableCategory::${selectedCategory.value}`
        );
      });
      arsenalStore.setArsenal(filterCategory);
    }
  } catch (e) {
    console.error(e);
  }
};

const handleCardClick = (uuid: string, displayName: string) => {
  router.push(`/weapons/${uuid}`);
  useSeoMeta({ title: `VALORANT GUNS : ${displayName.toUpperCase()}` });
};

const handleCategoryClick = (category: string) => {
  selectedCategory.value = category;
  arsenalRequest();
  dropDownStore.toggleDropDown();
};

onMounted(() => {
  arsenalRequest();
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
          <span>ALL WEAPON</span>
          <div>p</div>
        </div>
        <div
          class="text-black absolute top-full left-0 bg-white w-full border border-black"
          v-if="dropDownStore.showDropDown"
        >
          <div
            v-for="item in WEAPON_CATEGORY"
            class="p-3 cursor-pointer text-black"
            @click="handleCategoryClick(item.categoryName)"
          >
            {{ item.categoryName.toUpperCase() }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap py-7">
      <div v-for="gun in arsenalStore.arsenal" :key="gun.uuid" class="w-1/2">
        <div
          class="text-white p-5 hover:bg-slate-500 flex flex-col justify-between h-full"
        >
          <span
            class="p-2"
            @click="handleCardClick(gun.uuid, gun.displayName)"
            >{{ gun.displayName }}</span
          >
          <img
            :src="gun.displayIcon"
            class="object-contain h-40 w-full"
            alt="Gun Image"
          />
        </div>
      </div>
    </div>
  </section>
</template>
