<script lang="ts">
  import SvelteTable from "../src/SvelteTable.svelte";
  import type { RowClassName, TableColumns } from "../src/types";
  globalThis.faker.seed(5);

  type RowData = {
    id: number;
    first_name: string;
    last_name: string;
    county: string;
    state: string;
    country: string;
    email: string;
  };

  const classNameRow: RowClassName<RowData> = (v, rowIndex) =>
    rowIndex % 2 == 0 ? null : "row-odd";

  const generateData = numRows => {
    return Array(numRows)
      .fill("")
      .map((n, i) => {
        let d = {
          id: i,
          first_name: globalThis.faker.name.firstName() + "",
          last_name: globalThis.faker.name.lastName() + "",
          county: globalThis.faker.address.county() + "",
          state: globalThis.faker.address.state() + "",
          country: globalThis.faker.address.country() + "",
          email: "",
        } as RowData;

        // update email
        d.email =
          d.first_name[0].toLowerCase() +
          d.last_name.toLowerCase() +
          "@zipit.org.ca";
        return d;
      });
  };
  const data1 = generateData(9);
  const data2 = generateData(9);

  const cols1: TableColumns<RowData> = [
    {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: true,
      class: (v, r, c) => (v.id % 2 == 1 ? null : "cell"),
    },
    {
      key: "first_name",
      title: "FIRST NAME",
      value: v => v.first_name,
      sortable: true,
    },
    {
      key: "last_name",
      title: "LAST NAME",
      value: v => v.last_name,
      sortable: true,
    },
    {
      key: "email",
      title: "EMAIL (rowIndex)",
      value: v => v.email,
      sortable: true,
      class: (v, r, c) => (r % 2 == 1 ? null : "cell"),
    },
  ];

  const cols2: TableColumns<RowData> = [
    {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: true,
    },
    {
      key: "first_name",
      title: "FIRST NAME",
      value: v => v.first_name,
      sortable: true,
    },
    {
      key: "last_name",
      title: "LAST NAME",
      value: v => v.last_name,
      sortable: true,
    },
    {
      key: "email",
      title: "EMAIL (rowIndex)",
      value: v => v.email,
      sortable: true,
    },
  ];
</script>

<div class="container">
  <h1>SvelteTable example 8 ~ dynamic column classes</h1>

  <div class="row">
    <SvelteTable
      columns={cols1}
      rows={data1}
      classNameTable="table table1"
      classNameThead="table-primary"
      sortBy="first_name"
    />
  </div>
</div>

<div class="container">
  <h1>SvelteTable example 8 ~ dynamic row class</h1>

  <div class="row">
    <SvelteTable
      columns={cols2}
      rows={data2}
      classNameTable="table table2"
      classNameThead="table-primary"
      {classNameRow}
    />
  </div>
</div>

<style>
  :global(.table1 td.cell) {
    background: rgba(65, 255, 65, 0.178);
  }

  :global(.table2 tr.row-odd) {
    background: rgba(0, 0, 0, 0.05);
  }
</style>
