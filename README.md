# svelte-table

A _relatively_ minimal svelte table example. Allows sorting and filtering based on column values.

## Example

[github pages IIFE example](https://dasdaniel.github.io/svelte-table/)

## Install

```sh
npm install -save svelte-table
```

# Usage

The package includes exports for raw svelte, ES Module(.mjs)) and CJS (.js) exports. Your bundler will likely know which one to pick by using `import SvelteTable from "svelte-table"`

```html
<script>
  import SvelteTable from "svelte-table";
  const rows = [
    /** data (example below) */
  ];
  const columns = [
    /** columns config (example below) */
  ];
</script>

<SvelteTable columns="{columns}" rows="{rows}"></SvelteTable>
```

An iife version is also available in the `/dist/iife` folder. This allows for easy run-time use, such as a direct uncompiled dependecy for a use outside of a svelte project.

```html
<script src="iife/SvelteTable.js"></script>
<div id="my-table"></div>
<script>
  var rows = [
    /** data (example below) */
  ];
  var columns = [
    /** columns config (example below) */
  ];
  new SvelteTable({
    target: document.querySelector("#my-table"),
    props: { rows, columns }
  });
</script>
```

## Sample Data and config

```js
// define some sample data...
const rows = [
  { id: 1, first_name: "Marilyn", last_name: "Monroe", gender: "female" },
  { id: 2, first_name: "Abraham", last_name: "Lincoln", gender: "male" },
  { id: 3, first_name: "Mother", last_name: "Teresa", gender: "female" },
  { id: 4, first_name: "John F.", last_name: "Kennedy", gender: "male" },
  { id: 5, first_name: "Martin Luther", last_name: "King", gender: "male" },
  { id: 6, first_name: "Nelson", last_name: "Mandela", gender: "male" },
  { id: 7, first_name: "Winston", last_name: "Churchill", gender: "male" },
  { id: 8, first_name: "George", last_name: "Soros", gender: "male" },
  { id: 9, first_name: "Bill", last_name: "Gates", gender: "male" },
  { id: 10, first_name: "Muhammad", last_name: "Ali", gender: "male" },
  { id: 11, first_name: "Mahatma", last_name: "Gandhi", gender: "male" },
  { id: 12, first_name: "Margaret", last_name: "Thatcher", gender: "female" },
  { id: 13, first_name: "Christopher", last_name: "Columbus", gender: "male" },
  { id: 14, first_name: "Charles", last_name: "Darwin", gender: "male" },
  { id: 15, first_name: "Elvis", last_name: "Presley", gender: "male" },
  { id: 16, first_name: "Albert", last_name: "Einstein", gender: "male" },
  { id: 17, first_name: "Paul", last_name: "McCartney", gender: "male" },
  { id: 18, first_name: "Queen", last_name: "Victoria", gender: "female" },
  { id: 19, first_name: "Pope", last_name: "Francis", gender: "male" }
  // etc...
];

// define column configs
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
  },
  {
    key: "gender",
    title: "GENDER",
    value: v => v.gender,
    renderValue: v => v.gender.charAt(0).toUpperCase() + v.gender.substring(1), // capitalize
    sortable: true,
    filterOptions: ["male", "female"] // provide array
  }
];
```

## Props

| Option            | Type         | Description                                    |
| ----------------- | ------------ | ---------------------------------------------- |
| `columns`         | Object[]     | column config (details below)                  |
| `rows`            | Object[]     | row (data) array                               |
| `sortBy`          | String       | ‡ Sorting key                                  |
| `sortOrder`       | Number       | ‡ `1` = Ascending, `-1` Descending             |
| `iconAsc`         | String       | ascii string for ascending ordering character  |
| `iconDesc`        | String       | ascii string for descending ordering character |
| `clickCol`        | function     | event listener/callback                        |
| `clickRow`        | function     | event listener/callback                        |
| `clickCell`       | function     | event listener/callback                        |
| `classNameTable`  | String/Array | _optional_ class name(s) for table element     |
| `classNameThead`  | String/Array | _optional_ class name(s) for thead element     |
| `classNameTbody`  | String/Array | _optional_ class name(s) for tbody element     |
| `classNameSelect` | String/Array | _optional_ class name(s) for select elements   |
| `classNameRow`    | String/Array | _optional_ class name(s) for row elements      |
| `classNameCell`   | String/Array | _optional_ class name(s) for cell elements     |

### Events

Events pass a CustomEvent object with the following params in the `detail` object

- _clickCol_: `event`, `col`, `key`
- _clickRow_: `event`, `row`
- _clickCell_: `event`, `row`, `key`

_‡_ field allows 2-way binding

## Column array object values

| Option              | Type           | Description                                                                                                   |
| ------------------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| `key`               | String         | Unique key identifying the column                                                                             |
| `title`             | String         | Title for header                                                                                              |
| `value`             | Function       | table cell value. The function is passed row data                                                             |
| `[class]`           | String         | _optional_ table cell class name                                                                              |
| `[sortable]`        | Boolean        | _optional_ Whether the table can be sorted on column                                                          |
| `[searchValue]`     | Function       | _optional_ search value function. function is passed row data.                                                |
| `[filterOptions]`   | Array/Function | _optional_ array of objects with `name` and `value`. Function is provided array of rows                       |
| `[filterValue]`     | String         | _optional_ value to filter on, usually same as value                                                          |
| `[headerClass]`     | String         | _optional_ class to assign to header                                                                          |
| `[renderValue]`     | Function       | _optional_ render function for rendering html content                                                         |
| `[renderComponent]` | Component      | _optional_ pass a Svelte component, component will receive `row` and `col` variables (replaces `renderValue`) |

### renderComponent

Defining a component can be done dirrectly by passing the component as a value

```js
[
  {
    key: "myColumn",
    //...
    renderComponent: myComponent
  }
];
```

Or, if props need to be passed, an object with `component` and `props` can be passed.

```js
[
  {
    key: "myColumn",
    //...
    renderComponent: {
      component: myComponent,
      props: {
        myProp: "someValue"
      }
    }
  }
];
```


## Slots

| Option   | Description                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------- |
| `header` | slot for rendering the `tr` and `th` content. This will replace `title` in the header          |
| `row`    | slot for rendering the `tr` and `td` content. This will replace the rendering of `renderValue` |
