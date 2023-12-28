import React from "react";
import "../Css/video.css";
import "../Css/giftBox.css";
import "../Css/scroll.css";
import "../Css/cardBody.css";
import { Box, Container, Grid } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import TitleAnimationText from "../Components/TitleAnimationText";
import MarqueeComponent from "../Components/Marquee";
import FooterComponent from "./FooterComponent";

import { motion } from "framer-motion";
import MainFooterText from "../Components/MainFooterText";
const ResponsiveAppBar = React.lazy(() => import("./Navbar"));

const MainPage = () => {
  const size = useWindowSize();
  const mainHeight = size.height === null ? "77vh" : ` ${size.height - 0}px`;
  const animationStyles = {
    height: "91vh",

    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ResponsiveAppBar />
      <Grid container p={1} spacing={2}>
        <Grid item xs={12}>
          <Box sx={animationStyles}>
            <TitleAnimationText />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              height: mainHeight - 180,
            }}
          >
            <MainFooterText />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mt: 15 }}>
            <FooterComponent />
          </Box>
        </Grid>
        <MarqueeComponent />
      </Grid>
    </motion.div>
  );
};
export default MainPage;
