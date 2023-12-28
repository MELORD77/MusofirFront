import { Box, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import coinIcon from "../../images/icons8-coin-48.png";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function ContentTools({ totalCount }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "50px", md: "40px", lg: "60px", xl: "90px" },
          display: "flex",
          px: 1,
          mb: 0,
          justifyContent: "space-between",
          alignItems: "center",
          // border: {
          //   xs: "1px solid red",
          //   md: "1px solid blue",
          //   lg: "1px solid yellow",
          //   xl: "1px solid green",
          // },
        }}
      >
        <Box>
          <button
            className="tools-button1"
            onClick={() => {
              navigate("/main");
            }}
          >
            <CloseIcon sx={{ color: "#f2f2f2", ml: 0 }} />
            <Typography
              sx={{ display: { xs: "none", md: "block" } }}
              variant="body"
              color={"#fff"}
              fontFamily={"Gilroy"}
              fontWeight={800}
            >
              {t("Завершить игру")}
            </Typography>
          </button>
        </Box>
        <Box>
          <h1 className="toolsText">{t("Новая игра")}</h1>
        </Box>
        <Box>
          {" "}
          <button className="tools-button1">
            {/* <InfoIcon sx={{ color: "#f2f2f2", ml: 0 }} /> */}
            <img src={coinIcon} alt="coin" width={25} />

            <Typography
              sx={{ display: { xs: "none", md: "block" } }}
              variant="body"
              color={"#fff"}
              fontFamily={"Gilroy"}
              // fontWeight={800}
            >
              {/* Total:
              <CountUp start={totalCount} duration={3} /> */}
              {t("Правила игры")}
            </Typography>
          </button>
        </Box>
      </Box>
    </>
  );
}
