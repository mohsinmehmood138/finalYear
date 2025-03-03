import React from "react";
import {
  Box,
  Grid,
  Card,
  Avatar,
  Button,
  TextField,
  IconButton,
  Typography,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Tooltip,
  Badge,
  Chip,
  InputAdornment,
  Paper
} from "@mui/material";
import { format ,parseISO} from "date-fns";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";

const categories = [
  {
    name: "Teachers",
    icon: <SupervisorAccountIcon />,
    size: 20,
    trend: "+2",
    color: "#558e99",
  },
  {
    name: "Students",
    icon: <SchoolIcon />,
    size: 200,
    trend: "+15",
    color: "#2b6777",
  },
  {
    name: "Admins",
    icon: <AdminPanelSettingsIcon />,
    size: 5,
    trend: "0",
    color: "#558e99",
  },
  {
    name: "Projects",
    icon: <WorkIcon />,
    size: 50,
    trend: "+3",
    color: "#2b6777",
  },
];


const announcements = [
  {
    id: 1,
    title: "New semester starts from March 10th",
    description: "Important for all faculty members",
    icon: <NotificationsIcon />,
    iconBg: "#558e99",
    time: "2 days ago",
    priority: "high",
  },
  {
    id: 2,
    title: "Staff meeting on Friday at 2 PM",
    description: "Attendance is mandatory",
    icon: <NotificationsIcon />,
    iconBg: "#558e99",
    time: "5 days ago",
    priority: "medium",
  },
  {
    id: 3,
    title: "Annual budget planning session",
    description: "Department heads only",
    icon: <AssignmentIcon />,
    iconBg: "#f44336",
    time: "1 week ago",
    priority: "high",
  },
  {
    id: 4,
    title: "Campus maintenance schedule",
    description: "Please review the updated schedule",
    icon: <NotificationsIcon />,
    iconBg: "#558e99",
    time: "2 weeks ago",
    priority: "low",
  },
];


const messages = [
  {
    id: 1,
    sender: "Prof. Smith",
    avatar: "/images/prof-smith.jpg",
    preview: "Regarding the upcoming faculty evaluation...",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 2,
    sender: "Student Council",
    avatar: "/images/student.jpg",
    preview: "Hello, I'm interested in the advanced programming...",
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 3,
    sender: "Dr. Johnson",
    avatar: "/images/dr-johnson.jpg",
    preview: "Please find attached the minutes from yesterday's...",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 4,
    sender: "IT Support",
    avatar: null,
    preview: "Your ticket #12345 has been resolved...",
    time: "2 days ago",
    unread: false,
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Department Meeting",
    date: "2025-03-05",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Room A",
    type: "meeting",
  },
  {
    id: 2,
    title: "Student Orientation",
    date: "2025-03-08",
    time: "09:00 AM - 03:00 PM",
    location: "Main Auditorium",
    type: "event",
  },
  {
    id: 3,
    title: "Project Deadline",
    date: "2025-03-10",
    time: "11:59 PM",
    location: "Online Submission",
    type: "deadline",
  },
];

