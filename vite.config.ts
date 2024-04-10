/// <reference types="vitest" />
import eslintPlugin from '@nabla/vite-plugin-eslint';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig(({ mode, command, }) => ({
	define: {
		'process.env': process.env
	},
	root: path.join(import.meta.dirname, 'src'),
	envDir: process.cwd(),
	envPrefix: 'REACT_APP_PUBLIC',
	build: command === 'build' ? {
		emptyOutDir: true,
		outDir: path.join(import.meta.dirname, 'dist'),
		assetsDir: 'assets',
		manifest: true,
		minify: 'esbuild',
		sourcemap: 'inline',
		write: true,
		cssCodeSplit: true,
		cssMinify: 'esbuild'
	} : {},

	test: {
		include: ['src/**/__tests__/*'],
		globals: true,
		environment: 'jsdom',
		setupFiles: 'src/setupTests.ts',
		clearMocks: true,
		coverage: {
			enabled: true,
			'100': true,
			reporter: ['text', 'lcov'],
			reportsDirectory: 'coverage/jest',
		},
	},
	plugins: [
		tsconfigPaths(),
		react(),
		macrosPlugin(),
		viteCommonjs(),
		...(mode === 'test'
			? []
			: [
				eslintPlugin(),
				VitePWA({
					registerType: 'autoUpdate',
					includeAssets: ['assets/*.*'],
					manifest: {
						theme_color: '#BD34FE',
						icons: [
							{
								src: 'assets/icons/android-chrome-192x192.png',
								sizes: '192x192',
								type: 'image/png',
								purpose: 'any maskable',
							},
							{
								src: 'assets/icons/android-chrome-512x512.png',
								sizes: '512x512',
								type: 'image/png',
							},
						],
					},
				}),
			]),
	],
}));
