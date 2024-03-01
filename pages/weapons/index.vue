<script setup lang="ts">
import { useArsenalStore } from "@/store/useArsenalStore";
import { useBurgerMenu } from "@/store/burgerNav";

const arsenalStore = useArsenalStore();
const dropDownStore = useBurgerMenu();
const router = useRouter();

const arsenalRequest = async () => {
  try {
    const request = await fetch("https://valorant-api.com/v1/weapons");
    const { data } = await request.json();
    arsenalStore.setCategory(data);
    arsenalStore.setArsenal(data);
  } catch (e) {
    console.error(e);
  }
};

const handleCardClick = (uuid: string, displayName: string) => {
  router.push(`/weapons/${uuid}`);
  useSeoMeta({ title: `VALORANT GUNS : ${displayName.toUpperCase()}` });
};

onMounted(arsenalRequest);
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
            v-for="item in arsenalStore.category"
            class="p-3 cursor-pointer text-black"
            @click.stop="handleCardClick(item.uuid, item.displayName)"
          >
            {{ item.shopData?.categoryText }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap py-7">
      <div v-for="gun in arsenalStore.arsenal" :key="gun.uuid" class="w-1/2">
        <div
          class="text-white p-5 hover:bg-slate-500 flex flex-col justify-between h-full"
        >
          <span class="p-2">{{ gun.displayName }}</span>
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
