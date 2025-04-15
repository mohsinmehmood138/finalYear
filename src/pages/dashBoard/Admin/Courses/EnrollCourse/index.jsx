import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const EnrollCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [courses, setCourses] = useState([]);

  const handleAddCourse = () => {
    if (courseName.trim() === "" || instructorName.trim() === "") {
      alert("Both fields are required!");
      return;
    }
    
    const newCourse = {
      id: courses.length + 1,
      name: courseName,
      instructor: instructorName,
    };
    setCourses([...courses, newCourse]);
    setCourseName("");
    setInstructorName("");
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} style={{ color: "#558e99", fontWeight: "bold" }}>
        Enroll in a New Course
      </Typography>

      {/* Course Form */}
      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="Course Name"
          variant="outlined"
          fullWidth
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <TextField
          label="Instructor Name"
          variant="outlined"
          fullWidth
          value={instructorName}
          onChange={(e) => setInstructorName(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#558e99", color: "white" }}
          onClick={handleAddCourse}
        >
          Add 
        </Button>
      </Box>

      {/* Display Enrolled Courses */}
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card sx={{ border: "1px solid #558e99", borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" style={{ color: "#558e99" }}>
                  {course.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Instructor: {course.instructor}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EnrollCourse;
