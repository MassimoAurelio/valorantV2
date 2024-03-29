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
  uuid: string;
  displayName: string;
  role: IRole;
}

//maps

export interface IMaps {
  displayName: string;
  narrativeDescription: string;
  uuid: string;
  splash: string;
  listViewIconTall: string;
  premierBackgroundImage: string;
  stylizedBackgroundImage: string;
  displayIcon: string;
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
  skins: ISkins;
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
    name: "WEAPONS",
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

interface IWeaponCategory {
  categoryName: string;
}

export const WEAPON_CATEGORY: IWeaponCategory[] = [
  {
    categoryName: "ALL WEAPON",
  },
  {
    categoryName: "Heavy",
  },
  {
    categoryName: "Rifle",
  },
  {
    categoryName: "Sidearm",
  },
  {
    categoryName: "Shotgun",
  },
  {
    categoryName: "Sniper",
  },
  {
    categoryName: "SMG",
  },
  {
    categoryName: "Melee",
  },
];
