export type TableColumn<T> = {
  key: string | number;
  title: string;
  value?: (row: T) => string | number;
  class?:
    | string
    | ((row: T, rowIndex?: number, colIndex?: number) => string | null);
  sortable?: boolean;
  searchValue?: (row: T) => string | number;
  filterOptions?: ((row: T) => any) | any[];
  filterValue?: (row: T) => any;
  headerClass?: string;
  headerFilterClass?: string;
  renderValue?: (row: T) => any;
  renderComponent?: any; // svelte component
};

export type TableColumns<T> = TableColumn<T>[];

export type RowClassName<T> = null | string | ((T, rowIndex) => string | null);
