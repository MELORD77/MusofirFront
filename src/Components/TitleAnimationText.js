import React from "react";
import "../Css/detail.css";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";

export default function TitleAnimationText() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div style={{ zIndex: 10, width: "100%" }}>
      <Grid
        container
        spacing={2}
        rowSpacing={4}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <div className="detail_box">
            <Fade in={true} timeout={5000}>
              <h1>BORIGA BARAKA</h1>
            </Fade>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <p>{t("Обманчиво простая, невероятно интересная")}</p>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{ display: { xs: "block", md: "none" } }}
            color={"#fff"}
            fontWeight={700}
            fontSize={24}
            lineHeight={1}
            align="center"
            width={"100%"}
          >
            {t("Обманчиво простая, невероятно интересная")}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="button-box"
            onClick={() => {
              navigate("/gift");
            }}
          >
            <button className="button">{t("Играть сейчас")}</button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
