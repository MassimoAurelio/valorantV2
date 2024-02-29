//agents
export interface IAbilities {
  slot: string;
  displayName: string;
  displayIcon: string;
  description: string;
}

export interface IRole {
  description: string;
  displayIcon: string;
  displayName: string;
}

export interface IAgents {
  abilities: IAbilities[];
  description: string;
  displayIconSmall: string;
  fullPortrait: string;
  displayicon: string;
  uuid: any;
  displayName: string;
  role: IRole;
}

//maps

export interface IMaps {
  displayName: string;
  narrativeDescription: string;
  uuid: string | number;
  splash: string;
}

//arsenal
export interface IShopData {
  category: string;
  categoryText: string;
  cost: number;
}

export interface ISkins {
  contentTierUuid: string;
  displayIcon: string;
  displayName: string;
  themeUuid: string;
  uuid: string;
}
export interface IArsenal {
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  displayName: string;
  killStreamIcon: string;
  shopData: IShopData;
  skins: ISkins[];
  uuid: string;
}

//header
export interface IDropdowninfo {
  name: string;
}

export interface IDropdownitem {
  name: string;
  id: number;
}

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
