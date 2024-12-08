import React, { useMemo } from "react";
import { User } from "@nextui-org/user";
import { useRouter } from "next/router";
import { Chip } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Pagination } from "@nextui-org/pagination";
import { SearchIcon } from "@/src/icons/SearchIcon";
import { capitalize } from "@/src/utils/string.utils";
import { ChevronDownIcon } from "@/src/icons/ChevronDownIcon";
import { typesColorMap } from "@/src/entities/institutions/institutions.utils";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import {
  Institution,
  InstitutionData,
  InstitutionType,
} from "@/src/entities/institutions/Institution";
import {
  Selection,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import InstitutionFormBtn from "./CreateInstitutionBtn";

const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "CITY", uid: "city", sortable: true },
  { name: "COUNTRY", uid: "country" },
  { name: "TYPE", uid: "type" },
];

interface InstitutionsTableProps {
  institutions: Institution[];
}

export default function InstitutionsTable({
  institutions,
}: InstitutionsTableProps) {
  const navigate = useRouter;
  const [filterValue, setFilterValue] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const typesOptions = useMemo(
    () =>
      Object.values(InstitutionType).map((type) => ({
        value: type,
        label: type,
      })),
    []
  );

  const filteredItems = React.useMemo(() => {
    let filteredInstitutions = [...institutions];

    if (hasSearchFilter) {
      filteredInstitutions = filteredInstitutions.filter((institution) =>
        institution.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (
      typeFilter !== "all" &&
      Array.from(typeFilter).length !== typesOptions.length
    ) {
      filteredInstitutions = filteredInstitutions.filter((institution) =>
        Array.from(typeFilter).includes(institution.type)
      );
    }

    return filteredInstitutions;
  }, [institutions, filterValue, typeFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Institution, b: Institution) => {
      const first = a[sortDescriptor.column as keyof InstitutionData];
      const second = b[sortDescriptor.column as keyof InstitutionData];
      // @ts-ignore
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (institution: Institution, columnKey: React.Key) => {
      const cellValue = institution[columnKey as keyof InstitutionData];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{
                radius: "lg",
                src: institution.logoUrl || undefined,
              }}
              description={institution.description}
              name={cellValue}
            >
              {institution.name}
            </User>
          );
        case "type":
          return (
            <Chip
              className="capitalize"
              color={typesColorMap.get(institution.type)}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Type
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={typeFilter}
                selectionMode="multiple"
                onSelectionChange={setTypeFilter}
              >
                {typesOptions.map((status) => (
                  <DropdownItem key={status.value} className="capitalize">
                    {capitalize(status.label)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <InstitutionFormBtn />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {institutions.length} institutions
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    typeFilter,
    columns,
    onSearchChange,
    onRowsPerPageChange,
    institutions.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-around items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onPreviousPage}
          >
            Previous
          </Button>
          <Button
            isDisabled={pages === 1}
            size="sm"
            variant="flat"
            onPress={onNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id} href={`/institutions/${item.id}`}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
