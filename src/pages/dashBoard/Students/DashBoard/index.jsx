import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import Grid from "@mui/material/Grid";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AppHeader from "../../../component/ui/AppHeader";
const NAVIGATION = [
  { kind: "header", title: "Main items" },
  { segment: "dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "Students", title: "Students", icon: <PeopleAltIcon /> },
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
  <Grid container spacing={1}>
    <Grid item xs={12}>
      <Skeleton height={14} />
    </Grid>
    <Grid item xs={12}>
      <Skeleton height={14} />
    </Grid>
    <Grid item xs={4}>
      <Skeleton height={100} />
    </Grid>
    <Grid item xs={8}>
      <Skeleton height={100} />
    </Grid>
    <Grid item xs={12}>
      <Skeleton height={150} />
    </Grid>
    <Grid item xs={12}>
      <Skeleton height={14} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton height={100} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton height={100} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton height={100} />
    </Grid>
    <Grid item xs={3}>
      <Skeleton height={100} />
    </Grid>
  </Grid>
);
const OrdersContent = () => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Orders
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton height={200} />
      </Grid>
    </Grid>
  </Box>
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
  const [open, setOpen] = React.useState(false);
  const [currentContent, setCurrentContent] = React.useState("dashboard");
  const [pageTitle, setPageTitle] = React.useState("Dashboard");
  const [openSubMenu, setOpenSubMenu] = React.useState({});
  const handleDrawerOpen = () => {
    setOpen(true);
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
  const renderContent = () => {
    switch (currentContent) {
      case "students":
        return <OrdersContent />;
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
      <AppBar
  position="fixed"
  sx={{
    padding: "4px 30px", 
    backgroundColor: "#558e99", 
    zIndex: (theme) => theme.zIndex.drawer + 1,
    width: "100%",
    ml: `${drawerWidth}px`,
    transition: (theme) =>
      theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  }}
>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={!open ? handleDrawerOpen : handleDrawerClose}
              edge="start"
              //   sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {pageTitle}
            </Typography>
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
