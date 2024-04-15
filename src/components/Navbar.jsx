import React, { useContext , useState} from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logonew from '../components/images/logonew.png'
const drawerWidth = 250;



function Navbar(props) {
  const navigate= useNavigate()
  const {isAuthenticated }=  useContext(AuthContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
   
  const loginhandler=()=>{
    navigate("pages/Login")
  }
  const handleHome =()=>{
    navigate('/pages/Home')
  }
  const Abouthandler = () => {
    navigate("pages/About");
  };

  const Postshandler = () => {
    navigate("pages/Posts");
  };
  const profilehandler = () => {
    navigate("pages/Profile");
  };
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, ml: 5 }}>
        <img src="" alt="logo" />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Home"} onClick={handleHome} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Posts"} onClick={Postshandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"About"} onClick={Abouthandler} />
          </ListItemButton>
        </ListItem>
        {isAuthenticated ?(<ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Profile"} onClick={profilehandler} />
            </ListItemButton>
          </ListItem>
        )
          : (<ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Login"} onClick={loginhandler} />
            </ListItemButton>
          </ListItem>
        ) } 
          
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "100px" }} >
      <AppBar component="nav" color="default" style={{    backgroundColor: 'rgba(8, 65, 92, 0.8)', // Background color with transparency
    backdropFilter: 'blur(10px)', // Apply blur effect
    WebkitBackdropFilter: 'blur(10px)', // For older browsers
}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            <img src={logonew} alt="logo" onClick={handleHome} style={{ width: "50px", height: "auto" }} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" }, mx: 2 }}>
           
            <Button onClick={Postshandler} sx={{ color: "#F1BF98", mx: 1 , fontWeight: 'bold','&:hover': {
      backgroundColor: 'rgba(8, 65, 92, 0.8)' // Adjust the color and opacity as needed
    }}}>
              Posts
            </Button>
            <Button onClick={Abouthandler} sx={{ color: "#F1BF98", mx: 1 , fontWeight: 'bold','&:hover': {
      backgroundColor: 'rgba(8, 65, 92, 0.8)' // Adjust the color and opacity as needed
    }}}>
              About
            </Button>
            {isAuthenticated ? <Link to={"/pages/Profile"}><PersonIcon /></Link>:  <Button
              variant="outlined"
              onClick={loginhandler}
              sx={{ color: "#CC2936" }}
            >
              Login
            </Button>}
      
          </Box>{" "}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#CC2936" }}
          >
            <MenuIcon color="#CC2936" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer // mobile resposiveness
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {},
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
export default Navbar;
