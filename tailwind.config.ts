import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    fontWeight: {
      extralight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
    extend: {
      colors: {
        heroYellow: "#FDCA09",
        metricsYellow: "#FEC00A",
        contactColor: "#FEF1E0",
      },
      fontSize: {
        "24": "1.5rem", // 24px
        "28": "1.75rem", // 28px
        "30": "1.875rem", // 30px
        "34": "2.125rem", // 34px
        "44": "2.75rem", // 44px
        "60": "3.75rem", // 60px
        "100": "6.25rem", // 100px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
