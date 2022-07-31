# svelte-table

A _relatively_ minimal table component. Allows sorting and filtering based on column values, and row selection/expanding.

## Example

[github pages IIFE example](https://dasdaniel.github.io/svelte-table/)

## Install

```sh
npm install -save svelte-table
```

## Usage

The package includes exports for raw svelte, ES Module(.mjs) and CJS (.js) exports. Your bundler will likely know which one to pick by using `import SvelteTable from "svelte-table"`

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

An iife version is also available in the `/dist/iife` folder. This allows for easy run-time use, such as a direct uncompiled dependency for a use outside of a svelte project.

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
    props: { rows, columns },
  });
</script>
```

## Sample Data and config

```js
// define some sample data...
const rows = [
  { id: 1, first_name: "Marilyn", last_name: "Monroe", pet: "dog" },
  { id: 2, first_name: "Abraham", last_name: "Lincoln", pet: "dog" },
  { id: 3, first_name: "Mother", last_name: "Teresa", pet: "" },
  { id: 4, first_name: "John F.", last_name: "Kennedy", pet: "dog" },
  { id: 5, first_name: "Martin Luther", last_name: "King", pet: "dog" },
  { id: 6, first_name: "Nelson", last_name: "Mandela", pet: "cat" },
  { id: 7, first_name: "Winston", last_name: "Churchill", pet: "cat" },
  { id: 8, first_name: "George", last_name: "Soros", pet: "bird" },
  { id: 9, first_name: "Bill", last_name: "Gates", pet: "cat" },
  { id: 10, first_name: "Muhammad", last_name: "Ali", pet: "dog" },
  { id: 11, first_name: "Mahatma", last_name: "Gandhi", pet: "bird" },
  { id: 12, first_name: "Margaret", last_name: "Thatcher", pet: "cat" },
  { id: 13, first_name: "Christopher", last_name: "Columbus", pet: "dog" },
  { id: 14, first_name: "Charles", last_name: "Darwin", pet: "dog" },
  { id: 15, first_name: "Elvis", last_name: "Presley", pet: "dog" },
  { id: 16, first_name: "Albert", last_name: "Einstein", pet: "dog" },
  { id: 17, first_name: "Paul", last_name: "McCartney", pet: "cat" },
  { id: 18, first_name: "Queen", last_name: "Victoria", pet: "dog" },
  { id: 19, first_name: "Pope", last_name: "Francis", pet: "cat" },
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
    headerClass: "text-left",
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
  {
    key: "pet",
    title: "Pet",
    value: v => v.pet,
    renderValue: v => v.pet.charAt(0).toUpperCase() + v.pet.substring(1), // capitalize
    sortable: true,
    filterOptions: ["bird", "cat", "dog"], // provide array
  },
];
```

## Props

| Option                     | Type            | Description                                                             |
| -------------------------- | --------------- | ----------------------------------------------------------------------- |
| `columns`                  | Object[]        | column config (details below)                                           |
| `rows`                     | Object[]        | row (data) array                                                        |
| `sortBy`                   | String          | ‡ Sorting key                                                           |
| `sortOrder`                | Number          | ‡ `1` = Ascending, `-1` Descending, `0` no filtering                    |
| `sortOrders`               | Number[]        | availability of order options                                           |
| `iconAsc`                  | String          | (_html_) override ascending order indication                            |
| `iconDesc`                 | String          | (_html_) override descending order indication                           |
| `iconFilterable`           | String          | (_html_) override filterable column indication                          |
| `iconExpand`               | String          | row collapsed indicator/button                                          |
| `iconExpanded`             | String          | row expanded indicator/button                                           |
| `clickCol`                 | function        | event listener/callback                                                 |
| `clickRow`                 | function        | event listener/callback                                                 |
| `clickCell`                | function        | event listener/callback                                                 |
| `clickExpand`              | function        | event listener/callback                                                 |
| `classNameTable`           | String/Array    | _optional_ class name(s) for table element                              |
| `classNameThead`           | String/Array    | _optional_ class name(s) for thead element                              |
| `classNameTbody`           | String/Array    | _optional_ class name(s) for tbody element                              |
| `classNameSelect`          | String/Array    | _optional_ class name(s) for filter select elements                     |
| `classNameInput`           | String/Array    | _optional_ class name(s) for search input elements                      |
| `classNameRow`             | String/function | _optional_ class name(s) for row elements. Supports passing function    |
| `classNameRowExpanded`     | String/Array    | _optional_ class name(s) for expanded row                               |
| `classNameExpandedContent` | String/Array    | _optional_ class name(s) for expanded row content                       |
| `classNameRowSelected`     | String/Array    | _optional_ class name(s) for selected row                               |
| `classNameCell`            | String/Array    | _optional_ class name(s) for cell elements                              |
| `classNameCellExpand`      | String/Array    | _optional_ class name(s) for cell with expand icon                      |
| `expanded`                 | any[]           | ‡ _optional_ array of key values of expanded rows                       |
| `expandRowKey`             | string          | _optional_ **deprecated** use `rowKey`                                  |
| `rowKey`                   | string          | _optional_ key for expanded or selected row (use unique values like id) |
| `expandSingle`             | Boolean         | _optional_ default: `false` allow only one row to be selected           |
| `selected`                 | any[]           | ‡ _optional_ array of key values of selected rows                       |
| `selectSingle`             | Boolean         | _optional_ default: `false` allow only one row to be selected           |
| `selectOnClick`            | Boolean         | _optional_ default: `false` will clicking on row will update selection  |
| `filterSelections`         | Object[]        | ‡ _optional_ search or filter selection                                 |
| `showExpandIcon`           | Boolean         | should a expand column be visible                                       |

_‡_ field allows 2-way binding

### Events

Events pass a CustomEvent object with the following params in the `detail` object

- _clickCol_: `event`, `col`, `key`
- _clickRow_: `event`, `row`
- _clickCell_: `event`, `row`, `key`
- _clickExpand_: `event`, `row`

### Expanding Rows

- Row expanding is tracked using the `expanded` property. (supports 2-way binding)
- The keys are defined using the `rowKey` property (previously `expandRowKey` which is getting deprecated). It is recommended to use a key that is unique to each row like a dedicated id or key field, to prevent conflict.
- The content for the field is passed through the `expanded` slot.
- The expanding can be managed manually or by using the built-in column using `showExpandIcon` property
- Expand events can be listened to using `on:clickExpand` which will include the `row` object in the `event.detail` object.
- `expandSingle` can be set to true to only allow a single column open at a time
- `expandSingle` does not inforce single row expansion when multiple keys are is passed to `expanded`
- Row expanded status is available through the `$expanded` property of the row, but is consdered an internal and may be removed

Example:

```html
<div class="row">
  <SvelteTable
    columns="{cols}"
    rows="{data}"
    showExpandIcon="{true}"
    expandSingle="{true}"
    rowKey="id"
  >
    <svelte:fragment slot="expanded" let:row>{row.detail}</svelte:fragment>
  </SvelteTable>
