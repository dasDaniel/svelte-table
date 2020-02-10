  
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import buble from 'rollup-plugin-buble';
import serve from 'rollup-plugin-serve';

export default {
  input: 'main.js',
  output: {
    customElement: true,
    sourcemap: true,
    format: 'iife',
    name: 'app',
    dir: 'public/bundle'
  },
  plugins: [
    svelte(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    buble(),
    serve('public'),
    livereload({ watch: 'public' })
  ]
};
