<script>
  export let row;
  export let onContactButtonClick;
</script>

<button on:click={() => onContactButtonClick(row)}>Contact {row.first_name} {row.last_name}</button>
