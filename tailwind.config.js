/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                page: {
                    light: '#d7eae8',   // ← light-mode page background
                    dark: 'rgb(45, 20, 86)',   // ← dark-mode page background
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
