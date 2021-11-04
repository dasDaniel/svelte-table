<script>
  import { createEventDispatcher } from "svelte";
  import paginate from 'jw-paginate';

  import Pagination from './Pagination.svelte';

  /** @type {Array<Object>} */
  export let columns;

  /** @type {Array<Object>} */
  export let rows;

  // READ AND WRITE

  /** @type {string} */
  export let sortBy = "";

  /** @type {number} */
  export let sortOrder = 1;

  /** @type {Object} */
  export let filterSelections = {};

  // expand
  /** @type {Array.<string|number>} */
  export let expanded = [];

  /** @type {Object} */
  export let usePagination = false;

  /** @type {boolean} */
  export let showPageCount = false;

  /** @type {Object} */
  export let paginationOpts = {
    info: "Showing {start} to {end} of {rows}",
    previous: "◄",
    next: "►",
    noResults: "No data found"
  };

  /** @type {number} */
  export let currentPage;

  /** @type {number} */
  export let pageSize;

  /** @type {number} */
  export let maxPages;

  // READ ONLY

  /** @type {string} */
  export let expandRowKey = null;

  /** @type {string} */
  export let expandSingle = false;

  /** @type {string} */
  export let iconAsc = "▲";

  /** @type {string} */
  export let iconDesc = "▼";

  /** @type {string} */
  export let iconExpand = "▼";

  /** @type {string} */
  export let iconExpanded = "▲";

  /** @type {boolean} */
  export let showExpandIcon = false;

  /** @type {string} */
  export let classNameTable = "";

  /** @type {string} */
  export let classNameThead = "";

  /** @type {string} */
  export let classNameTbody = "";

  /** @type {string} */
  export let classNameSelect = "";

  /** @type {string} */
  export let classNameRow = "";

  /** @type {string} */
  export let classNameCell = "";

  /** @type {string} class added to the expanded row*/
  export let classNameRowExpanded = "";

  /** @type {string} class added to the cell that allows expanding/closing */
  export let classNameCellExpand = "";

  const dispatch = createEventDispatcher();

  let sortFunction = () => "";

  // Validation
  if (!Array.isArray(expanded)) throw "'expanded' needs to be an array";

  let showFilterHeader = columns.some(c => {
    // check if there are any filter or search headers
    return c.filterOptions !== undefined || c.searchValue !== undefined;
  });
  let filterValues = {};
  let columnByKey;
  $: {
    columnByKey = {};
    columns.forEach(col => {
      columnByKey[col.key] = col;
    });
  }

  $: colspan = (showExpandIcon ? 1 : 0) + columns.length;

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
      });
    })
    .map(r =>
      Object.assign({}, r, {
        // internal row property for sort order
        $sortOn: sortFunction(r),
        // internal row property for expanded rows
        $expanded:
          expandRowKey !== null && expanded.indexOf(r[expandRowKey]) >= 0,
      })
    )
    .sort((a, b) => {
      if (a.$sortOn > b.$sortOn) return sortOrder;
      else if (a.$sortOn < b.$sortOn) return -sortOrder;
      return 0;
    });

  let pagination, d_rows;
  $: if(c_rows && usePagination) {
    pagination = paginate(c_rows.length, currentPage, pageSize, maxPages);
    console.log(pagination);

    d_rows = c_rows.slice(usePagination ? pagination.startIndex : 0,
      usePagination ? pagination.endIndex + 1 : rows.length - 1);
  } else {
    d_rows = c_rows;
  }

  const asStringArray = v =>
    []
      .concat(v)
      .filter(v => typeof v === "string" && v !== "")
      .join(" ");

  const calculateFilterValues = () => {
    filterValues = {};
    columns.forEach(c => {
      if (typeof c.filterOptions === "function") {
        filterValues[c.key] = c.filterOptions(rows);
      } else if (Array.isArray(c.filterOptions)) {
        // if array of strings is provided, use it for name and value
        filterValues[c.key] = c.filterOptions.map(val => ({
          name: val,
          value: val,
        }));
      }
    });
  };

  $: {
    let col = columnByKey[sortBy];
    if (
      col !== undefined &&
      col.sortable === true &&
      typeof col.value === "function"
    ) {
      sortFunction = r => col.value(r);
    }
  }

  $: {
    // if filters are enabled, watch rows and columns
    if (showFilterHeader && columns && rows) {
      calculateFilterValues();
    }
  }

  const updateSortOrder = colKey => {
    if (colKey === sortBy) {
      sortOrder = sortOrder === 1 ? -1 : 1;
    } else {
      sortOrder = 1;
    }
  };

  const handleClickCol = (event, col) => {
    if (col.sortable) {
      updateSortOrder(col.key);
      sortBy = col.key;
    }
    dispatch("clickCol", { event, col, key: col.key });
  };

  const handleClickRow = (event, row) => {
    dispatch("clickRow", { event, row });
  };

  const handleClickExpand = (event, row) => {
    row.$expanded = !row.$expanded;
    const keyVal = row[expandRowKey];
    if (expandSingle && row.$expanded) {
      expanded = [keyVal];
    } else if (expandSingle) {
      expanded = [];
    } else if (!row.$expanded) {
      expanded = expanded.filter(r => r != keyVal);
    } else {
      expanded = [...expanded, keyVal];
    }
    dispatch("clickExpand", { event, row });
  };

  const handleClickCell = (event, row, key) => {
    dispatch("clickCell", { event, row, key });
  };
