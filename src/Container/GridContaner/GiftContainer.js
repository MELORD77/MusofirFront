import React, { useEffect, useState } from "react";
import { Backdrop, Button, Container, Grid } from "@mui/material";
import ResponsiveGrid from "../ResponsiveGrid";
import { motion } from "framer-motion";
import "./style.css";
import imageBg from "../../images/Rectangle10.png";
import ResponsiveAppBar from "../Navbar";
import ContentTools from "./ContentTools";
import GiftFooter from "./giftFooter";
import SkeletonPage from "../../Components/Skeleton";
import useImage from "react-use-image";
import cardImage from "../../images/ContentImage.png";
import useSound from "use-sound";
import click_sound from "../../sounds/sound.wav";
import CustomizedDialogs from "../../Components/dialog_Component";
import ResultDialog from "../../Components/Result_dialog";
import NumberAttemptsDialog from "../../Components/Number_attempts_dialog";
import BrokerOffer from "./BrokerOffer";

let count = 0;
let countBroker = 0;
export default function GiftContainer() {
  const { loaded } = useImage(cardImage);
  const [play] = useSound(click_sound);
  const [open, setOpen] = React.useState(true);
  const [numberAttempts, setNumberAttempts] = useState(3);
  const [offerModalOpen, setOfferModalOpen] = React.useState(false);
  const [openAttemptsNumber, setOpenAttemptsNumber] = React.useState(true);
  const [lastPoint, setLastPoint] = useState(0);
  const handleOpenBack = () => {
    // setOpenAttemptsNumber(true);
    // setOfferModalOpen(true);
  };
  const [viewBroker, setViewBroker] = useState(false);
  const [data, setData] = React.useState([
    { id: 1, clicked: false, count: null },
    { id: 2, clicked: false, count: null },
    { id: 3, clicked: false, count: null },
    { id: 4, clicked: false, count: null },
    { id: 5, clicked: false, count: null },
    { id: 6, clicked: false, count: null },
    { id: 7, clicked: false, count: null },
    { id: 8, clicked: false, count: null },
    { id: 9, clicked: false, count: null },
    { id: 10, clicked: false, count: null },
    { id: 11, clicked: false, count: null },
    { id: 12, clicked: false, count: null },
    { id: 13, clicked: false, count: null },
    { id: 14, clicked: false, count: null },
    { id: 15, clicked: false, count: null },
    { id: 16, clicked: false, count: null },
    { id: 17, clicked: false, count: null },
    { id: 18, clicked: false, count: null },
    { id: 19, clicked: false, count: null },
    { id: 20, clicked: false, count: null },
    { id: 21, clicked: false, count: null },
    { id: 22, clicked: false, count: null },
    { id: 23, clicked: false, count: null },
    { id: 24, clicked: false, count: null },
  ]);

  const generateRandomNumber = (num) => {
    const newRandomNumber = Math.floor(Math.random() * 9) * 10 + 10;
    return newRandomNumber;
  };

  const generateRandomClick = (maxValue) => {
    const newRandomNumber = Math.floor(Math.random() * (maxValue - 1 + 1)) + 1;
    return newRandomNumber;
  };

  const countClickedTrue = () => {
    const clickedTrueCount = data.filter((item) => item.clicked).length;
    return 22 - clickedTrueCount;
  };

  const sumCounts = () => {
    const totalCount = data.reduce((sum, item) => sum + (item.count || 0), 0);
    return totalCount;
  };

  // Example usage:

  const handleClick = (id) => {
    // Find the clicked item by id
    const clickedItem = data.find((item) => item.id === id);
    count++;
    setLastPoint(clickedItem.count);

    if (count === numberAttempts) {
      countBroker++;
      if (countBroker % 2 === 0) {
        setViewBroker(true);
      }
      setOpenAttemptsNumber(true);
      countClickedTrue() > 2 &&
        setNumberAttempts(
          generateRandomClick(countClickedTrue() > 8 ? 6 : countClickedTrue())
        );

      count = 0;
    }
    if (clickedItem && !clickedItem.clicked) {
      // Update the clicked property
      clickedItem.clicked = true;
      clickedItem.count = generateRandomNumber();

      // Create a new array with the updated item
      const updatedData = data.map((item) =>
        item.id === id ? clickedItem : item
      );

      // Update the state with the new array
      setData(updatedData);
      sumCounts();
      if (countClickedTrue() === -1) {
        setOpen(false);
        lastPoint > 0 && setOfferModalOpen(true);
      }
      play();
    }
  };

  // <Button onClick={handleOpen}>Show backdrop</Button>;
  // <Button onClick={handleOpen}>Show backdrop</Button>;
  useEffect(() => {
    const delay = 1000; // Delay in milliseconds
    viewBroker && setOpenAttemptsNumber(false);
    !viewBroker && setOpenAttemptsNumber(true);
    const timer = setTimeout(() => {
      setOpenAttemptsNumber(false);
      handleOpenBack();
    }, delay);

    // Clean up the timer when the component unmounts or changes
    return () => clearTimeout(timer);
  }, [numberAttempts, viewBroker]);
  return (
    <motion.div
      style={{
        backgroundImage: `url(${imageBg})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ResponsiveAppBar />
      <Container
        maxWidth={"xl"}
        sx={{
          px: { xs: 0, md: 10, lg: 10 },
          pt: { xs: 1, md: 0, lg: 0 },
          position: "relative",
          height: "92vh",
        }}
      >
        <Grid container>
          <ContentTools totalCount={sumCounts()} />
          <Grid item xs={12} md={12}>
            {loaded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <ResponsiveGrid
                  cardImage={cardImage}
                  handleClick={handleClick}
                  data={data}
                  setData={setData}
                  setLastPoint={setLastPoint}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <SkeletonPage />
              </motion.div>
            )}
          </Grid>
        </Grid>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={viewBroker}
          // onClick={handleClose}
        >
          <BrokerOffer
            viewBroker={viewBroker}
            setViewBroker={setViewBroker}
            setOfferModalOpen={setOfferModalOpen}
            totalCount={100}
          />
        </Backdrop>
        {!viewBroker && (
          <GiftFooter
            numberAttempts={numberAttempts}
            countClickedTrue={countClickedTrue}
          />
        )}

        <NumberAttemptsDialog
          open={openAttemptsNumber}
          numberAttempts={numberAttempts}
          setOpen={setOpenAttemptsNumber}
        />
        <CustomizedDialogs open={open} setOpen={setOpen} />
        <ResultDialog
          countClickedTrue={countClickedTrue}
          viewBroker={viewBroker}
          setViewBroker={setViewBroker}
          data={data}
          setData={setData}
          totalCount={lastPoint}
          open={offerModalOpen}
          setOpen={setOfferModalOpen}
        />
      </Container>
    </motion.div>
  );
}
