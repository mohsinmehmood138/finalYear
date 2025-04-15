import React, { useState } from "react";
import {
  Box,
  Table,
  Paper,
  Avatar,
  TableRow,
  TableCell,
  TableHead,
  TextField,
  TableBody,
  IconButton,
  TableContainer,
  TablePagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const teachersData = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Teacher ${index + 1}`,
  department: index % 2 === 0 ? "Physics" : "Chemistry",
  image: `https://via.placeholder.com/40`,
  email: `teacher${index + 1}@university.com`,
  phone: `+987654321${index}`,
}));

const TeachersPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={3}>
      {/* Search Bar */}
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search teachers..."
          size="small"
          value={search}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>

      {/* Teachers Table */}
      <TableContainer component={Paper} sx={{ border: "1px solid #558e99" }}>
        <Table sx={{ borderRadius: 20 }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#558e99" }}>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Image</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Department</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTeachers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((teacher) => (
                <TableRow key={teacher.id} style={{ borderBottom: "2px solid #558e99" }}>
                  <TableCell>
                    <Avatar src={teacher.image} alt={teacher.name} />
                  </TableCell>
                  <TableCell>{teacher.name}</TableCell>
                  <TableCell>{teacher.department}</TableCell>
                  <TableCell>{teacher.email}</TableCell>
                  <TableCell>{teacher.phone}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={filteredTeachers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default TeachersPage;