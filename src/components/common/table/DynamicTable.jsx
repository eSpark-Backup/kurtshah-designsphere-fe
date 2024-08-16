"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  tableDocument,
  tableEdit,
  tableEye,
  tableTrash,
  tableSort,
} from "@/assets";
import { getValue } from "@/utils/getValue";
import {
  Stack,
  TableContainer,
  TableHead,
  Table as MUITable,
  TableRow,
  TableCell,
  TableBody,
  LinearProgress,
  Box,
  TablePagination,
  Chip,
  TableSortLabel,
} from "@mui/material";

const DynamicTable = ({
  handleView,
  handleEdit,
  handleDelete,
  handleDownload,
  data,
  columns,
  isLoading,
  page,
  handlePageChange,
  total,
  ordering,
  pagination,
  paginationCenter,
  ...rest
}) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = useMemo(() => {
    if (!orderBy) return data;
    return [...data].sort((a, b) => {
      const aValue = getValue(a, orderBy.split("."));
      const bValue = getValue(b, orderBy.split("."));
      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, order, orderBy]);

  const extendedColumns = columns?.map((column) => {
    return { ...column, key: column.key.split(".") };
  });

  const ActionButton = ({ onClick, src, alt }) => (
    <Box sx={{ cursor: "pointer" }}>
      <Image
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        src={src}
        alt={alt}
        width="16px"
        height="16px"
      />
    </Box>
  );

  const generateCell = (column, item) => {
    const cell = column?.component
      ? column?.component(item)
      : getValue(item, column.key);
    return column.key[0] === "action" ? (
      <Stack
        direction="row"
        justifyContent={column.right ? "flex-end" : "center"}
        justifyItems="center"
        alignItems="center"
        spacing={1}
      >
        {column?.component ? (
          cell
        ) : (
          <>
            {!column.hideEdit && (
              <ActionButton
                onClick={() => handleEdit?.(item)}
                src={tableEdit}
                alt={"Edit"}
              />
            )}
            {!column.hideDelete && (
              <ActionButton
                onClick={() => handleDelete?.(item)}
                src={tableTrash}
                alt={"delete"}
              />
            )}

            {!column.hideDownload && (
              <ActionButton
                onClick={() => handleDownload?.(item)}
                src={tableDocument}
                alt={"download"}
              />
            )}

            {!column.hideView && (
              <ActionButton
                onClick={() => handleView?.(item)}
                src={tableEye}
                alt={"view"}
              />
            )}
          </>
        )}
      </Stack>
    ) : column?.chip ? (
      <Chip label={cell} />
    ) : (
      cell
    );
  };

  return (
    <>
      <TableContainer
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        {...rest}
        className="table"
      >
        <MUITable>
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid red" }}>
              {extendedColumns?.map((column, index) => (
                <TableCell key={`${index}`}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={
                      column.right
                        ? "flex-end"
                        : column.left
                          ? "flex-start"
                          : "center"
                    }
                  >
                    <Stack direction="row">
                      {ordering && column.name !== "" ? (
                        <TableSortLabel
                          active={orderBy === column.key.join(".")}
                          direction={
                            orderBy === column.key.join(".") ? order : "asc"
                          }
                          onClick={() =>
                            handleRequestSort(column.key.join("."))
                          }
                          IconComponent={() => (
                            <Image src={tableSort} width={"20px"} alt="sort" />
                          )}
                          sx={{
                            "&.Mui-active": {
                              color: "white",
                              fontWeight: "bold",
                            },
                            // on hover as well
                            "&:hover": {
                              color: "white",
                            },
                          }}
                        >
                          {column.name}
                        </TableSortLabel>
                      ) : (
                        column.name
                      )}
                    </Stack>
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {!isLoading && (
            <TableBody>
              {sortedData?.map((item) => (
                <TableRow key={item.id}>
                  {extendedColumns?.map((column) => (
                    <TableCell
                      sx={{
                        textAlign: column.left
                          ? "left"
                          : column.right
                            ? "right"
                            : "center",
                        pl: "20px",
                      }}
                      key={column.key.join(".")}
                    >
                      {generateCell(column, item)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          )}
        </MUITable>


        {data?.length === 0 && !isLoading && (
          <Stack direction="row" justifyContent="center" alignItems="center">
            No Data to display
          </Stack>
        )}

        {isLoading && (
          <Box>
            <LinearProgress />
          </Box>
        )}
      </TableContainer>
      {/* } */}

      {pagination && data?.length >= 1 && !isLoading ? (
        <Stack alignItems={paginationCenter ? "center" : "end"}>
          <TablePagination
            component="div"
            count={total}
            page={page}
            onPageChange={
              handlePageChange ? (_, page) => handlePageChange(page) : () => { }
            }
            rowsPerPage={5}
            rowsPerPageOptions={[]}
          />
        </Stack>
      ) : null}
    </>
  );
};

export default DynamicTable;