</script>

{#if usePagination && usePagination.top}
  <Pagination bind:pagination={pagination} bind:currentPage={currentPage}
    bind:showPageCount={showPageCount} bind:paginationOpts={paginationOpts} />
{/if}

<table class={asStringArray(classNameTable)}>
  <thead class={asStringArray(classNameThead)}>
    {#if showFilterHeader}
      <tr>
        {#each columns as col}
          <th>
            {#if col.searchValue !== undefined}
              <input bind:value={filterSelections[col.key]} />
            {:else if filterValues[col.key] !== undefined}
              <select
                bind:value={filterSelections[col.key]}
                class={asStringArray(classNameSelect)}
              >
                <option value={undefined} />
                {#each filterValues[col.key] as option}
                  <option value={option.value}>{option.name}</option>
                {/each}
              </select>
            {/if}
          </th>
        {/each}
        {#if showExpandIcon}
          <th />
        {/if}
      </tr>
    {/if}
    <slot name="header" {sortOrder} {sortBy}>
      <tr>
        {#each columns as col}
          <th
            on:click={e => handleClickCol(e, col)}
            class={asStringArray([
              col.sortable ? "isSortable" : "",
              col.headerClass,
            ])}
          >
            {col.title}
            {#if sortBy === col.key}
              {sortOrder === 1 ? iconAsc : iconDesc}
            {/if}
          </th>
        {/each}
        {#if showExpandIcon}
          <th />
        {/if}
      </tr>
    </slot>
  </thead>

  <tbody class={asStringArray(classNameTbody)}>
    {#each d_rows as row, n}
      <slot name="row" {row} {n}>
        <tr
          on:click={e => {
            handleClickRow(e, row);
          }}
          class={asStringArray(classNameRow)}
        >
          {#each columns as col}
            <td
              on:click={e => {
                handleClickCell(e, row, col.key);
              }}
              class={asStringArray([col.class, classNameCell])}
            >
              {#if col.renderComponent}
                <svelte:component
                  this={col.renderComponent.component || col.renderComponent}
                  {...col.renderComponent.props || {}}
                  {row}
                  {col}
                />
              {:else}
                {@html col.renderValue ? col.renderValue(row) : col.value(row)}
              {/if}
            </td>
          {/each}
          {#if showExpandIcon}
            <td
              on:click={e => handleClickExpand(e, row)}
              class={asStringArray(["isClickable", classNameCellExpand])}
            >
              {row.$expanded ? iconExpand : iconExpanded}
            </td>
          {/if}
        </tr>
        {#if row.$expanded}
          <tr class={asStringArray(classNameRowExpanded)}
            ><td {colspan}>
              <slot name="expanded" {row} {n} />
            </td></tr
          >
        {/if}
      </slot>
    {/each}
  </tbody>
</table>

{#if usePagination && usePagination.bottom}
  <Pagination bind:pagination={pagination} bind:currentPage={currentPage}
    bind:showPageCount={showPageCount} bind:paginationOpts={paginationOpts} />
{/if}

<style>
  table {
    width: 100%;
  }
  .isSortable {
    cursor: pointer;
  }

  .isClickable {
    cursor: pointer;
  }

  tr th select {
    width: 100%;
  }
</style>