const AdminHomePage = () => {
  const today = format(new Date(), "EEEE, MMMM d, yyyy | hh:mm a");
  return (
    <Box p={3}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Welcome back, John Doe!
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            {today}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search for teachers, students, or projects..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    bgcolor: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  flex: 1,
                  borderRadius: 3,
                  bgcolor: "#558e99",
                  boxShadow: "0 4px 14px rgba(85, 142, 153, 0.4)",
                  "&:hover": {
                    bgcolor: "#2b6777",
                  },
                }}
              >
                Add New Project
              </Button>
              
            </Grid>
          </Grid>
        </Box>


      <Grid container spacing={3} my={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  background: `linear-gradient(135deg, ${category.color}, ${category.color === "#558e99" ? "#2b6777" : "#558e99"})`,
                  borderRadius: 3,
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(43, 103, 119, 0.15)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    right: -20,
                    bottom: -20,
                    opacity: 0.1,
                    transform: "rotate(-15deg)",
                    fontSize: 120,
                    display: "flex",
                  }}
                >
                  {category.icon}
                </Box>
                <CardContent sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%",
                        padding: 1.5,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Chip
                      label={category.trend}
                      size="small"
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: 1,
                      }}
                      icon={
                        <TrendingUpIcon sx={{ color: "white !important" }} />
                      }
                    />
                  </Box>
                  <Box mt={2}>
                    <Typography variant="h3" color="white" fontWeight="bold">
                      {category.size}
                    </Typography>
                    <Typography variant="body2" color="white" opacity={0.8}>
                      Total {category.name}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

         {/* Announcement and Messages Section */}
         <Grid container spacing={3} mb={4}>
          {/* Announcements */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <Box sx={{ bgcolor: "#2b6777", p: 2, color: "white" }}>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <NotificationsIcon /> Recent Announcements
                </Typography>
              </Box>
              <CardContent sx={{ p: 0 }}>
                <List sx={{ p: 0 }}>
                  {announcements.slice(0, 3).map((item, index) => (
                    <React.Fragment key={item.id}>
                      <ListItem
                        sx={{
                          p: 2,
                          transition: "all 0.3s",
                          "&:hover": { bgcolor: "rgba(85, 142, 153, 0.1)" },
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: item.iconBg }}>
                            {item.icon}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography fontWeight="medium">
                              {item.title}
                            </Typography>
                          }
                          secondary={
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 0.5,
                              }}
                            >
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {item.description}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                  bgcolor: "rgba(85, 142, 153, 0.1)",
                                  p: 0.5,
                                  borderRadius: 1,
                                  ml: 1,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {item.time}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      {index < announcements.slice(0, 3).length - 1 && (
                        <Divider />
                      )}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
              <Box
                sx={{
                  p: 2,
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  startIcon={<SearchIcon />}
                  sx={{ color: "#2b6777" }}
                  endIcon={<ExpandMoreIcon />}
                >
                  View All Announcements
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Messages */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <Box sx={{ bgcolor: "#2b6777", p: 2, color: "white" }}>
                <Typography
                  variant="h6"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <MessageIcon /> Recent Messages
                </Typography>
              </Box>
              <CardContent sx={{ p: 0 }}>
                <List sx={{ p: 0 }}>
                  {messages.slice(0, 3).map((item, index) => (
                    <React.Fragment key={item.id}>
                      <ListItem
                        sx={{
                          p: 2,
                          transition: "all 0.3s",
                          "&:hover": { bgcolor: "rgba(85, 142, 153, 0.1)" },
                        }}
                      >
                        <ListItemAvatar>
                          {item.avatar ? (
                            <Avatar src={item.avatar} />
                          ) : (
                            <Avatar sx={{ bgcolor: "#9c27b0" }}>
                              {item.sender.charAt(0)}
                            </Avatar>
                          )}
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Typography fontWeight="medium">
                                {item.sender}
                              </Typography>
                              {item.unread && (
                                <Box
                                  sx={{
                                    width: 8,
                                    height: 8,
                                    bgcolor: "#558e99",
                                    borderRadius: "50%",
                                  }}
                                />
                              )}
                            </Box>
                          }
                          secondary={
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 0.5,
                              }}
                            >
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                noWrap
                                sx={{ maxWidth: "70%" }}
                              >
                                {item.preview}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                  bgcolor: "rgba(85, 142, 153, 0.1)",
                                  p: 0.5,
                                  borderRadius: 1,
                                  ml: 1,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {item.time}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      {index < messages.slice(0, 3).length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
              <Box
                sx={{
                  p: 2,
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  startIcon={<MessageIcon />}
                  sx={{ color: "#2b6777" }}
                  endIcon={<ExpandMoreIcon />}
                >
                  View All Messages
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Calendar Section */}
        <Box >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Upcoming Events
          </Typography>

          <Card
            sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
          >
            <CardContent>
              <Grid container spacing={2}>
                {upcomingEvents.map((event) => (
                  <Grid item xs={12} md={4} key={event.id}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: .5,
                        borderRadius: 2,
                        bgcolor: "rgba(85, 142, 153, 0.05)",
                        border: "1px solid rgba(85, 142, 153, 0.1)",
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            bgcolor: "white",
                            borderRadius: 2,
                            p: 1.5,
                            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            minWidth: 60,
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight="bold"
                            color="#558e99"
                          >
                            {format(parseISO(event.date), "d")}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {format(parseISO(event.date), "MMM")}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle1"
                            fontWeight="medium"
                            mb={0.5}
                          >
                            {event.title}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              mb: 0.5,
                            }}
                          >
                            <AccessTimeIcon
                              sx={{ fontSize: 16, color: "text.secondary" }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {event.time}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <PeopleIcon
                              sx={{ fontSize: 16, color: "text.secondary" }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {event.location}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>

 
<Box mb={4} mt={5}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Quick Actions
          </Typography>

          <Grid container spacing={2}>
            {[
              {
                title: "Add New Teacher",
                icon: <SupervisorAccountIcon />,
                color: "#558e99",
              },
              {
                title: "Enroll Student",
                icon: <SchoolIcon />,
                color: "#2b6777",
              },
              { title: "Create Project", icon: <WorkIcon />, color: "#558e99" },
              {
                title: "Schedule Meeting",
                icon: <CalendarTodayIcon/>,
                color: "#2b6777",
              },
              {
                title: "Manage Classes",
                icon: <AssignmentIcon />,
                color: "#558e99",
              },
            ].map((action, index) => (
              <Grid item xs={6} md={15} lg={15 / 5} key={index}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    height: "100%",
                    borderColor: "rgba(85, 142, 153, 0.3)",
                    color: action.color,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    "&:hover": {
                      bgcolor: "rgba(85, 142, 153, 0.05)",
                      borderColor: action.color,
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: "50%",
                      bgcolor: "rgba(85, 142, 153, 0.1)",
                      color: action.color,
                      display: "flex",
                    }}
                  >
                    {action.icon}
                  </Box>
                  <Typography variant="body2" fontWeight="medium">
                    {action.title}
                  </Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 6, mb: 2, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © 2025 Campus Admin Dashboard. All rights reserved.
          </Typography>
        </Box>
    </Box>
  );
};

export default AdminHomePage;
