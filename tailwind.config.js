module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f5f5f5",
          300: "#e4e4e4",
          600: "#848484",
          900: "#131313",
          "300_6c": "#e4e4e46c",
          "900_99": "#13131399",
        },
        black: { 900: "#000000", "900_0c": "#0000000c", "900_bf": "#000000bf" },
        cyan: { 700: "#00a8aa" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#000000bf,#000000bf)",
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000000c" },
      textShadow: { ts: "0px 4px  4px #0000000c" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
