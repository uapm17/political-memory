"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Selection,
  SortDescriptor,
} from "@nextui-org/table";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import { Pagination } from "@nextui-org/pagination";
import { ChipProps, Chip } from "@nextui-org/chip";
import {
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { SearchIcon } from "@/src/icons/SearchIcon";
import { ChevronDownIcon } from "@/src/icons/ChevronDownIcon";
import { capitalize } from "@/src/utils/string.utils";
import { format } from "date-fns";
import { Party, PartyStatus } from "@/src/entities/parties/Party";
import { Link } from "@nextui-org/link";

const statusColorMap: Record<PartyStatus, ChipProps["color"]> = {
  [PartyStatus.active]: "success",
  [PartyStatus.forbidden]: "danger",
  [PartyStatus.closed]: "warning",
};

const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "FOUNDED", uid: "start", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "WEBSITE", uid: "website" },
  { name: "DESCRIPTION", uid: "description" },
  //   { name: "ACTIONS", uid: "actions" },
];
const INITIAL_VISIBLE_COLUMNS = ["name", "start", "status", "website"];

type PartyInfo = {
  id: string;
  name: string;
  start: string;
  websiteTitle: string;
  websiteUrl: string;
  websiteIconUrl: string;
  status: PartyStatus;
  description: string;
  logoUrl: string;
};

const formatParyInfo = (party: Party): PartyInfo => {
  const { id, name, logoUrl, description, start, website, status } = party;

  return {
    id,
    name,
    start: format(start, "dd.MM.yyyy"),
    logoUrl,
    websiteTitle: website.name,
    websiteIconUrl: website.icon || "",
    websiteUrl: website.url,
    status,
    description,
  };
};

interface PartiesTableProps {
  parties: Party[];
}

export default function PartiesTable({ parties }: PartiesTableProps) {
  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Vacation", uid: "vacation" },
  ];
  const formattedParties = parties.map(formatParyInfo);

  const filteredItems = React.useMemo(() => {
    let filteredPersons = [...formattedParties];

    if (hasSearchFilter) {
      filteredPersons = filteredPersons.filter((party) =>
        party.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredPersons = filteredPersons.filter((party) =>
        Array.from(statusFilter).includes(party.status)
      );
    }

    return filteredPersons;
  }, [formattedParties, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: PartyInfo, b: PartyInfo) => {
      const first = a[sortDescriptor.column as keyof PartyInfo] as
        | number
        | string;
      const second = b[sortDescriptor.column as keyof PartyInfo] as
        | number
        | string;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (partyInfo: PartyInfo, columnKey: React.Key) => {
      const cellValue = partyInfo[columnKey as keyof PartyInfo];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{
                radius: "sm",
                className: "bg-white",
                src: partyInfo.logoUrl,
                imgProps: { className: "bg-contain" },
              }}
              // description={partyInfo.email}
              name={cellValue}
            >
              {partyInfo.name}
            </User>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[partyInfo.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "website":
          return (
            <Link
              isExternal
              href={partyInfo.websiteUrl}
              showAnchorIcon
              className="text-nowrap"
            >
              {partyInfo.websiteTitle}
            </Link>
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
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {formattedParties.length} parties
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    formattedParties.length,
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
      <TableHeader columns={headerColumns}>
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
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
