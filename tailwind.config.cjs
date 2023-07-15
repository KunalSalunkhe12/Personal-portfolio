/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#49c5b6"
			},
			fontFamily: {
				oswald: ['Oswald Variable', 'sans-serif']
			}
		},
	},
	plugins: [],
}
