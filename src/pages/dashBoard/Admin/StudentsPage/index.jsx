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

const studentsData = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Student ${index + 1}`,
  department: index % 2 === 0 ? "Computer Science" : "Mathematics",
  image: `https://via.placeholder.com/40`,
  email: `student${index + 1}@university.com`,
  phone: `+123456789${index}`,
}));

const StudentsPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

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

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={3}>
      {/* Search Bar */}
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search students..."
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

      {/* Students Table */}
      <TableContainer component={Paper} sx={{border:"1px solid #558e99"}}>
        <Table sx={{borderRadius:20}}>
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
            {filteredStudents
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student) => (
                <TableRow key={student.id} style={{ borderBottom: "2px solid #558e99" }}>
                  <TableCell>
                    <Avatar src={student.image} alt={student.name} />
                  </TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={filteredStudents.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default StudentsPage;