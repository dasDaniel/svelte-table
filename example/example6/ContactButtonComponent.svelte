<script>
  export let row;
  export let onContactButtonClick;
  export let col;
  let key = col.key.charAt(0).toUpperCase() + col.key.slice(1);
</script>

<button on:click={() => onContactButtonClick(row)}
  >{key} {row.first_name} {row.last_name}
</button>
