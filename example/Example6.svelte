<script>
  import SvelteTable from "../src/SvelteTable.svelte";
  import ContactButtonComponent from "./example6/ContactButtonComponent.svelte";
  import HelpButtonComponent from "./example6/HelpButtonComponent.svelte";
  // import SvelteTable from "svelte-table";
  import faker from "faker";
  faker.seed(15);

  const onContactButtonClick = row =>
    alert(`Contacted ${row.first_name} ${row.last_name}`);

  const colums = [
    {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: false,
      headerClass: "text-left",
    },
    {
      key: "first_name",
      title: "FIRST NAME",
      value: v => v.first_name,
      sortable: true,
      searchValue: v => v.first_name,
    },
    {
      key: "last_name",
      title: "LAST NAME",
      value: v => v.last_name,
      sortable: true,
      searchValue: v => v.last_name,
    },
    {
      key: "email",
      title: "EMAIL",
      value: v => v.email,
      sortable: true,
      class: "text-center",
    },
    {
      key: "contact",
      title: "",
      sortable: false,
      renderComponent: {
        component: ContactButtonComponent,
        props: { onContactButtonClick },
      },
    },
    {
      key: "help",
      title: "",
      sortable: false,
      renderComponent: HelpButtonComponent,
    },
  ];

  const numRows = 50;
  const data = Array(numRows)
    .fill("")
    .map((n, i) => {
      let d = {
        id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        pet: faker.random.number(1) ? "Dog" : "Cat",
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

<SvelteTable columns={colums} rows={data} />

<style>
  :global(.text-center) {
    text-align: center;
  }
  :global(.text-left) {
    text-align: left;
  }
</style>
