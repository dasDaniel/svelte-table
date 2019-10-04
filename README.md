# svelte-table

A _relatively_ minimal svelte table example. Allows sorting and filtering based on column values.

## Sample Usage

First define some sample data, this can be used for any of the following mounting methods. Then define the columns to show in the table.

```js
// define some sample data...
const rows = [
  { id: 1, first_name: "Marilyn", last_name: "Monroe" },
  { id: 2, first_name: "Abraham", last_name: "Lincoln" },
  { id: 3, first_name: "Mother", last_name: "Teresa" },
  { id: 4, first_name: "John F.", last_name: "Kennedy" },
  { id: 5, first_name: "Martin Luther", last_name: "King" },
  { id: 6, first_name: "Nelson", last_name: "Mandela" },
  { id: 7, first_name: "Winston", last_name: "Churchill" },
  { id: 8, first_name: "Donald", last_name: "Trump" },
  { id: 9, first_name: "Bill", last_name: "Gates" },
  { id: 10, first_name: "Muhammad", last_name: "Ali" },
  { id: 11, first_name: "Mahatma", last_name: "Gandhi" },
  { id: 12, first_name: "Margaret", last_name: "Thatcher" },
  { id: 13, first_name: "Christopher", last_name: "Columbus" },
  { id: 14, first_name: "Charles", last_name: "Darwin" },
  { id: 15, first_name: "Elvis", last_name: "Presley" },
  { id: 16, first_name: "Albert", last_name: "Einstein" },
  { id: 17, first_name: "Paul", last_name: "McCartney" },
  { id: 18, first_name: "Queen", last_name: "Victoria" },
  { id: 19, first_name: "Pope", last_name: "Francis" }
  // etc...
];

// define columns
const columns = [
  {
    key: "id",
    title: "ID",
    value: v => v.id,
    sortable: true,
    filterOptions: rows => {
      // generate groupings of 0-10, 10-20 etc...
      let nums = {};
      rows.forEach(row => {
        let num = Math.floor(row.id / 10);
        if (nums[num] === undefined)
          nums[num] = { name: `${num * 10} to ${(num + 1) * 10}`, value: num };
      });
      // fix order
      nums = Object.entries(nums)
        .sort()
        .reduce((o, [k, v]) => ((o[k] = v), o), {});
      return Object.values(nums);
    },
    filterValue: v => Math.floor(v.id / 10),
    headerClass: "text-left"
  },
  {
    key: "first_name",
    title: "FIRST_NAME",
    value: v => v.first_name,
    sortable: true,
    filterOptions: rows => {
      // use first letter of first_name to generate filter
      let letrs = {};
      rows.forEach(row => {
        let letr = row.first_name.charAt(0);
        if (letrs[letr] === undefined)
          letrs[letr] = {
            name: `${letr.toUpperCase()}`,
            value: letr.toLowerCase()
          };
      });
      // fix order
      letrs = Object.entries(letrs)
        .sort()
        .reduce((o, [k, v]) => ((o[k] = v), o), {});
      return Object.values(letrs);
    },
    filterValue: v => v.first_name.charAt(0).toLowerCase()
  },
  {
    key: "last_name",
    title: "LAST_NAME",
    value: v => v.last_name,
    sortable: true,
    filterOptions: rows => {
      // use first letter of last_name to generate filter
      let letrs = {};
      rows.forEach(row => {
        let letr = row.last_name.charAt(0);
        if (letrs[letr] === undefined)
          letrs[letr] = {
            name: `${letr.toUpperCase()}`,
            value: letr.toLowerCase()
          };
      });
      // fix order
      letrs = Object.entries(letrs)
        .sort()
        .reduce((o, [k, v]) => ((o[k] = v), o), {});
      return Object.values(letrs);
    },
    filterValue: v => v.last_name.charAt(0).toLowerCase()
  }
];
```

### Usage: Raw svelte file

```html
<script>
  import SvelteTable from "SvelteTable.svelte";
</script>

<SvelteTable columns="{columns}" rows="{rows}"></SvelteTable>
```

### Usage: ES Module (mjs file) or CJS

```html
<script>
  import SvelteTable from "SvelteTable";
</script>

<SvelteTable columns="{columns}" rows="{rows}"></SvelteTable>
```

### Usage: iife (in some html page)

```html
<script src="iife/SvelteTable.js"></script>
<div id="my-table"></div>
<script>
  new SvelteTable({
    target: document.querySelector("#my-table"),
    props: { rows, columns }
  });
</script>
```


### Column array object values


| Option            | Type             | Description                                                                             |
| ----------------- | ---------------- | --------------------------------------------------------------------------------------- |
| `key`             | `String`         | Unque key identifying the colum                                                         |
| `title`           | `String`         | Title for header                                                                        |
| `value`           | `Function`       | table cell value. The function is passed row data                                       |
| `[sortable]`      | `Boolean`        | _optional_ Whether the table can be sorted on column                                    |
| `[filterOptions]` | `Array|Function` | _optional_ array of objects with `name` and `value`. Function is provided array of rows |
| `[filterValue]`   | `String`         | _optional_ value to filter on, usually same as value                                    |
| `[headerClass]`   | `String`         | _optional_ class to assign to header                                                    |
| `[class]`         | `String`         | _optional_ table cell class name                                                        |

## Install

```sh
npm install
```

## Build project

```sh
npm run build
```

