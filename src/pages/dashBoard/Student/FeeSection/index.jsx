import React, { useState } from "react";
import {
  Box,
  Table,
  Paper,
  Chip,
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
import PaymentIcon from "@mui/icons-material/Payment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const feesData = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  feeType: index % 3 === 0 ? "Tuition Fee" : index % 3 === 1 ? "Exam Fee" : "Library Fee",
  semester: `Spring ${2025 - Math.floor(index / 6)}`,
  amount: index % 3 === 0 ? 45000 : index % 3 === 1 ? 5000 : 2500,
  dueDate: `2025-0${(index % 4) + 1}-${10 + (index % 15)}`,
  status: index % 4 === 0 ? "Pending" : index % 4 === 1 ? "Overdue" : "Paid",
  receiptNo: index % 4 === 2 || index % 4 === 3 ? `RCPT-${2025}-${1000 + index}` : "-",
}));

const FeeSection = () => {
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

  const filteredFees = feesData.filter((fee) =>
    fee.feeType.toLowerCase().includes(search.toLowerCase()) || 
    fee.semester.toLowerCase().includes(search.toLowerCase()) ||
    fee.status.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate total fees
  const totalFees = filteredFees.reduce((sum, fee) => sum + fee.amount, 0);
  const paidFees = filteredFees
    .filter(fee => fee.status === "Paid")
    .reduce((sum, fee) => sum + fee.amount, 0);
  const pendingFees = filteredFees
    .filter(fee => fee.status === "Pending" || fee.status === "Overdue")
    .reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <Box p={3}>
      {/* Header with summary */}
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        mb={3}
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 2,
          borderRadius: 2,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}
      >
        <Box display="flex" alignItems="center">
          <PaymentIcon sx={{ fontSize: 40, color: "#2b6777", mr: 2 }} />
          <Box>
            <Box component="span" sx={{ fontSize: 20, fontWeight: "bold" }}>Fee Section</Box>
            <Box component="p" sx={{ mt: 0.5, mb: 0 }}>Student Financial Summary</Box>
          </Box>
        </Box>
        <Box display="flex" gap={2}>
          <Box sx={{ textAlign: "center" }}>
            <Box component="p" sx={{ mb: 0.5, mt: 0, fontWeight: "bold" }}>Total Fees</Box>
            <Chip label={`Rs ${totalFees.toLocaleString()}`} color="primary" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box component="p" sx={{ mb: 0.5, mt: 0, fontWeight: "bold" }}>Paid</Box>
            <Chip 
              label={`Rs ${paidFees.toLocaleString()}`} 
              color="success" 
              icon={<CheckCircleIcon />}
            />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box component="p" sx={{ mb: 0.5, mt: 0, fontWeight: "bold" }}>Pending</Box>
            <Chip 
              label={`Rs ${pendingFees.toLocaleString()}`} 
              color="warning" 
              icon={<ErrorIcon />}
            />
          </Box>
        </Box>
      </Box>

      {/* Search Bar */}
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          variant="outlined"
          placeholder="Search fee details..."
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
          sx={{ width: 300 }}
        />
      </Box>

      {/* Fees Table */}
      <TableContainer component={Paper} sx={{ border: "1px solid #558e99" }}>
        <Table sx={{ borderRadius: 20 }}>
          <TableHead>
            <TableRow style={{ backgroundColor: "#558e99" }}>
              <TableCell style={{ color: "white", fontWeight: "bold" }}><ReceiptIcon sx={{ mr: 1 }} />Fee Type</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Semester</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Amount (Rs )</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Due Date</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
              <TableCell style={{ color: "white", fontWeight: "bold" }}>Receipt No.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((fee) => (
                <TableRow key={fee.id} style={{ borderBottom: "2px solid #e0f2f1" }}>
                  <TableCell>{fee.feeType}</TableCell>
                  <TableCell>{fee.semester}</TableCell>
                  <TableCell>Rs {fee.amount.toLocaleString()}</TableCell>
                  <TableCell>{fee.dueDate}</TableCell>
                  <TableCell>
                    <Chip 
                      label={fee.status} 
                      size="small"
                      color={
                        fee.status === "Paid" 
                          ? "success" 
                          : fee.status === "Overdue" 
                            ? "error" 
                            : "warning"
                      }
                      sx={{ 
                        fontWeight: "bold",
                        minWidth: 80
                      }}
                    />
                  </TableCell>
                  <TableCell>{fee.receiptNo}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={filteredFees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default FeeSection;