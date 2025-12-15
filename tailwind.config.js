/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#1A1A1A',
                'brand-gray': '#333333',
                'neon-green': '#A4D65E',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
            dropShadow: {
                'neon': '0 0 10px rgba(164, 214, 94, 0.5)',
            }
        },
    },
    plugins: [],
}
