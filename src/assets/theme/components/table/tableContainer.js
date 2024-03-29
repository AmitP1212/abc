/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

*/

// Material Kit 2 React base styles
import colors from "../../base/colors";
import boxShadows from "../../base/boxShadows";
import borders from "../../base/borders";

const { white } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};
