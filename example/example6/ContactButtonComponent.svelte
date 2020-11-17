<script>
  export let row;
</script>

<button on:click={() => alert(`Contacted ${row.first_name} ${row.last_name}`)}>Contact</button>
