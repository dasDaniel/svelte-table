export type TTAbleColumn<T> = {
  key: string;
  title: string;
  value: (row: T) => string | number;
  class?: string;
  sortable?: boolean;
  searchValue?: (row: T) => string | number;
  filterOptions?: ((row: T) => any) | any[];
  filterValue?: string;
  headerClass?: string;
  headerFilterClass?: string;
  renderValue?: (row: T) => any;
  renderComponent?: any; // svelte component
};
export type TTAbleColumns<T> = Record<
  string | number | symbol,
  TTAbleColumn<T>
>;
