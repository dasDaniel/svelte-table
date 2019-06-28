import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [
	{
		input: ['src/SvelteTable.svelte'],
		output: {
			customElement: true,
			sourcemap: true,
			format: 'cjs',
			name: 'svelteTable',
			dir: 'dist/cjs'
		},
		plugins: [
			svelte({
				dev: !production,
				css: css => {
					css.write('dist/cjs/style.css');
				}
			}),

			resolve(),
			commonjs(),

			production && terser()
		]
	},
	{
		input: ['src/SvelteTable.svelte'],
		output: {
			customElement: true,
			sourcemap: true,
			format: 'umd',
			name: 'svelteTable',
			dir: 'dist/umd'
		},
		plugins: [
			svelte({
				dev: !production,
				css: css => {
					css.write('dist/umd/style.css');
				}
			}),

			resolve(),
			commonjs(),

			production && terser()
		]
	},
	{
		input: ['src/SvelteTable.svelte'],
		output: {
			customElement: true,
			sourcemap: true,
			format: 'iife',
			name: 'svelteTable',
			dir: 'dist/iife'
		},
		plugins: [
			svelte({
				dev: !production,
				css: css => {
					css.write('dist/iife/style.css');
				}
			}),

			resolve(),
			commonjs(),

			production && terser()
		]
	},
	{
		input: ['src/SvelteTable.svelte'],
		output: {
			customElement: true,
			sourcemap: true,
			format: 'iife',
			name: 'svelteTable',
			dir: 'public/iife'
		},
		plugins: [
			svelte({
				dev: !production,
				css: css => {
					css.write('public/iife/style.css');
				}
			}),

			resolve(),
			commonjs(),

			production && terser()
		]
	},
	{
		input: 'src/main.js',
		output: {
			customElement: true,
			sourcemap: true,
			format: 'iife',
			name: 'app',
			dir: 'public/bundle'
		},
		plugins: [
			svelte({
				dev: !production,
				css: css => {
					css.write('public/bundle/style.css');
				}
			}),
			resolve(),
			commonjs(),
			production && terser()
		]
	},
];
