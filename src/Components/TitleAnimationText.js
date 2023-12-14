import React from "react";
import "../Css/detail.css";
import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import Fade from "@mui/material/Fade";

export default function TitleAnimationText() {
  return (
    <div style={{ zIndex: 10, width: "100%" }}>
      <Grid
        container
        spacing={2}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item>
          <div className="detail_box">
            <Fade in={true} timeout={5000}>
              <h1>BORIGA BARAKA</h1>
            </Fade>
            <p>Обманчиво простая, невероятно интересная</p>
          </div>
          <Box component={NavLink} to={"/gift"} className="button-box">
            <button className="button"> Играть сейчас</button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
