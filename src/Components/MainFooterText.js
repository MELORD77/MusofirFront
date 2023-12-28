import React from "react";
import "../Css/detail.css";
import { Box, Grid, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";

export default function MainFooterText() {
  const { t } = useTranslation();
  return (
    <div style={{ zIndex: 10, width: "100%" }}>
      <Grid
        container
        spacing={2}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Grid item xs={12}>
          <div className="detail_box">
            <Fade in={true} timeout={5000}>
              <h1>{t("Особенности игры")}</h1>
            </Fade>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <p>
                {t(
                  `Неважно, покоряете ли вы рейтинговую таблицу или просто играете в свое удовольствие`
                ) + t(`Boriga Baraka — игра для вас.`)}
              </p>
            </Box>
          </div>
          {/* <Box component={NavLink} to={"/gift"} className="button-box">
            <button className="button"> Играть сейчас</button>
          </Box> */}
        </Grid>
        <Grid item>
          <Typography
            sx={{ display: { xs: "block", md: "none" } }}
            color={"#fff"}
            fontWeight={700}
            fontSize={24}
            lineHeight={1}
            align="center"
            width={"100%"}
          >
            {t(
              `Неважно, покоряете ли вы рейтинговую таблицу или просто играете в свое удовольствие`
            ) + t(`Boriga Baraka — игра для вас.`)}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
