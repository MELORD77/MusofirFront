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
import { Grid, IconButton, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import textImage from "../images/Boriga-Baraka.svg";
import { useTranslation } from "react-i18next";
import NavbarLanguagesDropdown from "../Components/NavbarLanguageDropdown";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
function ResponsiveAppBar() {
  const { t } = useTranslation();
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
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
              px: 0,
            }}
          >
            <Box component={NavLink} to={"/"}>
              <img src={logo} alt={"logo"} width={"45px"} height={"40px"} />
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <img src={textImage} alt={"logo"} width={"220px"} />
            </Box>
            <NavbarLanguagesDropdown />
            <Box sx={{ display: "none" }}>
              <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                <Avatar alt="U" src="" />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
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
            <NavbarLanguagesDropdown />
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
              <Typography className="navbar-button1">
                {t("Учетная запись")}
              </Typography>
            </button>
            <button className="button_auth_navbar">
              <Typography className="navbar-button">
                {t("Авторизация")}
              </Typography>
            </button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
