  
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


// {
//   input,
//   output: {
//     customElement: true,
//     sourcemap: true,
//     format: 'iife',
//     name,
//     dir: 'public/iife'
//   },
//   plugins: [
//     svelte({
//       dev: !production,
//       css: css => {
//         css.write('public/bundle.css');
//       }
//     }),

//     resolve(),
//     commonjs(),

//     production && terser()
//   ]
// },
// {
//   input: 'src/main.js',
//   output: {
//     customElement: true,
//     sourcemap: true,
//     format: 'iife',
//     name: 'app',
//     dir: 'public/bundle'
//   },
//   plugins: [
//     svelte({
//       dev: !production,
//       css: css => {
//         css.write('public/bundle.css');
//       }
//     }),
//     resolve(),
//     commonjs(),
//     production && terser()
//   ]
// },