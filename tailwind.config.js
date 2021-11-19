module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Noto Serif", "serif"],
    },
    fontSize: {
      outrageous: ["96px", "122px"],
      xxxlarge: ["56px", "84px"],
      xxlarge: ["36px", "54px"],
      xlarge: ["32px", "44px"],
      large: ["24px", "33px"],
      medium: ["18px", "32px"],
      small: ["16px", "22px"],
      xsmall: ["14px", "19px"],
      xxsmall: ["12px", "16px"],
    },
    colors: {
      brand: {
        DEFAULT: "#ec4f27",
        dark: "#ec4f27",
      },
      brandContrast: {
        DEFAULT: "#171717",
        dark: "#fcfcfc",
      },
      foreground: {
        DEFAULT: "#fcfcfc",
        dark: "#202020",
      },
      background: {
        DEFAULT: "#f2f2f2",
        dark: "#202020",
      },
      primaryContrast: {
        DEFAULT: "#171717",
        dark: "#fcfcfc",
      },
      secondaryContrast: {
        DEFAULT: "#888888",
        dark: "#bdbdbd",
      },
      tertiaryContrast: {
        DEFAULT: "#bdbdbd",
        dark: "#888888",
      },
      error: {
        DEFAULT: "#e20000",
        dark: "#e20000",
      },
      success: {
        DEFAULT: "#16ae40",
        dark: "#16ae40",
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  // variants: {
  //   extend: {
  //     display: ["dark"],
  //     visibility: ["responsive"],
  //   },
  // },
  plugins: [require("@tailwindcss/forms")],
};
