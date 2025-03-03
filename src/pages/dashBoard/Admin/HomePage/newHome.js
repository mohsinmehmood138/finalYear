import React, { useState } from "react";
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
  Menu,
  MenuItem,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Chip,
  AvatarGroup,
  LinearProgress,
  Paper,
  InputAdornment,
} from "@mui/material";
import { format, parseISO } from "date-fns";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


// Mock data
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

const projects = [
  {
    id: 1,
    title: "Curriculum Update",
    description: "Revising the computer science curriculum",
    progress: 75,
    deadline: "2025-03-15",
    team: [
      { name: "Alice", avatar: "/images/alice.jpg" },
      { name: "Bob", avatar: "/images/bob.jpg" },
      { name: "Charlie", avatar: "/images/charlie.jpg" },
      { name: "David", avatar: "/images/david.jpg" },
    ],
    tasks: { completed: 15, total: 20 },
  },
  {
    id: 2,
    title: "Faculty Evaluation System",
    description: "Developing a new evaluation platform",
    progress: 40,
    deadline: "2025-04-10",
    team: [
      { name: "Eve", avatar: "/images/eve.jpg" },
      { name: "Frank", avatar: "/images/frank.jpg" },
      { name: "Grace", avatar: "/images/grace.jpg" },
    ],
    tasks: { completed: 8, total: 20 },
  },
  {
    id: 3,
    title: "Campus App Redesign",
    description: "Updating the mobile app for students",
    progress: 60,
    deadline: "2025-03-20",
    team: [
      { name: "Heidi", avatar: "/images/heidi.jpg" },
      { name: "Ivan", avatar: "/images/ivan.jpg" },
    ],
    tasks: { completed: 6, total: 10 },
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

const sidebarItems = [
  { text: "Dashboard", icon: <DashboardIcon />, active: true },
  { text: "Teachers", icon: <SupervisorAccountIcon /> },
  { text: "Students", icon: <SchoolIcon /> },
  { text: "Projects", icon: <WorkIcon /> },
  { text: "Calendar", icon: <CalendarTodayIcon /> },
  { text: "Messages", icon: <MessageIcon /> },
  { text: "Announcements", icon: <NotificationsIcon /> },
  { text: "Settings", icon: <SettingsIcon /> },
];

const AdminHomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const today = format(new Date(), "EEEE, MMMM d, yyyy | hh:mm a");

  const [drawerOpen, setDrawerOpen] = useState(!isMobile);
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const [messageAnchor, setMessageAnchor] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNotificationOpen = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const handleMessageOpen = (event) => {
    setMessageAnchor(event.currentTarget);
  };

  const handleMessageClose = () => {
    setMessageAnchor(null);
  };

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#2b6777",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Campus Admin Dashboard
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
                  bgcolor: "rgba(255,255,255,0.1)",
                  color: "white",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.15)",
                  },
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.3)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  "&::placeholder": {
                    color: "rgba(255,255,255,0.7)",
                    opacity: 1,
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "rgba(255,255,255,0.7)" }} />
                  </InputAdornment>
                ),
              }}
            />

            <Tooltip title="Notifications">
              <IconButton
                color="inherit"
                onClick={handleNotificationOpen}
                aria-haspopup="true"
              >
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={notificationAnchor}
              open={Boolean(notificationAnchor)}
              onClose={handleNotificationClose}
              PaperProps={{
                sx: {
                  width: 320,
                  maxHeight: 400,
                  mt: 1.5,
                  borderRadius: 2,
                },
              }}
            >
              <Box sx={{ p: 2, borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <Typography variant="h6">Notifications</Typography>
              </Box>
              {announcements.slice(0, 3).map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={handleNotificationClose}
                  sx={{ py: 1.5 }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: item.iconBg }}>{item.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" fontWeight="medium">
                        {item.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary">
                        {item.time}
                      </Typography>
                    }
                  />
                </MenuItem>
              ))}
              <Box
                sx={{
                  p: 1.5,
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <Button size="small" sx={{ color: "#558e99" }}>
                  View All Notifications
                </Button>
              </Box>
            </Menu>

            <Tooltip title="Messages">
              <IconButton
                color="inherit"
                onClick={handleMessageOpen}
                aria-haspopup="true"
              >
                <Badge badgeContent={2} color="primary">
                  <MessageIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={messageAnchor}
              open={Boolean(messageAnchor)}
              onClose={handleMessageClose}
              PaperProps={{
                sx: {
                  width: 320,
                  maxHeight: 400,
                  mt: 1.5,
                  borderRadius: 2,
                },
              }}
            >
              <Box sx={{ p: 2, borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <Typography variant="h6">Messages</Typography>
              </Box>
              {messages.slice(0, 3).map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={handleMessageClose}
                  sx={{ py: 1.5 }}
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
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography variant="body1" fontWeight="medium">
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
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {item.preview}
                      </Typography>
                    }
                  />
                </MenuItem>
              ))}

              <Box
                sx={{
                  p: 1.5,
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                <Button size="small" sx={{ color: "#558e99" }}>
                  View All Messages
                </Button>
              </Box>
            </Menu>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 1.5, bgcolor: "rgba(255,255,255,0.3)" }}
            />

            <Tooltip title="Account">
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleProfileMenuOpen}
                aria-haspopup="true"
              >
                <Avatar
                  src="/profile.jpg"
                  sx={{
                    width: 40,
                    height: 40,
                    border: "2px solid white",
                  }}
                />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  width: 200,
                  mt: 1.5,
                  borderRadius: 2,
                },
              }}
            >
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  src="/profile.jpg"
                  sx={{
                    width: 60,
                    height: 60,
                    mx: "auto",
                    mb: 1,
                    border: "3px solid #558e99",
                  }}
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  John Doe
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Administrator
                </Typography>
              </Box>
              <Divider />
              <MenuItem onClick={handleMenuClose}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 28, height: 28, bgcolor: "#558e99" }}>
                    <SupervisorAccountIcon fontSize="small" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="My Profile" />
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 28, height: 28, bgcolor: "#558e99" }}>
                    <SettingsIcon fontSize="small" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Settings" />
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleMenuClose}>
                <ListItemAvatar>
                  <Avatar sx={{ width: 28, height: 28, bgcolor: "#f44336" }}>
                    <LogoutIcon fontSize="small" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Logout" />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#f8f9fa",
            borderRight: "1px solid rgba(0,0,0,0.08)",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", py: 2 }}>
          <Box sx={{ px: 2, mb: 3 }}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 2, px: 1 }}
            >
              MAIN MENU
            </Typography>
            <List>
              {sidebarItems.slice(0, 4).map((item, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    mb: 0.5,
                    borderRadius: 2,
                    bgcolor: item.active
                      ? "rgba(43, 103, 119, 0.1)"
                      : "transparent",
                    "&:hover": {
                      bgcolor: "rgba(43, 103, 119, 0.05)",
                    },
                  }}
                >
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      px: 2,
                      py: 1.2,
                      color: item.active ? "#2b6777" : "text.primary",
                      fontWeight: item.active ? "medium" : "regular",
                      "&:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                    startIcon={
                      <Box
                        sx={{
                          color: item.active ? "#2b6777" : "text.secondary",
                          mr: 1,
                        }}
                      >
                        {item.icon}
                      </Box>
                    }
                  >
                    {item.text}
                    {item.active && (
                      <Box
                        sx={{
                          width: 4,
                          height: 20,
                          bgcolor: "#2b6777",
                          borderRadius: 1,
                          position: "absolute",
                          left: 0,
                        }}
                      />
                    )}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box sx={{ px: 2, mb: 3 }}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 2, px: 1 }}
            >
              SYSTEM
            </Typography>
            <List>
              {sidebarItems.slice(4).map((item, index) => (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    mb: 0.5,
                    borderRadius: 2,
                    bgcolor: item.active
                      ? "rgba(43, 103, 119, 0.1)"
                      : "transparent",
                    "&:hover": {
                      bgcolor: "rgba(43, 103, 119, 0.05)",
                    },
                  }}
                >
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      px: 2,
                      py: 1.2,
                      color: item.active ? "#2b6777" : "text.primary",
                      fontWeight: item.active ? "medium" : "regular",
                      "&:hover": {
                        bgcolor: "transparent",
                      },
                    }}
                    startIcon={
                      <Box
                        sx={{
                          color: item.active ? "#2b6777" : "text.secondary",
                          mr: 1,
                        }}
                      >
                        {item.icon}
                      </Box>
                    }
                  >
                    {item.text}
                    {item.active && (
                      <Box
                        sx={{
                          width: 4,
                          height: 20,
                          bgcolor: "#2b6777",
                          borderRadius: 1,
                          position: "absolute",
                          left: 0,
                        }}
                      />
                    )}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ px: 2, mt: "auto" }}>
            <Card
              sx={{
                bgcolor: "rgba(43, 103, 119, 0.05)",
                borderRadius: 3,
                p: 2,
              }}
            >
              <Typography variant="subtitle2" mb={1}>
                Need Help?
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Contact our support team for assistance.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#558e99",
                  "&:hover": {
                    bgcolor: "#2b6777",
                  },
                }}
              >
                Contact Support
              </Button>
            </Card>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {/* Welcome Header */}
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
              <IconButton
                sx={{
                  bgcolor: "white",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.05)",
                  },
                }}
              >
                <FilterListIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>

        {/* Stats Overview */}
        <Grid container spacing={3} mb={4}>
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

        {/* Projects Section */}
        <Box mb={4}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h5" fontWeight="bold">
              Active Projects
            </Typography>
            <Button
              startIcon={<AddIcon />}
              sx={{
                color: "#558e99",
                "&:hover": {
                  bgcolor: "rgba(43, 103, 119, 0.05)",
                },
              }}
            >
              New Project
            </Button>
          </Box>

          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid item xs={12} md={4} key={project.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {project.title}
                      </Typography>
                      <IconButton size="small">
                        <MoreVertIcon />
                      </IconButton>
                    </Box>

                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 0.5,
                        }}
                      >
                        <Typography variant="body2" fontWeight="medium">
                          Progress
                        </Typography>
                        <Typography variant="body2" fontWeight="medium">
                          {project.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={project.progress}
                        sx={{
                          height: 8,
                          borderRadius: 4,
                          bgcolor: "rgba(0,0,0,0.05)",
                          "& .MuiLinearProgress-bar": {
                            bgcolor: "#558e99",
                          },
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccessTimeIcon
                          sx={{
                            fontSize: 16,
                            color: "text.secondary",
                            mr: 0.5,
                          }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          Due:{" "}
                          {format(parseISO(project.deadline), "MMM d, yyyy")}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleIcon
                          sx={{ fontSize: 16, color: "success.main", mr: 0.5 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {project.tasks.completed}/{project.tasks.total} tasks
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <AvatarGroup max={4}>
                        {project.team.map((member, i) => (
                          <Tooltip title={member.name} key={i}>
                            <Avatar
                              src={member.avatar}
                              sx={{ width: 30, height: 30 }}
                            />
                          </Tooltip>
                        ))}
                      </AvatarGroup>
                      <Button
                        size="small"
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{ color: "#558e99" }}
                      >
                        Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

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
        <Box mb={4}>
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
                        p: 2,
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

        {/* Quick Actions */}
        <Box mb={4}>
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
                icon: <CalendarTodayIcon />,
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
    </Box>
  );
};

export default AdminHomePage;
