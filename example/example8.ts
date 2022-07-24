import Example from "./Example8.svelte";

const example = new Example({
  target: document.body,
  props: {
    name: "svelte-table example",
  },
});

export default example;
