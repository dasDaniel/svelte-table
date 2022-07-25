<script>
  import SvelteTable from "../src/SvelteTable.svelte";
  // import SvelteTable from "svelte-table";
  import faker from "faker";
  faker.seed(5);

  let sortBy = "id";
  let sortOrder = 1;
  let iconAsc = "↑";
  let iconDesc = "↓";
  let selectedCols = ["id", "first_name", "last_name", "email"];
  let numRows = 10;
  let data = [];

  let generateData = () => {
    data = Array(numRows)
      .fill("")
      .map((n, i) => {
        let d = {
          id: i,
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
        };
        d.email =
          d.first_name[0].toLowerCase() +
          d.last_name.toLowerCase() +
          "@zipit.org.ca";
        return d;
      });
  };

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
      filterOptions: rows => {
        let letrs = {};
        rows.forEach(row => {
          let letr = row.first_name.charAt(0);
          if (letrs[letr] === undefined)
            letrs[letr] = {
              name: `${letr.toUpperCase()}`,
              value: letr.toLowerCase(),
            };
        });
        // fix order
        letrs = Object.entries(letrs)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(letrs);
      },
      filterValue: v => v.first_name.charAt(0).toLowerCase(),
    },
    last_name: {
      key: "last_name",
      title: "LAST NAME",
      value: v => v.last_name,
      sortable: true,
      filterOptions: rows => {
        let letrs = {};
        rows.forEach(row => {
          let letr = row.last_name.charAt(0);
          if (letrs[letr] === undefined)
            letrs[letr] = {
              name: `${letr.toUpperCase()}`,
              value: letr.toLowerCase(),
            };
        });
        // fix order
        letrs = Object.entries(letrs)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(letrs);
      },
      filterValue: v => v.last_name.charAt(0).toLowerCase(),
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
</script>

<div class="container">
  <h1>SvelteTable example4</h1>
  <div class="input-group pb-3">
    <button class="btn btn-primary" on:click={generateData}>
      Generate Data
    </button>
    <input bind:value={numRows} class="form-control" />

    <button
      class="btn btn-primary"
      on:click={() => {
        sortOrder = 1;
      }}
      disabled={sortOrder === 1}
      style="float:right;"
    >
      SORT {iconAsc}
    </button>
    <button
      class="btn btn-primary"
      on:click={() => {
        sortOrder = -1;
      }}
      disabled={sortOrder === -1}
      style="float:right;"
    >
      SORT {iconDesc}
    </button>
  </div>

  <div class="row">
    <SvelteTable
      columns={cols}
      rows={data}
      bind:sortBy
      bind:sortOrder
      classNameTable={["table table-striped"]}
      classNameThead={["table-primary"]}
      classNameSelect={["custom-select"]}
    />
  </div>
</div>
