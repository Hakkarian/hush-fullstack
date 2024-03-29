import { extendTheme } from "@chakra-ui/react";


const colors = {
  firstColor: "#5AC3B0",
  secondColor: "#F7CD46",
  text: "#DE5935",
};

const button = {
  red: "#e8574f",
  black: "#50514f",

  waterBg: "#239ed3",
  sandBg: "#ffd740",
  roseBg: "#f75674",
  grassBg: "#795548",
  orangeBg: "#f99734",

  hgreen: "lighten(#1f8407, 10%)",
  mgreen: "lighten(#1fa600, 10%)",
  rgreen: "lighten(#2dbe0d, 10%)",
  lgreen: "lighten(#83f568, 10%)",

  hwhite: "#dcdde5",
  mwhite: "#c9cacc",
  rwhite: "#eeeeff",
  lwhite: "#ffffff",

  hblack: "#121212",
  mblack: "#343434",
  rblack: "#565656",
  lblack: "#787878",
};

const utils = {
  flexStyle: (way: string, just: string, align: string) => `
    display: flex;
    flex-direction: ${way};
    justify-content: ${just};
    align-items: ${align};
  `,
};
export const theme = extendTheme({
  colors,
  button,
  utils
});
