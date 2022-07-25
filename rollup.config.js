import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import autoPreprocess from "svelte-preprocess";
// import typescript from "@rollup/plugin-typescript";

const minify = !process.env.MINIFY;
const input = "src/index.js";
const name = "SvelteTable";

const plugins = [
  svelte({
    emitCss: false,
    preprocess: autoPreprocess(),
  }),
  // typescript({ sourceMap: true }),
  resolve(),
  // commonjs(),
  minify && terser(),
];

export default [
  {
    input,
    output: {
      sourcemap: true,
      exports: "default",
      format: "cjs",
      name,
      file: "dist/cjs/SvelteTable.js",
    },
    plugins,
  },
  {
    input,
    output: {
      sourcemap: true,
      format: "es",
      name,
      file: pkg.module,
    },
    plugins,
  },
  {
    input,
    output: {
      sourcemap: true,
      format: "umd",
      name,
      file: pkg.main,
    },
    plugins,
  },
  {
    input,
    output: {
      sourcemap: true,
      format: "iife",
      name,
      file: "dist/iife/SvelteTable.js",
    },
    plugins,
  },
];
