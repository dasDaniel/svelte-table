<script>
  export let row;
  export let col;
</script>

<button on:click={() => alert(`Contacted ${row.first_name} ${row.last_name}`)}>Contact</button>
