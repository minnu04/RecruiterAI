/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    1: '#A5D8FF',
                    2: '#D0BCFF',
                    3: '#B197FC',
                },
                light: {
                    primary: '#3B82F6',
                    primaryBG: '#EFF6FF',
                    secondaryBG: '#FFFFFF',
                    secondary: '#F3F4F6',
                },
                dark: {
                    primaryBG: '#000000',
                    secondaryBG: '#404040',
                    secondary: '#737373',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
