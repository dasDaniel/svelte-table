import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import autoPreprocess from "svelte-preprocess";

const CONFIG = {
  input: "",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    dir: "example/public/bundle",
    globals: { faker: "faker" },
  },
  external: ["faker"],
  plugins: [
    svelte({
      emitCss: false,
      preprocess: autoPreprocess(),
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    // commonjs(),
  ],
};

export default [
  { ...CONFIG, input: "./example/example1.js" },
  { ...CONFIG, input: "./example/example2.js" },
  { ...CONFIG, input: "./example/example3.js" },
  { ...CONFIG, input: "./example/example4.js" },
  { ...CONFIG, input: "./example/example5.js" },
  { ...CONFIG, input: "./example/example6.js" },
  { ...CONFIG, input: "./example/example7.ts" },
  { ...CONFIG, input: "./example/example8.ts" },
];
