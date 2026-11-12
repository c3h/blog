// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://gimigliano.blog',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			// a fonte do site inteiro, servida daqui: o recorte do Google Fonts descarta
			// o ss01, que troca o desenho do "a" e que o global.css liga.
			// o arquivo é a Geist Mono 1.900 variável recortada com fonttools: glifos
			// do latin mais ← e →, recursos ccmp/locl/ss01 e o eixo de peso em 400–700
			provider: fontProviders.local(),
			name: 'Geist Mono',
			cssVariable: '--font-geist-mono',
			fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			options: {
				variants: [
					{
						weight: '400 700',
						style: 'normal',
						src: ['./src/assets/fonts/geist-mono-latin.woff2'],
					},
				],
			},
		},
		{
			// só o corpo dos posts usa; quem carrega é o PostLayout
			provider: fontProviders.google(),
			name: 'Lora',
			cssVariable: '--font-lora',
			weights: [400, 600, 700],
			styles: ['normal', 'italic'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['Charter', 'Georgia', 'ui-serif', 'serif'],
		},
	],
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark-dimmed',
			},
			defaultColor: false,
			wrap: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
