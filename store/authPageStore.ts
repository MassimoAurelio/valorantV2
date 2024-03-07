interface IImgButtons {
  img: string;
}

export const socialsButtonsStore = defineStore({
  id: "",

  state: () => ({
    item: [
      { img: "ic:baseline-facebook" },
      { img: "devicon:google" },
      { img: "ic:baseline-apple" },
      { img: "mingcute:xbox-fill" },
    ] as IImgButtons[],
  }),
});
