import React from "react";
import { Box, Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

const coursesData = [
  { id: 1, name: "Computer Science", instructor: "Dr. John Doe" },
  { id: 2, name: "Mathematics", instructor: "Prof. Jane Smith" },
  { id: 3, name: "Physics", instructor: "Dr. Albert Newton" },
  { id: 4, name: "Chemistry", instructor: "Prof. Marie Curie" },
  { id: 5, name: "Biology", instructor: "Dr. Charles Darwin" },
  { id: 6, name: "History", instructor: "Prof. William Turner" },
  { id: 7, name: "Philosophy", instructor: "Dr. Socrates" },
  { id: 8, name: "Economics", instructor: "Prof. Adam Smith" },
];

const AvailableCourses = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} style={{ color: "#558e99", fontWeight: "bold" }}>
        Available Courses
      </Typography>
      <Grid container spacing={3}>
        {coursesData.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card sx={{ border: "1px solid #558e99", borderRadius: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar sx={{ bgcolor: "#558e99" }}>{course.name.charAt(0)}</Avatar>
                  <Box>
                    <Typography variant="h6" style={{ color: "#558e99" }}>
                      {course.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Instructor: {course.instructor}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AvailableCourses;