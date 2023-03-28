<script>
  import SvelteTable from "../src/SvelteTable.svelte";
  // import SvelteTable from "svelte-table";
  import faker from "faker";
  import { generateFilter } from "./helper";

  let sortBy = "id";
  let sortOrder = 1;
  let iconAsc = "↑";
  let iconDesc = "↓";

  $: selectedCols = [
    "id",
    "first_name",
    "last_name",
    "email",
    "mobile",
    "ip_address",
  ];

  $: numRows = 50;
  $: seed = 5;
  $: data = [];
  $: cols = selectedCols.map(key => Object.assign(COLUMNS[key]));
  $: {
    if (numRows !== NaN && seed !== NaN) {
      generateData();
    }
  }
  generateData();

  function generateData() {
    faker.seed(seed);
    data = Array(numRows)
      .fill("")
      .map((n, i) => {
        let d = {
          id: i,
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          mobile: faker.random.number(1) ? "Android" : "iPhone",
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
  }

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
    mobile: {
      key: "mobile",
      title: "MOBILE",
      value: v => v.mobile,
      renderValue: v => {
        const classNames = [`g_${v.mobile.toLowerCase()}`];
        let icon = v.mobile.toLowerCase() === "android" ? "🍅" : "";
        icon = v.mobile.toLowerCase() === "iphone" ? "🍏" : icon;
        return `<span class="${classNames.join(" ")}">${icon} ${
          v.mobile
        }</span>`;
      },
      sortable: true,
      filterOptions: ["Android", "iPhone"],
    },
    ip_address: {
      key: "ip_address",
      title: "IP ADDRESS",
      value: v => v.ip_address,
      sortable: true,
      filterOptions: generateFilter("ip_address"),
    },
  };
</script>

<div class="p-4">
  <h1 class="title is-1 mt-2">SvelteTable example 3</h1>

  <p />

  <div class="my-6">
    <button
      class="button is-primary"
      on:click={() => {
        sortBy = "id";
      }}
      disabled={sortBy === "id"}
    >
      SORT BY ID
    </button>

    <button
      class="button is-primary"
      on:click={() => {
        sortBy = "first_name";
      }}
      disabled={sortBy === "first_name"}
    >
      SORT BY FIRST NAME
    </button>

    <button
      class="button is-primary"
      on:click={() => {
        sortBy = "last_name";
      }}
      disabled={sortBy === "last_name"}
    >
      SORT BY LAST NAME
    </button>

    <button
      class="button is-primary"
      on:click={() => {
        if (selectedCols.includes("ip_address")) {
          selectedCols = ["id", "first_name", "last_name", "email", "mobile"];
        } else {
          selectedCols = [
            "id",
            "first_name",
            "last_name",
            "email",
            "mobile",
            "ip_address",
          ];
        }
      }}
    >
      {!selectedCols.includes("ip_address") ? "SHOW" : "HIDE"} IP ADDRESS
    </button>

    <button
      class="button is-info"
      on:click={() => {
        sortOrder = 1;
      }}
      disabled={sortOrder === 1}
      style="float:right;"
    >
      SORT {iconAsc}
    </button>

    <button
      class="button is-info"
      on:click={() => {
        sortOrder = -1;
      }}
      disabled={sortOrder === -1}
      style="float:right;"
    >
      SORT {iconDesc}
    </button>
  </div>

  <div class="columns">
    <div class="column is-half">
      <label>
        numRows: {numRows}
        <input type="range" bind:value={numRows} class="input" />
      </label>
    </div>
    <div class="column is-half">
      <label>
        seed: {seed}
        <input type="range" bind:value={seed} class="input" />
      </label>
    </div>
  </div>

  <SvelteTable
    columns={cols}
    rows={data}
    bind:sortBy
    bind:sortOrder
    sortOrders={[-1, 1, 0]}
    iconSortable="<span class='has-text-grey-lighter'>▲▼</span>"
    classNameTable={["table mt-6 is-bordered"]}
    classNameThead={["thead"]}
    classNameSelect={["select"]}
    on:clickCol={e => {
      console.log("clickCol:", e);
    }}
    on:clickRow={e => {
      console.log("clickRow:", e);
    }}
    on:clickCell={e => {
      console.log("clickCell:", e);
    }}
  />
  {selectedCols}
</div>

<style>
  div :global(.m_android) {
    color: rgb(123, 230, 101);
  }
  div :global(.m_iphone) {
    color: rgb(155, 164, 173);
  }
  div :global(.text-center) {
    text-align: center;
  }
  div :global(.text-left) {
    text-align: left;
  }
</style>
