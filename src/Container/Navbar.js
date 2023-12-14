import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import "../Css/navbar.css";
import "../Css/button.css";
import logo from "../images/Logo1.png";
import { Grid, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import textImage from "../images/Boriga-Baraka.svg";

function ResponsiveAppBar() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <AppBar position={"sticky"} className="Navbar-image">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          variant="dense"
          className="toolbar"
          sx={{ minHeight: "8vh" }}
        >
          {/* Mobile version */}
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              px: 2,
            }}
          >
            <Box component={NavLink} to={"/"} sx={{}}>
              <img src={logo} alt={"logo"} width={"40px"} />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <img src={textImage} alt={"logo"} width={"220px"} />
            </Box>
            <Box>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="U" src="" />
              </IconButton>
            </Box>

            {/* DescTop version */}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              component={NavLink}
              to={"/"}
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
            >
              <img src={logo} alt={"logo"} width={"40px"} />
            </Box>
            <Grid
              container
              justifyContent={"start"}
              alignItems={"center"}
              sx={{ pt: 1 }}
            >
              <Grid item>
                <img src={textImage} alt={"logo"} width={"180px"} />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              height: "40px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <button className="button1">
              <PermIdentityIcon sx={{ color: "#f2f2f2" }} />
              <Typography className="navbar-button1">Учетная запись</Typography>
            </button>
            <button className="button">
              <Typography className="navbar-button">Авторизация</Typography>
            </button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
