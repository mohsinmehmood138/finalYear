import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Chip,
  Paper,
  Typography,
  CardContent,
  LinearProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SubjectIcon from "@mui/icons-material/Subject";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EventIcon from "@mui/icons-material/Event";

// Sample assignment data
const generateAssignmentData = () => {
  const subjects = ["Mathematics", "Computer Science", "Physics", "English", "Chemistry"];
  const assignmentTypes = ["Homework", "Project", "Quiz", "Lab Report", "Essay"];
  
  return Array(8).fill(null).map((_, index) => {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const assignmentType = assignmentTypes[Math.floor(Math.random() * assignmentTypes.length)];
    
    // Generate random dates
    const today = new Date();
    const assignedDate = new Date(today);
    assignedDate.setDate(today.getDate() - Math.floor(Math.random() * 14)); // 0-14 days ago
    
    const dueDate = new Date(assignedDate);
    dueDate.setDate(assignedDate.getDate() + Math.floor(Math.random() * 14) + 7); // 7-21 days after assigned
    
    // Random status
    const statusOptions = ["Pending", "Completed", "Late", "In Progress"];
    const status = statusOptions[Math.floor(Math.random() * statusOptions.length)];
    
    // Random grade (if completed)
    const grade = status === "Completed" ? Math.floor(Math.random() * 31) + 70 : null; // 70-100
    
    return {
      id: index + 1,
      title: `${subject} ${assignmentType} ${index + 1}`,
      subject,
      assignmentType,
      assignedDate,
      dueDate,
      status,
      grade,
      description: `Complete the ${assignmentType.toLowerCase()} about ${subject.toLowerCase()} concepts.`,
      // Color based on subject
      color: subject === "Mathematics" ? "#4caf50" : 
             subject === "Computer Science" ? "#2196f3" : 
             subject === "Physics" ? "#ff9800" : 
             subject === "English" ? "#9c27b0" : "#f44336"
    };
  });
};

const assignmentData = generateAssignmentData();

const AssignmentSection = () => {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  
  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };
  
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  
  // Filter assignments based on selected filters
  const filteredAssignments = assignmentData.filter(assignment => {
    const subjectMatch = selectedSubject === "All" || assignment.subject === selectedSubject;
    const statusMatch = selectedStatus === "All" || assignment.status === selectedStatus;
    return subjectMatch && statusMatch;
  });
  
  // Calculate assignment statistics
  const completedCount = assignmentData.filter(a => a.status === "Completed").length;
  const pendingCount = assignmentData.filter(a => a.status === "Pending" || a.status === "In Progress").length;
  const lateCount = assignmentData.filter(a => a.status === "Late").length;
  
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
          <AssignmentIcon sx={{ fontSize: 40 }} />
          <Box>
            <Typography variant="h5">Assignment Tracker</Typography>
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
          <Typography variant="body2">Completion Rate</Typography>
          <Typography variant="h4" fontWeight="bold">
            {Math.round((completedCount / assignmentData.length) * 100)}%
          </Typography>
        </Box>
      </Box>
  
      
      {/* Summary Cards */}
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#e8f5e9", borderLeft: "5px solid #4caf50" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Completed</Typography>
                <Typography variant="h4" fontWeight="bold" color="#2e7d32">{completedCount}</Typography>
              </Box>
              <AssignmentTurnedInIcon sx={{ color: "#4caf50", fontSize: 40 }} />
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#e3f2fd", borderLeft: "5px solid #2196f3" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Pending</Typography>
                <Typography variant="h4" fontWeight="bold" color="#0d47a1">{pendingCount}</Typography>
              </Box>
              <AssignmentIcon sx={{ color: "#2196f3", fontSize: 40 }} />
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Card sx={{ backgroundColor: "#ffebee", borderLeft: "5px solid #f44336" }}>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body2" color="text.secondary">Late</Typography>
                <Typography variant="h4" fontWeight="bold" color="#c62828">{lateCount}</Typography>
              </Box>
              <EventIcon sx={{ color: "#f44336", fontSize: 40 }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Assignments List */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Assignments ({filteredAssignments.length})
      </Typography>
      
      <Grid container spacing={2}>
        {filteredAssignments.map((assignment) => {
          // Determine status color
          const statusColor = 
            assignment.status === "Completed" ? "#4caf50" :
            assignment.status === "Late" ? "#f44336" :
            assignment.status === "In Progress" ? "#ff9800" : "#2196f3";
          
          // Calculate days remaining
          const today = new Date();
          const daysRemaining = Math.ceil((assignment.dueDate - today) / (1000 * 60 * 60 * 24));
          
          return (
            <Grid item xs={12} key={assignment.id}>
              <Paper 
                elevation={1} 
                sx={{ 
                  p: 2, 
                  borderRadius: 2,
                  border: `1px solid ${assignment.color}20`,
                  mb: 1
                }}
              >
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Box>
                    <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                      <Chip 
                        size="small" 
                        label={assignment.subject}
                        sx={{ 
                          bgcolor: `${assignment.color}20`,
                          color: assignment.color,
                          fontWeight: "medium"
                        }}
                      />
                      <Chip 
                        size="small" 
                        label={assignment.status}
                        sx={{ 
                          bgcolor: `${statusColor}20`,
                          color: statusColor,
                          fontWeight: "medium"
                        }}
                      />
                    </Box>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {assignment.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={0.5}>
                      {assignment.description}
                    </Typography>
                  </Box>
                  
                  <Box textAlign="right">
                    {assignment.status === "Completed" ? (
                      <Typography variant="h6" fontWeight="bold" color={statusColor}>
                        {assignment.grade}/100
                      </Typography>
                    ) : (
                      <Typography 
                        variant="body2" 
                        fontWeight="medium"
                        color={daysRemaining < 0 ? "#f44336" : 
                               daysRemaining < 3 ? "#ff9800" : "#2196f3"}
                      >
                        {daysRemaining < 0 
                          ? `${Math.abs(daysRemaining)} days overdue` 
                          : daysRemaining === 0 
                            ? "Due today"
                            : `${daysRemaining} days remaining`}
                      </Typography>
                    )}
                    <Typography variant="body2" color="text.secondary">
                      Due: {assignment.dueDate.toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                
                {assignment.status !== "Completed" && (
                  <LinearProgress 
                    variant="determinate" 
                    value={assignment.status === "In Progress" ? 50 : 0} 
                    sx={{ 
                      height: 6, 
                      borderRadius: 3,
                      mt: 1,
                      bgcolor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: daysRemaining < 0 ? "#f44336" : 
                                         daysRemaining < 3 ? "#ff9800" : "#2196f3"
                      }
                    }}
                  />
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      
      {filteredAssignments.length === 0 && (
        <Paper sx={{ p: 3, textAlign: "center", bgcolor: "#f5f5f5" }}>
          <Typography color="text.secondary">
            No assignments matching the selected filters.
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default AssignmentSection;