<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let columns;
  export let rows;
  export let sortBy = "";
  export let sortOrder = 1;
  export let iconAsc = '▲';
  export let iconDesc = '▼';
  export let classNameTable = '';
  export let classNameThead = '';
  export let classNameTbody = '';
  export let classNameSelect = '';
  export let classNameRow = '';
  export let classNameCell = '';
  export let filterSelections = {};

  let sortFunction = () => "";
  let showFilterHeader = columns.some(c => {
    // check if there are any filter or search headers
    return c.filterOptions !== undefined || c.searchValue !== undefined
  });
  let filterValues = {};
  let searchValues = {};
  let columnByKey;
  $: {
    columnByKey = {};
    columns.forEach(col => {
      columnByKey[col.key] = col;
    });
  }

  $: c_rows = rows
    .filter(r => {
      // get search and filter results/matches
      return Object.keys(filterSelections).every(f => {
          // check search (text input) matches
          let resSearch =
            filterSelections[f] === "" ||
            (columnByKey[f].searchValue &&
              (columnByKey[f].searchValue(r) + "")
                .toLocaleLowerCase()
                .indexOf((filterSelections[f] + "").toLocaleLowerCase()) >= 0);
            
          // check filter (dropdown) matches
          let resFilter =
            resSearch ||
            filterSelections[f] === undefined ||
            // default to value() if filterValue() not provided in col
            filterSelections[f] ===
              (typeof columnByKey[f].filterValue === "function"
                ? columnByKey[f].filterValue(r)
                : columnByKey[f].value(r));
          return resFilter;
        })
      }
    )
    .map(r => (Object.assign({}, r, {$sortOn: sortFunction(r)} ) ) )
    .sort((a, b) => {
      if (a.$sortOn > b.$sortOn) return sortOrder;
      else if (a.$sortOn < b.$sortOn) return -sortOrder;
      return 0;
    });

  const asStringArray = (v) => [].concat(v).filter(v => typeof v === 'string' && v !== "").join(' ');

  const calculateFilterValues = () => {
    filterValues = {};
    columns.forEach(c => {
      if (typeof c.filterOptions === "function") {
        filterValues[c.key] = c.filterOptions(rows);
      } else if (Array.isArray(c.filterOptions)) {
        // if array of strings is provided, use it for name and value
        filterValues[c.key] = c.filterOptions.map(val => ({name:val, value:val}));
      }
    });
  };

  $: {
    let col = columnByKey[sortBy];
    if (col !== undefined && col.sortable === true && typeof col.value === "function") {
      sortFunction = r => col.value(r);
    }
  };

  $: {
    // if filters are enabled, watch rows and columns
    if (showFilterHeader && columns && rows) {
      calculateFilterValues();
    }
  };

  const updateSortOrder = (colKey) => {
    if (colKey === sortBy) {
      sortOrder = sortOrder === 1 ? -1 : 1
    } else {
      sortOrder = 1;
    }
  }

  const handleClickCol = (event, col) => {
    if (col.sortable) {
      updateSortOrder(col.key)
      sortBy = col.key;
    }
    dispatch('clickCol', {event, col, key:col.key} );
  }

  const handleClickRow = (event, row) => {
    dispatch('clickRow', {event, row} );
  }

  const handleClickCell = (event, row, key) => {
    dispatch('clickCell', {event, row, key} );
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

<table class={asStringArray(classNameTable)}>
  <thead class={asStringArray(classNameThead)}>
    {#if showFilterHeader}
      <tr>
        {#each columns as col}
          <th>
            {#if col.searchValue !== undefined}
              <input bind:value={filterSelections[col.key]}>
            {:else if filterValues[col.key] !== undefined}
              <select bind:value={filterSelections[col.key]} class={asStringArray(classNameSelect)}>
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
    <slot name="header" sortOrder={sortOrder} sortBy={sortBy}>
      <tr>
        {#each columns as col}
          <th
            on:click={(e) => handleClickCol(e, col)}
            class={asStringArray([col.sortable ? 'isSortable' : '', col.headerClass])}
          >
            {col.title}
            {#if sortBy === col.key}
              { sortOrder === 1 ? iconAsc : iconDesc}
            {/if}
          </th>
        {/each}
      </tr>
    </slot>
  </thead>
  <tbody class={asStringArray(classNameTbody)}>
    {#each c_rows as row, n}
      <slot name="row" row={row} n={n} >
        <tr on:click={(e)=>{handleClickRow(e, row)}} class={asStringArray(classNameRow)}>
          {#each columns as col}
            <td
              on:click={(e)=>{handleClickCell(e, row, col.key)}}
              class={asStringArray([col.class, classNameCell])}
            >
              {#if col.renderComponent}
                <svelte:component
                  this={col.renderComponent.component || col.renderComponent} {...(col.renderComponent.props || {})}
                  row={row}
                  col={col}
                />
              {:else}
                {@html col.renderValue ? col.renderValue(row) : col.value(row)}
              {/if}
            </td>
          {/each}
        </tr>
      </slot>
    {/each}
  </tbody>
</table>
