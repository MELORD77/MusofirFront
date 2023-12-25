import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import imageBg from "../../images/footerBox.png";
import person from "../../images/imagePerson.png";
import "./style.css";
import "../../Css/button.css";
import { useNavigate } from "react-router-dom";
export default function BrokerOffer({
  setViewBroker,
  setOfferModalOpen,
  totalCount,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        maxWidth={"xl"}
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "25px",
          left: "50%",
          transform: "translate(-50% )",
          height: { xs: "150px", md: "75px", lg: "150px" },
          backgroundSize: "100% 110%",
          backgroundImage: `url(${imageBg})`,
          display: { xs: "block", md: "flex" },
          px: 0,
          mt: 0,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Grid container spacing={{ xs: 0, md: 0 }} mx={1}>
          <Grid item>
            <Grid container spacing={{ xs: 0, md: 0 }} mx={0}>
              <Grid item xs={12}>
                <h1 className="footer-text">
                  Предлагаем вам {totalCount} очков и завершаем игру!
                </h1>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "start", md: "center" },
                }}
              >
                <button className="button" onClick={() => setViewBroker(false)}>
                  <Typography className="navbar-button">
                    Играть дальше
                  </Typography>
                </button>
              </Grid>
              <Grid item xs={6}>
                <button
                  className="buttonAgree"
                  onClick={() => {
                    setOfferModalOpen(true);
                  }}
                >
                  <Typography className="navbar-button">
                    Забрать приз
                  </Typography>
                </button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img src={person} alt="person" className="person" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
