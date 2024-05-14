import Table, { ColumnType, ColumnsType, TableProps } from 'rc-table';
import Pagination, { PaginationProps } from './pagination/Pagination';
import { FaInfoCircle } from 'react-icons/fa';
import { useMemo } from 'react';
import { Checkbox } from '@mono/ui';
import { BaseDataItem, ID } from '../../types/common';
import { Card, CardContent } from './Card';

interface DataTableProps<T extends BaseDataItem> extends TableProps<T> {
  pagination?: PaginationProps | undefined;
  selectableRows?: boolean;
  selectedRows?: ID[];
  setSelectedRows?: React.Dispatch<React.SetStateAction<ID[]>>;
}

const DataTableEmpty = () => {
  return (
    <div className="bg-background flex flex-col items-center gap-4 p-8">
      <FaInfoCircle size={60} className="text-primary" />
      <h2>No data available in table</h2>
    </div>
  );
};

const DataTable = <T extends BaseDataItem>({
  data,
  columns,
  pagination,
  selectableRows,
  selectedRows,
  setSelectedRows,
  ...props
}: DataTableProps<T>) => {
  const transformedColumns = useMemo<ColumnsType<T>>(() => {
    if (selectableRows) {
      const areAllChecked = data?.every((item) =>
        selectedRows?.includes(item.id),
      );
      return [
        {
          title: (
            <Checkbox
              checked={areAllChecked}
              onCheckedChange={(checked) => {
                if (checked) {
                  return setSelectedRows?.(data?.map((item) => item.id) || []);
                }
                return setSelectedRows?.([]);
              }}
            />
          ),
          render(_, { id }) {
            return (
              <Checkbox
                checked={selectedRows?.includes(id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedRows?.([...(selectedRows || []), id]);
                  } else {
                    setSelectedRows?.(
                      (selectedRows || []).filter(
                        (selected) => selected !== id,
                      ),
                    );
                  }
                }}
              />
            );
          },
        },
        ...(columns || []),
      ];
    }
    return columns || [];
  }, [columns, selectedRows, selectableRows, data]);
  return (
    <Card>
      <CardContent className="p-6 md:p-6">
        <Table
          data={data}
          columns={transformedColumns}
          emptyText={<DataTableEmpty />}
          {...props}
        />
        {pagination && <Pagination {...pagination} />}
      </CardContent>
    </Card>
  );
};

export default DataTable;
