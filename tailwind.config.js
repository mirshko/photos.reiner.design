module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    colors: {
      primary: "#E3AF09",

      transparent: "transparent",
      current: "currentColor",

      black: "#000",
      white: "#fff",

      gray: "#cfd3dc",
      green: {
        light: "#34C759",
        dark: "#32D74B",
      },
      indigo: {
        light: "#5856D6",
        dark: "#5E5CE6",
      },
      pink: {
        light: "#FF2D55",
        dark: "#FF375F",
      },
      teal: {
        light: "#5AC8FA",
        dark: "#64D2FF",
      },
    },
    extend: {
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
