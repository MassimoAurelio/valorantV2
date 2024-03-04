import { computed } from "vue";
import { useScreenStore } from "@/store/resizeStore";
const resizeStore = useScreenStore();

export const useQwe = () => {
  return computed(() => {
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
};

export const useImg = () => {
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
