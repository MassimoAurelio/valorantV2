import { computed } from "vue";
import { useScreenStore } from "@/store/resizeStore";


export const useGetLayoutClasses = () => {
  const resizeStore = useScreenStore();
  const { platform } = storeToRefs(resizeStore);
  const screenSize = computed(() => {
    if (resizeStore.platform === "desctope") {
      return "relative flex flex-row items-center gap-96 justify-center";
    }
    if (resizeStore.platform === "tablet") {
      return "relative grid-cols-3";
    }
    if (resizeStore.platform === "mobile") {
      return "relative flex flex-col item-center";
    }
  });
  return { screenSize };
};

export const useGetImageStyles = () => {
  const resizeStore = useScreenStore();
  return computed(() => {
    if (resizeStore.platform === "desctope") {
      return "absolute flex justify-center items-center w-7/12";
    }
    if (resizeStore.platform === "tablet") {
      return "absolute right-0 w-7/12";
    }
    if (resizeStore.platform === "mobile") {
      return "";
    }
  });
};

export const useCarusel = () => {
  const resizeStore = useScreenStore();
  return computed(() => {
    if (resizeStore.platform === "desctope") {
      return "vertical";
    }
    if (
      resizeStore.platform === "tablet" ||
      resizeStore.platform === "mobile"
    ) {
      return "horizontal";
    }
  });
};
