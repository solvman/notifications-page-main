import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "site-clamp-39px-45px":
          "clamp(2.4375rem, 1.9068rem + 2.2642vw, 2.8125rem)",
      },
      width: {
        "site-clamp-39px-45px":
          "clamp(2.4375rem, 1.9068rem + 2.2642vw, 2.8125rem)",
      },
      fontSize: {
        "site-clapm-14px-16px": "clamp(0.875rem, 0.6981rem + 0.7547vw, 1rem)",
        "site-clamp-20px-24px": "clamp(1.25rem, 0.8962rem + 1.5094vw, 1.5rem)",
      },
      colors: {
        site: {
          red: "hsl(1 90% 64% / <alpha-value>)",
          blue: "hsl(219 85% 26% / <alpha-value>)",
          white: "hsl(0 0% 100% / <alpha-value>)",
          snow: "hsl(210 60% 98% / <alpha-value>)",
          "light-grey-blue": "hsl(211 68% 94% / <alpha-value>)",
          "very-light-grey-blue": "hsl(205 33% 90% / <alpha-value>)",
          "grey-blue": "hsl(219 14% 63% / <alpha-value>)",
          "dark-grey-blue": "hsl(219 12% 42% / <alpha-value>)",
          "very-dark-blue": "hsl(224 21% 14% / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
