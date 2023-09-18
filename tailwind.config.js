module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#0896c8",
        "weather-secondary": "#c38f08",
        "weather-third": "#2fae3a",
        "weather-forth": "#d73434",
        "weather-fifth": "#984ab7",
        "weather-sixth": "#d522b1",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
