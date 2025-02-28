import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#49F5DF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom:
          "0px 4px 10px rgba(73, 245, 223, 0.5), 0px -4px 10px rgba(73, 245, 223, 0.5), 4px 0px 10px rgba(73, 245, 223, 0.5), -4px 0px 10px rgba(73, 245, 223, 0.5)",
        allsides: "0px 6px 20px, 0px -6px 20px, 6px 0px 20px, -6px 0px 20px",
      },
    },
  },
  plugins: [],
} satisfies Config;
