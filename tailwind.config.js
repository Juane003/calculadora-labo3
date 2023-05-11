/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "midnight-blue": "#2a1c53",
        "hotpink": "hotpink"
      },
      borderColor: {
        hotpink: "hotpink"
        
      },
      textColor: {
        "midnight-blue": "#2a1c53"
      }
    },
  },
  plugins: [],
};
