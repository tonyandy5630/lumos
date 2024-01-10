/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#D4FCF9',
                secondary: '#FF9E9E',
                error: '#E76F51',
                success: '#57CC99',
                warning: '#FF9800',
                mosh: '#0A4F45',
                footer: '#0A4F458A',
                'dark-primary': '#B5F2EB',
                purple: '#B28CFF',
                'yellow-ish': '#FFF3F2',
                green: '#6DDDCD',
                white: '#F8F8F3',
            },
        },
    },
    plugins: [],
}