</div>
```

### Selecting Rows

- By default, selection functionality is disabled, enable through `selectOnClick`
- Row selection is tracked by `selection` property and supports 2-way binding
- Selection happens when user clicks on row
- Use `classNameRowSelected` to assign class to a selected row
- Selection is tracked using the key defined by the `rowKey` property
- The selection prop is an array because it supports both single and multiple selections
- Multiple vs. single selection is handled through `selectSingle`
- `selectSingle` does not enforce single row selection when multiple keys are is passed to `selection`
- Row selection status is available through the `$selected` property of the row, but is considered an internal and may be removed

### Filtering order

Providing `sortOrders` specifies the column filtering orders. `sortOrders = [1, -1, 0]` indicates that the row will be sorted ascending (`1`), then descending (`-1`), then going back without any filter (`0`),

### `filterSelections`

Allows getting and setting the search or filter value. The `filterSelections` will update as the filter and search selection changes.
Inside the object keys (matching row keys) will be used to get/set the filter and search values. Setting key to `undefined` or deleting
it will remove filter or search setting.

example: (will preset column with key `first_name` to `a`)

```html
<script>
  const selection = { first_name: "A" };
</script>
<SvelteTable
  columns="{columns}"
  rows="{data}"
  bind:filterSelections="{selection}"
/>
```

## Column array object values

| Option                | Type           | Description                                                                                                   |
| --------------------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| `key`                 | String         | Unique key identifying the column                                                                             |
| `title`               | String         | Title for header                                                                                              |
| `value`               | Function       | table cell value. The function is passed row data                                                             |
| `[class]`             | String         | _optional_ table cell class name                                                                              |
| `[sortable]`          | Boolean        | _optional_ Whether the table can be sorted on column                                                          |
| `[searchValue]`       | Function       | _optional_ search value function. function is passed row data.                                                |
| `[filterOptions]`     | Array/Function | _optional_ array of objects with `name` and `value`. Function is provided array of rows                       |
| `[filterValue]`       | String         | _optional_ value to filter on, usually same as value                                                          |
| `[headerClass]`       | String         | _optional_ class to assign to header element                                                                  |
| `[headerFilterClass]` | String         | _optional_ class to assign to search/filter header element                                                    |
| `[renderValue]`       | Function       | _optional_ render function for rendering html content                                                         |
| `[renderComponent]`   | Component      | _optional_ pass a Svelte component, component will receive `row` and `col` variables (replaces `renderValue`) |

### renderComponent

Defining a component can be done directly by passing the component as a value

```js
[
  {
    key: "myColumn",
    //...
    renderComponent: myComponent,
  },
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
        myProp: "someValue",
      },
    },
  },
];
```

## Slots

| Option     | Description                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------- |
| `header`   | slot for rendering the `tr` and `th` content. This will replace `title` in the header          |
| `row`      | slot for rendering the `tr` and `td` content. This will replace the rendering of `renderValue` |
| `expanded` | slot for rendering the content of the expanded row                                             |
