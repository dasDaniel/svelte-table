<script>
	export let columns;
	export let rows;
	console.log({columns, rows});
	let sortOrder = 1;
	let sortKey = "";
	let sortBy = r => "";
	let showFilterHeader = columns.some(c => c.filterOptions !== undefined);
	let filterValues = {};
	let filterSettings = {};
	let columnByKey = {};
	columns.forEach(col => {
	  columnByKey[col.key] = col;
	});

	// $: console.log(filterSettings, filterValues);
	$: c_rows = rows
	  .filter(r =>
	    Object.keys(filterSettings).every(f => {
	      // console.log(f, filterSettings[f], columnByKey[f])
	      let ret =  (
	        filterSettings[f] === undefined ||
	        filterSettings[f] === columnByKey[f].filterValue(r)
				);
				return ret;
	    })
	  )
	  .map(r => ({ ...r, $sortOn: sortBy(r) }))
	  .sort((a, b) => {
	    if (a.$sortOn > b.$sortOn) return sortOrder;
	    else if (a.$sortOn < b.$sortOn) return -sortOrder;
	    return 0;
	  });

	const calculateFilterValues = () => {
	  filterValues = {};
	  columns.forEach(c => {
	    if (typeof c.filterOptions === "function") {
	      filterValues[c.key] = c.filterOptions(rows);
	    } else if (Array.isArray(c.filterOptions)) {
	      filterValues[c.key] = [...c.filterOptions];
	    }
	  });
	};

	const handleSort = col => {
	  if (col.sortable === true && typeof col.value === "function") {
	    if (sortKey === col.key) {
	      sortOrder = sortOrder === 1 ? -1 : 1;
	    } else {
	      sortOrder = 1;
	      sortKey = col.key;
	      sortBy = r => col.value(r);
	    }
	  }
	};

	if (showFilterHeader) {
	  calculateFilterValues();
	}
</script>

<style>
	table {
	  width: 100%;
	}
	.isSortable {
	  cursor: pointer;
	}

	tr th select {
		width: 100%;
	}
</style>

<table>
	{#if showFilterHeader}
		<tr>
		  {#each columns as col}
		  	<th>
					{#if filterValues[col.key] !== undefined}
						<select bind:value={filterSettings[col.key]}>
							<option value={undefined}></option>
						  {#each filterValues[col.key] as option}
								<option value={option.value}>{option.name}</option>
						  {/each}
						</select>
					{/if}
				</th>
		  {/each}
		</tr>
	{/if}
	<tr>
	  {#each columns as col}
	  	<th on:click={() => handleSort(col)} class="{[(col.sortable ? 'isSortable' : '' ),(col.headerClass !== undefined && col.headerClass)].join(' ')}">
				{col.title}
				{#if sortKey === col.key}
					{ sortOrder === 1 ? '▲' : '▼'}
				{/if}
			</th>
	  {/each}
	</tr>
	{#each c_rows as row}
		<tr>
		  {#each columns as col}
		  	<td class="{col.class !== undefined && col.class}">{@html col.renderValue ? col.renderValue(row) : col.value(row)}</td>
		  {/each}
		</tr>
	{/each}
</table>
