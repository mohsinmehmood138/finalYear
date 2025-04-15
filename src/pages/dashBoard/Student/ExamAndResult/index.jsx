import React from "react";
import { Box, Typography, Grid, Card, CardContent, LinearProgress } from "@mui/material";

const examResults = [
  { id: 1, exam: "Mathematics", score: 85, creditHours: 3, grade: "A", status: "Passed" },
  { id: 2, exam: "Computer Science", score: 90, creditHours: 4, grade: "A+", status: "Passed" },
  { id: 3, exam: "Physics", score: 78, creditHours: 3, grade: "B+", status: "Passed" },
  { id: 4, exam: "English", score: 88, creditHours: 2, grade: "A", status: "Passed" },
  { id: 5, exam: "Chemistry", score: 82, creditHours: 3, grade: "B", status: "Passed" },
];

const ExamResult = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} style={{ color: "#558e99", fontWeight: "bold" }}>
        Exams & Results
      </Typography>

      {/* Display Exam Results */}
      <Grid container spacing={3}>
        {examResults.map((result) => (
          <Grid item xs={12} sm={6} md={4} key={result.id}>
            <Card sx={{ border: "1px solid #558e99", borderRadius: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6" style={{ color: "#558e99" }}>
                  {result.exam}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Score: {result.score} / 100
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={result.score} 
                  sx={{ marginY: 1, height: 8, borderRadius: 5, backgroundColor: "#ccc" }}
                />
                <Typography variant="body2" color="text.secondary">
                  Credit Hours: {result.creditHours}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Grade: <strong>{result.grade}</strong>
                </Typography>
                <Typography variant="body2" color={result.status === "Passed" ? "green" : "red"}>
                  Status: {result.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExamResult;