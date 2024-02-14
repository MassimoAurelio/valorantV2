import { headerNavStore } from "@/store/headerNav";
const headerStore = headerNavStore();

export const dropdownClass = (index: number) => {
  return {
    "bg-red-500": headerStore.dropdownStates[index],
    absolute: headerStore.dropdownStates[index],
    "h-1": headerStore.dropdownStates[index],
    "w-full": headerStore.dropdownStates[index],
    "rounded-sm": headerStore.dropdownStates[index],
  };
  
};
