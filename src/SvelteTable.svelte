<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let classNameCell = '';
    export let classNameRow = '';
    export let classNameSelect = '';
    export let classNameTable = '';
    export let classNameTbody = '';
    export let classNameThead = '';
    export let columns;
    export let iconAsc = '▲';
    export let iconDesc = '▼';
    export let rows;
    export let sortBy = "";
    export let sortOrder = 1;

    let columnByKey = {};
    let filterSettings = {};
    let filterValues = {};
    let showFilterHeader = columns.some(c => c.filterOptions !== undefined);
    let sortFunction = () => "";

    // Allow dynamic addition of columns and sorting/filtering of them
    $: columns.forEach((col) => {
        columnByKey[col.key] = col;
    });

    $: c_rows                   = rows
        .filter((row) => {
            const result            = Object.keys(filterSettings).every((f) => {
                let ret = (
                    filterSettings[f] === undefined 
                    || filterSettings[f] === (
                        // default to value() if filterValue() not provided in col
                        typeof columnByKey[f].filterValue === 'function' ? 
                            columnByKey[f].filterValue(row)
                            : columnByKey[f].value(row)
                    )
                );

                return ret;
            });

            return result;
        })
        .map((row) => (Object.assign({}, row, { $sortOn: sortFunction(row) } )))
        .sort((a, b) => {
            if (a.$sortOn > b.$sortOn) return sortOrder;
            else if (a.$sortOn < b.$sortOn) return -sortOrder;
            return 0;
        });

    const asStringArray = (v) => [].concat(v).filter(v => typeof v === 'string' && v !== "").join(' ');

    const calculateFilterValues = () => {
        filterValues = {};

        columns.forEach((column) => {
            if (typeof column.filterOptions === "function") {
                filterValues[column.key] = column.filterOptions(rows);
            }
            else if (Array.isArray(column.filterOptions)) {
                // if array of strings is provided, use it for name and value
                filterValues[column.key] = column.filterOptions.map((val) => ({ name: val, value: val }));
            }
        });
    };


    $: {
        let col = columnByKey[sortBy];

        console.log("col is:", col);

        if (col !== undefined && col.sortable === true && typeof col.value === "function") {
            sortFunction = (row) => col.value(row);
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
            sortOrder = sortOrder === 1 ? -1 : 1;
        } else {
            sortOrder = 1;
        }
    }

    const updateSortBy = (colKey) => {
        sortBy = colKey;
    }
    
    const handleClickCol = (event, col) => {
        updateSortOrder(col.key);
        updateSortBy(col.key);

        dispatch('clickCol', { event, col, key: col.key });
    }
    
    const handleClickRow = (event, row) => dispatch('clickRow', { event, row });
    const handleClickCell = (event, row, key) => dispatch('clickCell', { event, row, key });

</script>

<style>
    table {
        /* Layout Properties */
        width:          100%;
    }

    .isSortable {
        /* UI Properties */
        cursor:         pointer;
    }

    tr th select {
        /* Layout Properties */
        width:          100%;
    }
</style>

<table class={asStringArray(classNameTable)}>
    <thead class={asStringArray(classNameThead)}>
        {#if showFilterHeader}
            <tr>
                {#each columns as col}
                    <th>
                        {#if filterValues[col.key] !== undefined}
                            <select bind:value={filterSettings[col.key]} class={asStringArray(classNameSelect)}>
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
                        on:click={col.sortable ? (e) => handleClickCol(e, col) : undefined}
                        class={asStringArray([col.sortable ? 'isSortable' : null, col.headerClass])}
                    >
                        {col.title}
                        {#if sortBy === col.key}
                            {sortOrder === 1 ? iconAsc : iconDesc}
                        {/if}
                    </th>
                {/each}
            </tr>
        </slot>
    </thead>

    <tbody class={asStringArray(classNameTbody)}>
        {#each c_rows as row, n}
            <slot name="row" row={row} n={n}>
                <tr on:click={(e)=> handleClickRow(e, row)} class={asStringArray(classNameRow)}>
                    {#each columns as col}
                        <td
                            on:click={(e) => handleClickCell(e, row, col.key)}
                            class={asStringArray([col.class, classNameCell])}
                        >
                            {@html col.renderValue ? col.renderValue(row) : col.value(row)}
                        </td>
                    {/each}
                </tr>
            </slot>
        {/each}
    </tbody>
</table>
