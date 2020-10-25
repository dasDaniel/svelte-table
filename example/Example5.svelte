<script>
  import SvelteTable from "../src/SvelteTable.svelte";
  // import SvelteTable from "svelte-table";
  import faker from "faker";
  faker.seed(15);

  let sortBy = "id";
  let sortOrder = 1;
  let iconAsc = "↑";
  let iconDesc = "↓";

  const colums = [
    {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: false,
      headerClass: "text-left"
    },
    {
      key: "first_name",
      title: "FIRST NAME",
      value: v => v.first_name,
      sortable: true,
      searchValue: v => v.first_name
    },
    {
      key: "last_name",
      title: "LAST NAME",
      value: v => v.last_name,
      sortable: true,
      searchValue: v => v.last_name
    },
    {
      key: "email",
      title: "EMAIL",
      value: v => v.email,
      sortable: true,
      class: "text-center"
    },
    {
      key: "gender",
      title: "GENDER",
      value: v => v.gender,
      renderValue: v => {
        const classNames = [`g_${v.gender.toLowerCase()}`];
        let icon = v.gender.toLowerCase() === "female" ? "&female;" : "";
        icon = v.gender.toLowerCase() === "male" ? "&male;" : icon;
        return `<span class="${classNames.join(" ")}">${icon} ${
          v.gender
        }</span>`;
      },
      sortable: true,
      filterOptions: ["Male", "Female"]
    },
    {
      key: "ip_address",
      title: "IP ADDRESS",
      value: v => v.ip_address,
      sortable: true
    }
  ];

  const numRows = 50;
  const data = Array(numRows)
    .fill("")
    .map((n, i) => {
      let d = {
        id: i,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        gender: faker.random.number(1) ? "Female" : "Male",
        ip_address:
          "192.168." + faker.random.number(128) + "." + faker.random.number(255)
      };
      d.email =
        d.first_name[0].toLowerCase() +
        d.last_name.toLowerCase() +
        "@zipit.org.ca";
      return d;
    });
</script>

<style>
  div :global(.g_female) {
    color: #f9e;
  }
  div :global(.g_male) {
    color: #99e;
  }
  div :global(.text-center) {
    text-align: center;
  }
  div :global(.text-left) {
    text-align: left;
  }
</style>

<SvelteTable columns={colums} rows={data} />
