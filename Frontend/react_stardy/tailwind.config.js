// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        // ...
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0e1821",
                secondary: "#f5a524",
            },
        },
        // screens: {
        //     sm: "500px",
        // },
    },
    darkMode: "class",
    plugins: [nextui()],
};
