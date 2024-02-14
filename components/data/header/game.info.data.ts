import type {
  IDropdowninfo,
  IDropdownitem,
} from "@/components/data/header/dropdown.types";

export const HEADER_ITEMS_DATA: IDropdownitem[] = [
  {
    name: "GAME INFO",
    id: 1,
  },
  {
    name: "MEDIA",
    id: 2,
  },
  {
    name: "NEWS",
    id: 3,
  },
  {
    name: "LEADERBORDS",
    id: 4,
  },
  {
    name: "SUPPORT",
    id: 5,
  },
  {
    name: "OUR SOCIALS",
    id: 6,
  },
];

export const GAME_INFO_DATA: IDropdowninfo[] = [
  {
    name: "AGENTS",
  },
  {
    name: "MAPS",
  },
  {
    name: "ARSENAL",
  },
  {
    name: "PREMIER",
  },
];

export const SUPPORT_DATA: IDropdowninfo[] = [
  {
    name: "SPECS",
  },
  {
    name: "SUPPORT",
  },
  {
    name: "COMUNITY CODE",
  },
];

export const OUR_SOCIALS_DATA: IDropdowninfo[] = [
  {
    name: "TWITTER",
  },
  {
    name: "YOUTUBE",
  },
  {
    name: "INSTAGRAM",
  },
];
