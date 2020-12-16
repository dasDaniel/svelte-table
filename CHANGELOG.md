
- `filterSelections` allows setting/getting search and filter selection values
- bugfix: no longer missing haeders when only search is provided (only worked for filters)
- examples: faker dependency is now a global referenced via cdn for faster bundling

0.1.16
- support passing props to renderComponent

0.1.15
- added ability to render Svelte component as content via `col.renderComponent`
- some cleanup on rollup config
- updated readme

0.1.14
- added search support

0.1.12
- disabled click handler for header on columns that are not sortable 
- fix examples to use correct case

0.1.11
- updated dependency versions 
- cleanup

0.1.10
- filters now update when rows change
- added example4 to illustrate reactive filters

0.1.9
- updated dependencies
- pass click event for `clickCol`, `clickRow`, and `clickCell` listeners
- improved examples
- improved code formatting

0.1.8 
- fixed asStringArray function
- removed package-lock to reduce potential security issues with some old nested dependencies

0.1.7
- added support for class names for table, thead, tbody, select, row, and cell elements
- cleaned up tab use in code

0.1.6
- readme update
- filterable column defaults to value if filerValue not provided
- filterOptions now accepts array of values

0.1.5
- update dependencies
- removed unused onDestroy

0.1.4
- updated readme and example
- added header and row slots
- made more props available externally
- added ability to listen to click events for headers, row, or cell

0.1.3
- switched dependencies to devDependencies
- README fixes