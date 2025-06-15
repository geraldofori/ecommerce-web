/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {  
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
		},
		textTransform: {
			uppercase: 'uppercase',
		},

		fontSize: {
			h1: [
				'56px',
				{
					lineHeight: '58px',
					letterSpacing: '2px',
					fontWeight: '700',
				},
			],
			h2: [
				'40px',
				{
					lineHeight: '44px',
					letterSpacing: '1.5px',
					fontWeight: '700',
				},
			],
			h3: [
				'32px',
				{
					lineHeight: '36px',
					letterSpacing: '1.15px',
					fontWeight: 'bold',
				},
			],
			h4: [
				'28px',
				{
					lineHeight: '38px',
					letterSpacing: '2px',
					fontWeight: 'bold',
				},
			],
			h5: [
				'24px',
				{
					lineHeight: '33px',
					letterSpacing: '1.7px',
					fontWeight: 'bold',
				},
			],
			h6: [
				'18px',
				{
					lineHeight: '24px',
					letterSpacing: '1.3px',
					fontWeight: 'bold',
				},
			],
			overline: [
				'14px',
				{
					lineHeight: '19px',
					letterSpacing: '10px',
					fontWeight: '400',
				},
			],
			subtitle: [
				'13px',
				{
					lineHeight: '25px',
					letterSpacing: '1px',
					fontWeight: 'bold',
				},
			],
			body: [
				'15px',
				{
					lineHeight: '25px',
					fontWeight: 'bold',
				},
			],
		},
		colors: {
			darkOrange: 'hsl(var(--dark-orange))',
			fadedOrange: 'hsl(var(--faded-orange))',
			oilBlack: 'hsl(var(--oil-black))',
			pureBlack: 'hsl(var(--pure-black))',
			darkWhite: 'hsl(var(--dark-white))',
			whiteWash: 'hsl(var(--white-wash))',
			pureWhite: 'hsl(var(--pure-white))',
		},
	},
	plugins: [require('tailwindcss-animate')],
};
