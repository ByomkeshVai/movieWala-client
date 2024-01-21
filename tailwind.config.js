/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-pattern":
          "url('https://script.viserlab.com/playlab/demo/assets/images/item/landscape//uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg')",
      },
    },
  },
  plugins: [],
};
