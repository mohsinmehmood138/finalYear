import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StudentsPage from "../StudentsPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import Grid from "@mui/material/Grid";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ListItemButton,
  Collapse,
  TextField,
  InputAdornment,
  Tooltip,
  Badge,
  Menu,
  MenuItem,
  ListItemAvatar,
  Avatar,
  Button,
  Divider
} from "@mui/material";
import AdminHomePage from "../HomePage";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MessageIcon from "@mui/icons-material/Message";


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
const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "students", title: "Students", icon: <PeopleAltIcon /> },
  { kind: "divider" },
  { kind: "header", title: "Analytics" },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      { segment: "sales", title: "Sales", icon: <DescriptionIcon /> },
      { segment: "traffic", title: "Traffic", icon: <DescriptionIcon /> },
    ],
  },
  { segment: "integrations", title: "Integrations", icon: <LayersIcon /> },
];
const drawerWidth = 240;
const theme = createTheme({
  palette: { mode: "light" },
  breakpoints: { values: { xs: 0, sm: 600, md: 600, lg: 1200, xl: 1536 } },
});
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const Skeleton = styled("div")(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));
const DashboardContent = () => (
    <AdminHomePage/>
  
);
const StudentsContent = () => (
 <StudentsPage/>
);
const SalesContent = () => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Sales Reports
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Skeleton height={300} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton height={300} />
      </Grid>
    </Grid>
  </Box>
);
const TrafficContent = () => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Traffic Analysis
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton height={400} />
      </Grid>
    </Grid>
  </Box>
);
const IntegrationsContent = () => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Integrations
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Skeleton height={150} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Skeleton height={150} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Skeleton height={150} />
      </Grid>
    </Grid>
  </Box>
);
export default function DashboardLayoutBasic() {
  const [open, setOpen] = React.useState(true);
  const [currentContent, setCurrentContent] = React.useState("dashboard");
  const [pageTitle, setPageTitle] = React.useState("Dashboard");
  const [openSubMenu, setOpenSubMenu] = React.useState({});
   const [anchorEl, setAnchorEl] = useState(null);
    const [notificationAnchor, setNotificationAnchor] = useState(null);
    const [messageAnchor, setMessageAnchor] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleNavClick = (segment, title) => {
   
    setCurrentContent(segment);
    setPageTitle(title);
  };
  const handleSubMenuClick = (segment) => {
    setOpenSubMenu((prev) => ({ ...prev, [segment]: !prev[segment] }));
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
  const renderContent = () => {
    switch (currentContent) {
      case "students":
        return <StudentsContent />;
      case "sales":
        return <SalesContent />;
      case "traffic":
        return <TrafficContent />;
      case "integrations":
        return <IntegrationsContent />;
      default:
        return <DashboardContent />;
    }
  };
  const renderNavItems = (items) => {
    return items.map((item) => {
      if (item.kind === "header") {
        return (
          <Typography
            key={item.title}
            variant="overline"
            sx={{ px: 3, py: 1, display: "block" }}
          >
            {item.title}
          </Typography>
        );
      }
      if (item.kind === "divider") {
        return (
          <Box
            key={Math.random()}
            sx={{ my: 1, borderTop: "1px solid rgba(0,0,0,0.12)" }}
          />
        );
      }
      if (item.children) {
        return (
          <React.Fragment key={item.segment}>
            <ListItemButton
              onClick={() => handleSubMenuClick(item.segment)}
              selected={currentContent === item.segment}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              {openSubMenu[item.segment] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={openSubMenu[item.segment]}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.children.map((child) => (
                  <ListItemButton
                    key={child.segment}
                    sx={{ pl: 4 }}
                    selected={currentContent === child.segment}
                    onClick={() => handleNavClick(child.segment, child.title)}
                  >
                    <ListItemIcon>{child.icon}</ListItemIcon>
                    <ListItemText primary={child.title} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        );
      }
      return (
        <ListItemButton
          key={item.segment}
          selected={currentContent === item.segment}
          onClick={() => handleNavClick(item.segment, item.title)}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      );
    });
  };
  return (
    <ThemeProvider theme={theme}>
       
      <Box sx={{ display: "flex" }}>
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
            onClick={!open?handleDrawerOpen:handleDrawerClose}
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
                  p:2
                },
              }}
            >
              <Box sx={{ p: 1, borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <Typography variant="h6">Notifications</Typography>
              </Box>
              {announcements.slice(0, 3).map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={handleNotificationClose}
                  sx={{ width:"100%",overflow:"hidden",paddingRight:10,my:1 }}
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
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <List> {renderNavItems(NAVIGATION)} </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader /> {renderContent()}
        </Main>
      </Box>
    </ThemeProvider>
  );
}
