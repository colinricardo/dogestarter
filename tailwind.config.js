module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
      light: {
        brand: "#ec4f27",
        brandContrast: "#fcfcfc",
        foreground: "#fcfcfc",
        background: "#f2f2f2",
        primaryContrast: "#171717",
        secondaryContrast: "#888888",
        tertiaryContrast: "#bdbdbd",
        error: "#e20000",
        success: "#16ae40",
      },
      dark: {
        brand: "#ec4f27",
        brandContrast: "#fcfcfc",
        foreground: "#202020",
        background: "#1b1b1b",
        primaryContrast: "#fcfcfc",
        secondaryContrast: "#bdbdbd",
        tertiaryContrast: "#888888",
        error: "#e20000",
        success: "#16ae40",
      },
    },
    extend: {
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
  variants: {
    extend: {
      display: ["dark"],
      visibility: ["responsive"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
