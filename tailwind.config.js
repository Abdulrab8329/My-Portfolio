/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                page: {
                    light: '#35c4d356',   // ← light-mode page background
                    dark: 'rgb(0, 0, 0)',   // ← dark-mode page background
                },
                surface: {
                    light: '#ffffff',
                    dark: '#050505',
                },
            },
        },
    },
    plugins: [],
};
