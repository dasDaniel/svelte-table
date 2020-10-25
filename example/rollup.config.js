import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import buble from "rollup-plugin-buble";
import serve from "rollup-plugin-serve";

const CONFIG = {
  input: "",
  output: {
    customElement: true,
    sourcemap: true,
    format: "iife",
    name: "app",
    dir: "public/bundle"
  },
  plugins: [
    svelte(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    buble({ transforms: { forOf: false } }),
    serve("public"),
    livereload({ watch: "public" })
  ]
};

export default [
  { ...CONFIG, input: "example1.js" },
  { ...CONFIG, input: "example2.js" },
  { ...CONFIG, input: "example3.js" },
  { ...CONFIG, input: "example4.js" },
  { ...CONFIG, input: "example5.js" },
];
