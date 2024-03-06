interface IFooterSocialsImg {
  img: string;
}

interface IInfoButton {
  name: string;
  href: string;
}

export const useFooterSocialsStore = defineStore({
  id: "footer",

  state: () => ({
    items: [
      { img: "mdi:twitter" },
      { img: "mdi:youtube" },
      { img: "mdi:instagram" },
      { img: "ic:baseline-facebook" },
      { img: "ic:baseline-discord" },
    ] as IFooterSocialsImg[],
  }),
});

export const useFooterInfoButtonsStore = defineStore({
  id: "infoButton",
  state: () => ({
    items: [
      {
        name: "PRIVATE NOTICE",
        href: "https://www.riotgames.com/en/privacy-notice",
      },
      {
        name: "TERMS OF SERVICE",
        href: "https://www.riotgames.com/en/terms-of-service",
      },
      {
        name: "COMPANY INFORMATIOM",
        href: "https://euw.leagueoflegends.com/en-gb/news/riot-games/riot-games-europe-company-information",
      },
      {
        name: "COOKIE PREFERENCES",
        href: "",
      },
    ] as IInfoButton[],
  }),
});

interface IImg {
  src: string;
}

export const useFooterImgStore = defineStore({
  id: "footerImg",

  state: () => ({
    item: [
      { src: "/public/16eu.jpg" },
      { src: "/public/in-game.png" },
      { src: "/public/violence.png" },
    ] as IImg[],
  }),
});
