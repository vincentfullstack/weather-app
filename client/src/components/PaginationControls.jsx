import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from "@mui/material";

export default function PaginationControls({
  page,
  totalPages,
  pageSize,
  setPage,
  setPageSize,
}) {
  return (
    <Box
      mt={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => setPage(value)}
        color="primary"
      />
      <FormControl size="small" sx={{ minWidth: 100 }}>
        <InputLabel id="page-size-label">Page Size</InputLabel>
        <Select
          labelId="page-size-label"
          value={pageSize}
          onChange={(e) => {
            setPageSize(e.target.value);
            setPage(1);
          }}
          label="Page Size"
        >
          {[5, 10, 20, 50].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
