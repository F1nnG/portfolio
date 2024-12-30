/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
			colors: {
				primary: '#2563eb',   // Blue-600
				secondary: '#0ea5e9', // Sky-500
				background: '#ffffff', // White for light mode
				card: '#f1f5f9',      // Slate-100
				border: '#e2e8f0',    // Slate-200
			},
		},
	},
	plugins: [],
}
