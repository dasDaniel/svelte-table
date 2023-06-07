import { SvelteComponentTyped } from "svelte";

export type TableColumn<T> = {
  key: string | number;
  title: string;
  value?: (row: T, rowIndex?: number, colIndex?: number) => string | number;
  class?:
    | string
    | ((row: T, rowIndex?: number, colIndex?: number) => string | null);
  sortable?: boolean;
  searchValue?:
    | ((row: T, searchTerm?: string) => boolean)
    | ((row: T) => string | number);
  filterOptions?: ((rows: T[]) => any) | any[];
  filterValue?:
    | ((row: T, searchTerm?: string) => string)
    | ((row: T) => boolean);
  filterPlaceholder?: string;
  headerClass?: string;
  headerFilterClass?: string;
  renderValue?: (row: T, rowIndex?: number, colIndex?: number) => any;
  parseHTML?: boolean;
  renderComponent?: any; // svelte component
  hideFilterHeader?: boolean;
};

export type TableColumns<T> = TableColumn<T>[];

export type RowClassName<T> = null | string | ((T, rowIndex) => string | null);

export type ColumnFilterValue<T> = {
  name: string | number;
  value: T;
};

export default class SvelteTable<Row> extends SvelteComponentTyped<
  {
    columns: TableColumn<Row>[];
    rows: Row[];

    // c_rows?: any; internal
    sortBy?: string | number;
    sortOrder?: 1 | -1 | 0;
    sortOrders?: (1 | -1 | 0)[];
    filterSelections?: Record<string | number, any>;
    expanded?: (string | number)[];
    selected?: (string | number)[];
    iconAsc?: string;
    iconDesc?: string;
    iconFilterable?: string;
    iconExpand?: string;
    iconExpanded?: string;
    iconSortable?: string;
    expandRowKey?: string;
    rowKey?: string;
    classNameTable?: string | string[];
    classNameThead?: string | string[];
    classNameTbody?: string | string[];
    classNameSelect?: string | string[];
    classNameInput?: string | string[];
    classNameRowExpanded?: string | string[];
    classNameExpandedContent?: string | string[];
    classNameRowSelected?: string | string[];
    classNameCell?: string | string[];
    classNameCellExpand?: string | string[];
    classNameRow?: string | ((row: Row, rowIndex?: number) => string | null);
    expandSingle?: Boolean;
    selectSingle?: Boolean;
    selectOnClick?: Boolean;
    showExpandIcon?: Boolean;
  },
  {
    clickCol: CustomEvent<{
      event: PointerEvent;
      col: TableColumn<Row>;
      key: string | number;
    }>;
    clickCell: CustomEvent<{
      event: PointerEvent;
      row: Row;
      key: string | number;
    }>;
    clickRow: CustomEvent<{ event: PointerEvent; row: Row }>;
    clickExpand: CustomEvent<{ event: PointerEvent; row: Row }>;
  }
> {}
