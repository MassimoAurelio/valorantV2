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

interface IFooterButtons {
  name: string;
  href: string;
}

export const useFooterButtonStore = defineStore({
  id: "footer-button",
  state: () => ({
    item: [
      {
        name: "Download Game Client",
        href: "https://playvalorant.com/en-gb/download/",
      },
      {
        name: "Download Riot Mobile Companion App",
        href: "https://play.google.com/store/apps/details?id=com.riotgames.mobile.leagueconnect&referrer=singular_click_id%3D55d6b54f-0d76-429f-84fa-2a65ff040153",
      },
    ] as IFooterButtons[],
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
