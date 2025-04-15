import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Chip,
  Paper,
  Avatar,
  Typography,
  CardContent,
  IconButton,
  LinearProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import SchoolIcon from "@mui/icons-material/School";
import FilterListIcon from "@mui/icons-material/FilterList";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { format } from "date-fns";

// Sample attendance data for the current month
const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// Generate sample attendance data for the current month
const generateAttendanceData = () => {
  const subjects = ["Mathematics", "Computer Science", "Physics", "English", "Chemistry"];
  
  return subjects.map(subject => {
    // Generate random attendance days (present/absent/leave)
    const presentDays = Math.floor(Math.random() * 10) + 15; // 15-25 days present
    const absentDays = Math.floor(Math.random() * 5); // 0-5 days absent
    const leaveDays = Math.floor(Math.random() * 3); // 0-3 days leave
    
    // Calculate percentages
    const totalClasses = presentDays + absentDays + leaveDays;
    const attendancePercentage = Math.round((presentDays / totalClasses) * 100);
    
    // Generate daily attendance status for the calendar view
    const dailyStatus = Array(daysInMonth).fill(null).map((_, index) => {
      // Skip weekends
      if (new Date(currentYear, currentMonth, index + 1).getDay() === 0 || 
          new Date(currentYear, currentMonth, index + 1).getDay() === 6) {
        return "weekend";
      }
      
      // Randomly assign status
      const rand = Math.random();
      if (rand < 0.8) return "present";
      else if (rand < 0.9) return "absent";
      else return "leave";
    });
    
    return {
      subject,
      presentDays,
      absentDays,
      leaveDays,
      totalClasses,
      attendancePercentage,
      dailyStatus,
      // Add random colorization based on subject
      color: subject === "Mathematics" ? "#4caf50" : 
             subject === "Computer Science" ? "#2196f3" : 
             subject === "Physics" ? "#ff9800" : 
             subject === "English" ? "#9c27b0" : "#f44336"
    };
  });
};

const attendanceData = generateAttendanceData();

const AttendanceSection = () => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedSubject, setSelectedSubject] = useState("All");
  
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };
  
  // Filter data based on selected subject
  const filteredData = selectedSubject === "All" 
    ? attendanceData 
    : attendanceData.filter(item => item.subject === selectedSubject);
  
  // Calculate overall attendance
  const overallAttendance = attendanceData.reduce(
    (acc, item) => acc + item.attendancePercentage, 0
  ) / attendanceData.length;
  
  return (
    <Box p={3}>
      {/* Header Section */}
      <Box 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          backgroundColor: "#2b6777",
          color: "white",
          p: 2,
          borderRadius: 2,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <SchoolIcon sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h5">Attendance Record</Typography>
            <Typography variant="body2">Academic Year 2024-2025</Typography>
          </Box>
        </Box>
        <Box 
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            p: 1,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography variant="body2">Overall Attendance</Typography>
          <Typography variant="h4" fontWeight="bold">{overallAttendance.toFixed(1)}%</Typography>
        </Box>
      </Box>
 
      
      {/* Summary Cards */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#e8f5e9", borderLeft: "5px solid #4caf50" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Present Days</Typography>
                <Typography variant="h4" fontWeight="bold" color="#2e7d32">
                  {filteredData.reduce((sum, item) => sum + item.presentDays, 0)}
                </Typography>
              </Box>
              <Avatar sx={{ bgcolor: "#4caf50" }}>
                <CheckCircleIcon />
              </Avatar>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#ffebee", borderLeft: "5px solid #f44336" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Absent Days</Typography>
                <Typography variant="h4" fontWeight="bold" color="#c62828">
                  {filteredData.reduce((sum, item) => sum + item.absentDays, 0)}
                </Typography>
              </Box>
              <Avatar sx={{ bgcolor: "#f44336" }}>
                <CancelIcon />
              </Avatar>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#fff8e1", borderLeft: "5px solid #ffc107" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Leave Days</Typography>
                <Typography variant="h4" fontWeight="bold" color="#ff8f00">
                  {filteredData.reduce((sum, item) => sum + item.leaveDays, 0)}
                </Typography>
              </Box>
              <Avatar sx={{ bgcolor: "#ffc107" }}>
                <EventBusyIcon />
              </Avatar>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ backgroundColor: "#e3f2fd", borderLeft: "5px solid #2196f3" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Total Classes</Typography>
                <Typography variant="h4" fontWeight="bold" color="#0d47a1">
                  {filteredData.reduce((sum, item) => sum + item.totalClasses, 0)}
                </Typography>
              </Box>
              <Avatar sx={{ bgcolor: "#2196f3" }}>
                <SchoolIcon />
              </Avatar>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Subject-wise Attendance */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Subject-wise Attendance
      </Typography>
      
      <Grid container spacing={2} mb={4}>
        {filteredData.map((item) => (
          <Grid item xs={12} md={6} key={item.subject}>
            <Paper 
              elevation={1} 
              sx={{ 
                p: 2, 
                borderRadius: 2,
                border: `1px solid ${item.color}20`,
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Avatar 
                    sx={{ 
                      bgcolor: `${item.color}20`, 
                      color: item.color,
                      width: 32,
                      height: 32
                    }}
                  >
                    <StickyNote2Icon fontSize="small" />
                  </Avatar>
                  <Typography variant="subtitle1" fontWeight="medium">
                    {item.subject}
                  </Typography>
                </Box>
                <Chip 
                  label={`${item.attendancePercentage}%`}
                  size="small"
                  sx={{ 
                    fontWeight: "bold", 
                    bgcolor: item.attendancePercentage >= 75 ? "#4caf5020" : "#f4433620",
                    color: item.attendancePercentage >= 75 ? "#4caf50" : "#f44336",
                  }}
                />
              </Box>
              
              <LinearProgress 
                variant="determinate" 
                value={item.attendancePercentage} 
                sx={{ 
                  height: 10, 
                  borderRadius: 5,
                  mb: 1,
                  bgcolor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: item.attendancePercentage >= 75 ? "#4caf50" : "#f44336"
                  }
                }}
              />
              
              <Box display="flex" justifyContent="space-between" fontSize="small" color="text.secondary">
                <Typography variant="body2">
                  Present: {item.presentDays} days
                </Typography>
                <Typography variant="body2">
                  Absent: {item.absentDays} days
                </Typography>
                <Typography variant="body2">
                  Leave: {item.leaveDays} days
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      
      
      {/* Notice */}
      <Paper
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 2,
          bgcolor: "#fff3e0",
          border: "1px dashed #ff9800"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          <strong>Note:</strong> Minimum 75% attendance is required to be eligible for final examinations. 
          Please contact your class teacher if you have attendance concerns.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AttendanceSection;