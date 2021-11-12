<script>
  import SvelteTable from "../src/SvelteTable.svelte";
  // import SvelteTable from "svelte-table";
  import faker from "faker";
  faker.seed(5);

  let sortBy = "id";
  let sortOrder = 1;
  let iconAsc = "↑";
  let iconDesc = "↓";
  let selectedCols = ["id", "first_name", "last_name", "email", "ip_address"];

  const COLUMNS = {
    id: {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: true,
      filterOptions: rows => {
        let nums = {};
        rows.forEach(row => {
          let num = Math.floor(row.id / 10);
          if (nums[num] === undefined)
            nums[num] = {
              name: `${num * 10} to ${(num + 1) * 10}`,
              value: num,
            };
        });
        // fix order
        nums = Object.entries(nums)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(nums);
      },
      filterValue: v => Math.floor(v.id / 10),
      headerClass: "text-left",
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
    ip_address: {
      key: "ip_address",
      title: "IP ADDRESS",
      value: v => v.ip_address,
      sortable: true,
    },
  };

  $: cols = selectedCols.map(key => COLUMNS[key]);

  const numRows = 50;
  const data = Array(numRows)
    .fill("")
    .map((n, i) => {
      let d = {
        id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        ip_address:
          "192.168." +
          faker.random.number(128) +
          "." +
          faker.random.number(255),
      };
      d.email =
        d.first_name[0].toLowerCase() +
        d.last_name.toLowerCase() +
        "@zipit.org.ca";
      return d;
    });
</script>

<div>
  <h1>SvelteTable example 2</h1>
  <p>Custom header and row slots</p>
  <button
    on:click={() => {
      sortBy = "id";
    }}
    disabled={sortBy === "id"}
  >
    SORT BY ID
  </button>

  <button
    on:click={() => {
      sortBy = "first_name";
    }}
    disabled={sortBy === "first_name"}
  >
    SORT BY FIRST NAME
  </button>

  <button
    on:click={() => {
      sortBy = "last_name";
    }}
    disabled={sortBy === "last_name"}
  >
    SORT BY LAST NAME
  </button>

  <button
    on:click={() => {
      sortOrder = 1;
    }}
    disabled={sortOrder === 1}
    style="float:right;"
  >
    SORT {iconAsc}
  </button>
  <button
    on:click={() => {
      sortOrder = -1;
    }}
    disabled={sortOrder === -1}
    style="float:right;"
  >
    SORT {iconDesc}
  </button>

  <SvelteTable
    columns={cols}
    rows={data}
    bind:sortBy
    bind:sortOrder
    classNameTable={["table table-dark"]}
    classNameThead={["thead-light"]}
    classNameSelect={["custom-select"]}
  >
    <!--
        NOTE: defining the header slot overrides rendering and on:click functionality
      -->
    <tr slot="header" let:sortOrder={refSortOrder} let:sortBy={refSortBy}>
      <th>
        {refSortBy === "id" ? (refSortOrder > 0 ? iconAsc : iconDesc) : ""} ID
      </th>
      <th>
        {refSortBy === "first_name"
          ? refSortOrder > 0
            ? iconAsc
            : iconDesc
          : ""}
        FIRST NAME
      </th>
      <th>
        {refSortBy === "last_name"
          ? refSortOrder > 0
            ? iconAsc
            : iconDesc
          : ""}
        LAST NAME
      </th>
      <th>EMAIL</th>
      <th>IP ADDRESS</th>
    </tr>

    <!--
        NOTE: defining the row slot overrides default row rendering functionality
      -->
    <tr slot="row" let:row let:n>
      <td>{row.id}</td>
      <td>{row.first_name}</td>
      <td>{row.last_name}</td>
      <td>{row.email}</td>
      <td>{row.ip_address}</td>
    </tr>
  </SvelteTable>
</div>

<style></style>
