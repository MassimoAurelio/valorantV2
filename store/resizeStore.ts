export const useScreenStore = defineStore("screen", () => {
  const platform = ref<"desctope" | "tablet" | "mobile">("desctope");

  const setPlatform = (width: number) => {
    if (width >= 1208) {
      platform.value = "desctope";
    } else if (width >= 768) {
      platform.value = "tablet";
    } else {
      platform.value = "mobile";
    }
  };

  return { setPlatform, platform };
});
