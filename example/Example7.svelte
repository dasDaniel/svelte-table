<script>
  import SvelteTable from "../src/index.js";
  import faker from "faker";
  faker.seed(5);

  let sortBy = "id";
  let sortOrder = 1;
  let selectedCols = ["id", "first_name", "last_name", "email"];
  let data1 = [];
  let data2 = [];
  let data3 = [];

  let expanded1 = "";
  let expandedCache = "";
  let expandedArr = [4, 3, 1];

  $: {
    // 2-way binding setup between input and table expanded items
    if (expandedCache === expanded1) {
      // update string
      expanded1 = expandedArr.join(",");
    } else {
      // update array
      expandedArr = expanded1.split(",").map(n => parseInt(n));
    }
    expandedCache = expanded1;
  }

  let generateData = numRows => {
    return Array(numRows)
      .fill("")
      .map((n, i) => {
        let d = {
          id: i,
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          county: faker.address.county(),
          state: faker.address.state(),
          country: faker.address.country(),
        };
        d.email =
          d.first_name[0].toLowerCase() +
          d.last_name.toLowerCase() +
          "@zipit.org.ca";
        return d;
      });
  };
  data1 = generateData(5);
  data2 = generateData(5);
  data3 = generateData(5);

  let expanded3 = [data3[2].first_name, data3[4].first_name];

  const COLUMNS = {
    id: {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: true,
    },
    first_name: {
      key: "first_name",
      title: "FIRST NAME",
      value: v => v.first_name,
      sortable: true,
    },
    last_name: {
      key: "last_name",
      title: "LAST NAME",
      value: v => v.last_name,
      sortable: true,
    },
    email: {
      key: "email",
      title: "EMAIL",
      value: v => v.email,
      sortable: true,
      class: "text-center",
    },
  };

  $: cols = selectedCols.map(key => COLUMNS[key]);

  function handleRowClick(event) {
    // manually toggle expanded items
    const row = event.detail.row;
    if (!row.$expanded) {
      expandedArr = [...expandedArr, row.id];
    } else {
      expandedArr = expandedArr.filter(id => id !== row.id);
    }
  }

  function handleExpand(event) {
    const row = event.detail.row;
    const operation = row.$expanded ? "open" : "close";
    console.log(`${operation} ${row.first_name} ${row.last_name}`);
  }
</script>

<div class="container">
  <h1>SvelteTable example 7 ~ expand</h1>

  <h2>Expand row example 1</h2>

  <p>
    Uses manual override of selected row ids through input or clicking on row
  </p>

  <div class="input-group pb-3">
    <input bind:value={expanded1} class="form-control" />
  </div>

  <div class="row">
    <SvelteTable
      columns={cols}
      rows={data1}
      bind:sortBy
      bind:sortOrder
      classNameTable="table"
      classNameThead="table-primary"
      classNameRow="cursor-pointer"
      classNameSelect="custom-select"
      classNameRowExpanded="row-expanded"
      classNameExpandedContent="expanded-content"
      bind:expanded={expandedArr}
      expandRowKey="id"
      on:clickRow={handleRowClick}
    >
      <svelte:fragment slot="expanded" let:row>
        {row.county}, {row.state}<br />
        {row.country}
      </svelte:fragment>
    </SvelteTable>
  </div>

  <div class="row">
    <h2>Expand row example 2</h2>

    <p>
      Only 1 row can be expanded at a time<br />
      Console logs selection change
    </p>

    <SvelteTable
      columns={cols}
      rows={data2}
      classNameTable="table"
      classNameThead="table-info"
      showExpandIcon={true}
      expandSingle={true}
      expandRowKey="id"
      on:clickExpand={handleExpand}
    >
      <div slot="expanded" let:row class="text-center">
        {row.county}, {row.state}<br />
        {row.country}
      </div>
    </SvelteTable>
  </div>

  <div class="row">
    <h2>Expand row example 3</h2>

    <p>uses name as key and custom expand/collapse icons</p>

    Using first_name as keys:
    <pre>{expanded3.join(', ')}</pre>
    <SvelteTable
      columns={cols}
      rows={data3}
      classNameTable="table"
      classNameThead="table-secondary"
      showExpandIcon={true}
      expandSingle={false}
      bind:expanded={expanded3}
      expandRowKey="first_name"
      iconExpand="⌄"
      iconExpanded="⌃"
    >
      <svelte:fragment slot="expanded" let:row>
        {row.county}, {row.state}<br />
        {row.country}
      </svelte:fragment>
    </SvelteTable>
  </div>
</div>

<style>
  :global(.row-expanded) {
    background-color: #333;
    color: #fff;
    cursor: crosshair;
  }
  :global(.expanded-content) {
    background-color: #ccc;
  }
</style>
