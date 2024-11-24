import type { Config } from "tailwindcss";

const config: Config = {
 
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {}, // Use this to add custom styles if needed
  },
  plugins: [], // No plugins by default
};

export default config;
