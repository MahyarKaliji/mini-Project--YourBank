/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green10: "#22251B",
        green60: "#CAFF33",
        green65: "#D1FF4C",
        green70: "#D8FF66",
        green80: "#E5FF99",
        green90: "#F2FFCC",
        green95: "#F8FFE5",
        green97: "#FBFFF0",
        green99: "#FEFFFA",

        white90: "#E4E4E7",
        white95: "#F1F1F3",
        white97: "#F7F7F8",
        white99: "#FCFCFD",

        grey10: "#191919",
        grey11: "#1C1C1C",
        grey15: "#262626",
        grey20: "#333333",
        grey30: "#4C4C4D",
        grey35: "#59595A",
        grey40: "#656567",
        grey60: "#98989A",
        grey70: "#B3B3B3",
        grey75: "#BFBFBF",
      },
      borderImage: (theme) => ({
        borderGradient:
          "linear-gradient(to bottom, rgba(202, 255, 51, 1) 0%, rgba(202, 255, 51, 0) 72%)",
      }),
      fontFamily: {
        Lexend: "Lexend",
      },
      backgroundImage: {
        bottomImage: "url('../images/Bottom-Container.png')",
        "linear-to-bottom-left":
          "linear-gradient(to bottom left, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 1) 40%)",
        outterGradient:
          "linear-gradient(to bottom, rgba(202, 255, 51, 1) 0%, rgba(202, 255, 51, 0) 100%)",
        innerGradient:
          "linear-gradient(to bottom, rgba(202, 255, 51, 1) 0%, rgba(202, 255, 51, 0) 47%)",
        rightDarkFade:
          "linear-gradient(to left, rgba(25, 25, 25, 1) 10%, rgba(25, 25, 25, 0) 100%)",
        leftDarkFade:
          "linear-gradient(to left, rgba(25, 25, 25, 0) 0%, rgba(25, 25, 25, 1) 100%)",
        rightLightFade:
          "linear-gradient(to left, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 100%)",
        leftLightFade:
          "linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
        loginBg: "url('../images/login-bg.png')",
      },
      padding: {
        4.5: "18px",
        6.5: "26px",
        7.5: "30px",
        15: "60px",
        25: "100px",
        50: "200px",
      },
      margin: {
        4.5: "18px",
        6.5: "26px",
        7.5: "30px",
        15: "60px",
        25: "100px",
        50: "200px",
      },
      gap: {
        4.5: "18px",
        6.5: "26px",
        7.5: "30px",
        12.5: "50px",
        15: "60px",
        25: "100px",
        50: "200px",
      },
      backgroundOpacity: {
        3: "0.05",
      },
      zIndex: {
        5: "5",
        15: "15",
        25: "25",
        35: "35",
        45: "45",
      },
      flexGrow: {
        4: "4",
        6: "6",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addUtilities }) {
      const noSpinButton = {
        ".no-spin-buttons": {
          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: "0",
          },
        },
      };
      addUtilities(noSpinButton, ["responsive"]);
    },
  ],
};
