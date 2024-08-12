import { tableDocument, tableEdit, tableEye, tableTrash } from "@/assets";
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
} from "@mui/material";
import Image from "next/image";
import React from "react";

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
  ...rest
}) => {
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
      <TableContainer {...rest} className="table">
        <MUITable>
          <TableHead>
            <TableRow sx={{ borderBottom: "2px solid red" }}>
              {extendedColumns?.map((column, index) => (
                <TableCell key={`${index}`}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={
                      column.key[0] === "action"
                        ? "flex-end"
                        : column.left
                        ? "flex-start"
                        : "center"
                    }
                  >
                    <Stack direction="row">{column.name}</Stack>
                  </Stack>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {!isLoading && (
            <TableBody>
              {data?.map((item) => (
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

        <br />

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

      {data?.length >= 1 && !isLoading ? (
        <Stack alignItems="end">
          <TablePagination
            component="div"
            count={total}
            page={page}
            onPageChange={
              handlePageChange ? (_, page) => handlePageChange(page) : () => {}
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
