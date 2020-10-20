import Example1 from "./Example1.svelte";

const example1 = new Example1({
  target: document.body,
  props: {
    name: "svelte-table example",
  },
});

export default example1;
