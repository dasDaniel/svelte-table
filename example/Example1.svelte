<script>
  import SvelteTable from "../src/SvelteTable.svelte";
  // import SvelteTable from "svelte-table";
  import faker from "faker";
  faker.seed(5);

  const colums = [
    {
      key: "id",
      title: "ID",
      value: v => v.id,
      sortable: false,
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
      filterValue: (r, f) => f === Math.floor(r.id / 10),
      headerClass: "text-left",
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
              value: letr.toLowerCase(),
            };
        });
        // fix order
        letrs = Object.entries(letrs)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(letrs);
      },
      filterValue: (r, f) => f === r.first_name.charAt(0).toLowerCase(),
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
              value: letr.toLowerCase(),
            };
        });
        // fix order
        letrs = Object.entries(letrs)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});
        return Object.values(letrs);
      },
      filterValue: (r, f) => f === r.last_name.charAt(0).toLowerCase(),
    },
    {
      key: "email",
      title: "EMAIL",
      value: v => v.email,
      searchValue: v => v.email,
      filterPlaceholder: "email",
      sortable: true,
      class: "text-center",
    },
    {
      key: "pet",
      title: "pet",
      value: v => v.pet,
      renderValue: v => {
        let icon = v.pet.toLowerCase() === "cat" ? "🐱" : "";
        icon = v.pet.toLowerCase() === "dog" ? "🐶" : icon;
        return `${icon} ${v.pet}`;
      },
      sortable: true,
      filterOptions: ["dog", "cat"],
      filterPlaceholder: "all",
    },
    {
      key: "ip_address",
      title: "IP ADDRESS",
      value: v => v.ip_address,
      sortable: true,
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
        pet: faker.random.number(1) ? "cat" : "dog",
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
