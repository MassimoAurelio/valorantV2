export const useScreenStore = defineStore("screen", () => {
  const platform = ref<"desctope" | "tablet" | "mobile">("desctope");

  const setPlatform = (width: number) => {
    if (width >= 1208) return (platform.value = "desctope");
    if (width >= 768) return (platform.value = "tablet");
    return (platform.value = "mobile");
  };

  return { setPlatform, platform };
});
