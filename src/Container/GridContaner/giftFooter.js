import { Box } from "@mui/material";
import React from "react";
import imageBg from "../../images/footerBox.png";
import person from "../../images/imagePerson.png";
import "./style.css";
import { useTranslation } from "react-i18next";
export default function GiftFooter({ numberAttempts, countClickedTrue }) {
  const { t } = useTranslation();
  return (
    <>
      <Box
        maxWidth={"xl"}
        sx={{
          width: "100%",
          position: "absolute",
          bottom: { xs: "50px", md: "5px", lg: "0px", xl: "25px" },
          left: "50%",
          transform: "translate(-50% )",
          height: { xs: "120px", md: "75px", lg: "100px", xl: "150px" },
          backgroundSize: "100% 110%",
          backgroundImage: `url(${imageBg})`,
          display: { xs: "flex", md: "flex" },
          px: 0,
          mt: 4,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "280px", md: "500px" } }}>
          <h1 className="footer-text">
            {countClickedTrue() > 0
              ? `${t("Выберите ") + numberAttempts + t(" произвольные карты")}`
              : t("Выбранная карта станет вашей")}
          </h1>
        </Box>

        <Box>
          <img src={person} alt="person" className="person" />
        </Box>
      </Box>
    </>
  );
}
