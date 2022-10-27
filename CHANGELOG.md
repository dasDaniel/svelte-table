## 0.5.2

- [#112] a11y imporovements: add `on:keypress` listeners and `tabindex="0"` to interactive elements

## 0.5.1

- [#107] types: value optional
- [ST-103] Added lint check in actions
- [#101] Fix typo and print "is needed" message as error

## 0.5.0

- Droped typescript usage. Causing issues, especially with use in REPL

## 0.4.5

- Fix package.json (v0.4.0 bugfix)
- `classNameRow` prop and column `class` support passing functions to resolve by using column data or index
- Row selection support
- TypeScript support

## 0.3.5

- bump svelte from 3.39.0 to 3.49.0
- update package-lock

## 0.3.4

- Add `classNameInput` prop and a `headerFilterClass` column object key [#76](https://github.com/dasDaniel/svelte-table/issues/76)

## 0.3.3

- Customize sort order using `sortOrders` prop [#73](https://github.com/dasDaniel/svelte-table/issues/73)

## 0.3.2

- set svelte version to 3.39.0 and recompiled to address [sveltejs/svelte#6584](https://github.com/sveltejs/svelte/issues/6584)
- `c_rows` internal exposed (the name may change in future)

## 0.3.1

- `iconAsc`, `iconDesc`, `iconExpand`, `iconExpanded` now support html content

## 0.3.0

### Breaking Change

class name `classNameRowExpanded` now refers to the **row, not the content**

- added `classNameExpandedContent` for targetting the expanded content
- set `classNameRowExpanded` to target the row being expanded
- did more cleanup on examples

## 0.2.0

- New feature: added ability to expand rows

## 0.1.19

- Only sort columns if column is sortable [#43](https://github.com/dasDaniel/svelte-table/pull/43)
- cleanup repo [#44](https://github.com/dasDaniel/svelte-table/pull/44)

## 0.1.18

- Handle dynamic column definition

## 0.1.17

- `filterSelections` allows setting/getting search and filter selection values
- bugfix: no longer missing haeders when only search is provided (only worked for filters)
- examples: faker dependency is now a global referenced via cdn for faster bundling

## 0.1.16

- support passing props to renderComponent

## 0.1.15

- added ability to render Svelte component as content via `col.renderComponent`
- some cleanup on rollup config
- updated readme

## 0.1.14

- added search support

## 0.1.12

- disabled click handler for header on columns that are not sortable
- fix examples to use correct case

## 0.1.11

- updated dependency versions
- cleanup

## 0.1.10

- filters now update when rows change
- added example4 to illustrate reactive filters

## 0.1.9

- updated dependencies
- pass click event for `clickCol`, `clickRow`, and `clickCell` listeners
- improved examples
- improved code formatting

## 0.1.8

- fixed asStringArray function
- removed package-lock to reduce potential security issues with some old nested dependencies

## 0.1.7

- added support for class names for table, thead, tbody, select, row, and cell elements
- cleaned up tab use in code

## 0.1.6

- readme update
- filterable column defaults to value if filerValue not provided
- filterOptions now accepts array of values

## 0.1.5

- update dependencies
- removed unused onDestroy

## 0.1.4

- updated readme and example
- added header and row slots
- made more props available externally
- added ability to listen to click events for headers, row, or cell

## 0.1.3

- switched dependencies to devDependencies
- README fixes
