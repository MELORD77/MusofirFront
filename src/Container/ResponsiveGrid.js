import * as React from "react";
import "../Css/giftBox.css";
import { Box } from "@mui/material";
import "react-chat-elements/dist/main.css";
import cardFooterImage from "../images/footer.svg";
import cardHeader from "../images/cardHeader.svg";
import cardHeaderBorder from "../images/cardHeaderBorder.svg";
import cardHeaderFooter from "../images/cardHeaderFooter.svg";
import cardCenter from "../images/cardCenter.svg";
import romp from "../images/romp.svg";
import { motion } from "framer-motion";

export default function ResponsiveGrid({
  open,
  setOpen,
  imageLoaded,
  data,
  setData,
  cardImage,
  handleClick,
}) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          alignContent: "flex-start",
          gap: "10px",
          flexWrap: "wrap",
          // border: "1px solid red",
        }}
      >
        {data.map((e, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            key={index}
            className="giftGrid"
            onClick={() => {
              handleClick(e.id);
            }}
          >
            {e.clicked ? (
              <motion.div style={{ borderRadius: "8px" }}>
                <Box className="giftBox">
                  <div className="headerCard">
                    <img
                      loading="lazy"
                      className="card-Header-footer"
                      src={cardHeaderFooter}
                      alt="card"
                    />
                    <img
                      loading="lazy"
                      className="card-header-border"
                      src={cardHeaderBorder}
                      alt="card"
                    />
                    <img
                      loading="lazy"
                      className="card-Header-Black"
                      src={cardHeader}
                      alt="card"
                    />
                    <h1 className="header-text">Boriga Baraka</h1>
                  </div>
                  <Box
                    sx={{
                      width: "97%",
                      ml: "2%",
                      mt: "2%",
                      borderRadius: "5px",
                      height: "98%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    <Box>
                      <h1 className="pointCount">{e.count} </h1>
                      <h1 className="pointCountText"> очков</h1>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ) : (
              <motion.div style={{ display: "block" }}>
                <Box className="giftBox">
                  <div className="headerCard">
                    <img
                      loading="lazy"
                      className="card-Header-footer"
                      src={cardHeaderFooter}
                      alt="card"
                    />
                    <img
                      loading="lazy"
                      className="card-header-border"
                      src={cardHeaderBorder}
                      alt="card"
                    />
                    <img
                      loading="lazy"
                      className="card-Header-Black"
                      src={cardHeader}
                      alt="card"
                    />
                    <h1 className="header-text">Boriga Baraka</h1>
                  </div>

                  <Box className="cardContent">
                    <img
                      className="image-content"
                      loading="lazy"
                      effect="blur"
                      alt={"card"}
                      src={cardImage} // use normal <img> attributes as props
                      width={"100%"}
                    />
                  </Box>
                  <Box className="cardFooter">
                    <Box className="cardCenter">
                      <img
                        loading="lazy"
                        src={cardCenter}
                        alt="cardFooter"
                        width={"100%"}
                      />
                    </Box>
                    <Box>
                      <img
                        loading="lazy"
                        className="cardRomp"
                        src={romp}
                        alt="cardFooter"
                      />
                    </Box>
                    <img
                      className="cardFooterImage"
                      loading="lazy"
                      src={cardFooterImage}
                      alt="cardFooter"
                      width={"100%"}
                    />
                    <button className="card-Button">
                      <h1 className="button-text"> открыть</h1>
                    </button>
                  </Box>
                </Box>
              </motion.div>
            )}
          </motion.div>
        ))}
      </Box>

      {/* <ResponsiveDialog open={open} setOpen={setOpen} /> */}
      {/* {alert && ( */}
      {/* )} */}
    </>
  );
}
