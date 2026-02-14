module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            animation: {
                widthFull: 'widthFull 200ms linear forwards',
            },
            keyframes: {
                widthFull: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}
