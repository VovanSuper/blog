const defaultConfig = require('tailwindcss/defaultConfig');
const formsPlugin = require('@tailwindcss/forms');

const primaryColors = {
	bgTop: 'var(--clr-bg-top)',
	bgBottom: 'var(--clr-bg-bottom)',
	linkHover: 'var(--clr-link-hover)',
	linkWhite: 'var(--clr-link-white)',
	linkNormal: 'var(--clr-link-normal)',
	linkSilver: 'var(--clr-link-sliver)',
	linkSecondary: 'var(--clr-link-secondary)',
	linkBlack20: 'var(--clr-link-black-20)',
	linkBlack50: 'var(--clr-link-black-50)',
	transparent: 'var(--clr-transparent)',
	cvMain: 'var(--clr-cv-main)',
	cvAside: 'var(--clr-cv-aside)',
};

const darkColors = {
	dark50: 'var(--clr-dark-50)',
	dark100: 'var(--clr-dark-100)',
	dark300: 'var(--clr-dark-300)',
	dark500: 'var(--clr-dark-500)',
	dark700: 'var(--clr-dark-700)',
	dark900: 'var(--clr-dark-900)',
};

const redColors = {
	red50: 'var(--clr-red-50)',
	red100: 'var(--clr-red-100)',
	red300: 'var(--clr-red-300)',
	red500: 'var(--clr-red-500)',
	red700: 'var(--clr-red-700)',
	red900: 'var(--clr-red-900)',
};

const greenColors = {
	green100: 'var(--clr-green-100)',
	green300: 'var(--clr-green-300)',
	green700: 'var(--clr-green-700)',
	green900: 'var(--clr-green-900)',
};

module.exports = {
	content: ['src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Montserrat', ...defaultConfig.theme.fontFamily.sans],
		},

		colors: {
			current: 'currentColor',
			...primaryColors,
			...darkColors,
			...redColors,
			...greenColors,
		},
		extend: {
			screens: {
				xs: '400px',
			},
			padding: {
				'1/3': '33.333%',
				'1/2': '50%',
				'2/3': '66.666%',
				full: '100%',
			},
			spacing: {
				'3/10': '30%',
			},
			keyframes: {
				'spin-bounce': {
					'0%': { transform: 'rotate(0) scale(1)' },
					'50%': { transform: 'rotate(180deg) scale(1.2)' },
					'100%': { transform: 'rotate(360deg) scale(1)' },
				},
			},
			animation: {
				'spin-slow': 'spin-bounce 2s linear infinite',
			},
		},
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin],
};
