import { lighten } from "polished";
import { Dimensions } from "react-native";

// Primary color
const primary = "hsla(280, 68%, 60%,1)";

const $palette = {
  h0s0l0: "hsla(0, 0%, 0%, 1)",
  h0s0l10: "hsla(0, 0%, 10%, 1)",
  h0s0l20: "hsla(0, 0%, 20%, 1)",
  h0s0l35: "hsla(0, 0%, 35%, 1)",
  h0s0l50: "hsla(0, 0%, 50%, 1)",
  h0s0l51: "hsla(0, 0%, 51%, 1)",
  h0s0l60: "hsla(0, 0%, 60%, 1)",
  h0s0l74: "hsla(0, 0%, 74%, 1)",
  h0s0l84a2: "hsla(0, 0%, 84%, 0.2)",
  h0s0l46a3: "hsla(0, 0%, 46%, 0.3)",
  h0s0l84a15: "hsla(0, 0%, 84%, 0.15)",
  h240s5l47a100: "hsla(240, 5%, 47%,1)",
  h0s0l89: "hsla(0, 0%, 89%, 0.2)",
  h0s0l90: "hsla(0, 0%, 90%, 1)",
  h0s0l95: "hsla(0, 0%, 95%, 1)",
  h0s0l96: "hsla(0, 0%, 96%, 1)",
  h0s0l100: "hsla(0, 0%, 100%, 1)",
  h0s20l100: "hsla(0, 0%, 100%, 0.2)",
  h0s61l65: " hsla(0, 61%, 65%, 1)",
  h2s60l60: " hsla(2, 60%, 60%, 1)",
  h90s36l40: "hsla(90, 36%, 40%, 1)",
  h229s22l90: "	hsla(229, 22%, 90%, 1)",
  h220s5l13: "hsla(220, 5%, 13%, 1)",
  h220s7l9: "hsla(220, 7%, 9%, 1)",
  h220s15l8: "hsla(220, 15%, 8%, 1)",
  h225s15l8: "hsla(225, 15%, 8%, 1)",
  h228s20l90: "hsla(228, 20%, 90%, 1)",
  h230s9l61: "hsla(230, 9%, 61%, 1)",
  h247s19l1: "hsla(247, 21%, 19%, 1)",
  h246s21l19: "	hsla(246, 21%, 19%, 1)",
  h248s61l65: " hsla(248, 61%, 65%, 1)",
  primary,
  primaryLight: lighten(0.3, primary),
  black: "$palette.h0s0l0",
  white: "$palette.h0s0l100",
  background: "$palette.h0s0l0",
  // Opacity
  darkOpacity: "hsla(0, 0%, 0%, 0.4)",
  darkOpacity2: "hsla(0, 0%, 0%, 0.15)",
  darkOpacity3: "hsla(0, 0%, 0%, 0.5)",
  darkOpacity4: "hsla(0, 0%, 7%, 0.1)",
  darkOpacity5: "hsla(0, 0%, 0%, 0.25)",
};

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const $sizes = {
  minWidth: screenWidth,
  maxWidth: screenWidth,
  minHeight: screenHeight,
};

const $fonts = {
  primary: "Poppins-Medium",
  primaryMedium: "Poppins-Medium",
  primarySemiBold: "Poppins-SemiBold",
  primaryBold: "Poppins-Bold",
};

const variables = { $palette, $sizes, $fonts };

export default variables;
