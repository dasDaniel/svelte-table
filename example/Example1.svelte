<script>
  import SvelteTable from "../src/SvelteTable.svelte";
  // import SvelteTable from "svelte-table";
  import faker from "faker";
  faker.seed(5);

  let example = 0;

  let sortBy = "id";
  let sortOrder = 1;
  let iconAsc = "↑";
  let iconDesc = "↓";

  const colums = [
    {
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
              value: num
            };
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

<SvelteTable
  columns={colums}
  rows={data}
></SvelteTable>
