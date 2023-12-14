import React from "react";
import ResponsiveGrid from "../Container/ResponsiveGrid";
import { useState } from "react";
import { useEffect } from "react";
import { Box, Container } from "@mui/material";

export default function Sheets() {
  const [open, setOpen] = React.useState(false);
  const [alertInfo, setAlert] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [num, setNum] = useState(0);
  const [maxNum] = useState(8);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const Timer = () => {
    const timer = setTimeout(() => {
      // setAlert(false);
      // setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  };
  const handleClick = () => {
    setCount((prev) => prev + 1);
    if (num === 0) {
      setNum(randomNumberInRange(1, maxNum));
    }
    if (num !== 0 && num === count) {
      Timer();
      setCount(1);
      setNum(randomNumberInRange(1, maxNum));
      setAlert(true);
    }
  };

  useEffect(() => {
    // handleClick();
    Timer();
  }, []);
  return (
    <>
      <Container
        // maxWidth={"xxl"}
        sx={{
          height: "calc(100vh)",
          width: "100%",
        }}
      >
        <Box
          sx={{
            pt: "70px",
            height: "89vh",
            position: "relative",
            maxWidth: "100%",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              height: { xs: "45%", sm: 2, md: "40%", lg: "60%" },
              position: "relative",
              backgroundColor: "rgb(128,128,128,0.3) ",
              boxShadow: "1px 1px 5px 1px rgb(128,128,128,1)",
              borderRadius: "10px",
              pt: "10px",
              mt: "10px",
              mb: "10px",
            }}
          >
            <ResponsiveGrid
              handleClick={handleClick}
              open={open}
              setOpen={setOpen}
              num={num}
              alertInfo={alertInfo}
              setAlert={setAlert}
            />
          </Box>
          <Box
            sx={{
              height: "30%",
              position: "relative",
              backgroundColor: "rgb(128,128,128,0.3) ",
              boxShadow: "1px 1px 5px 1px rgb(128,128,128,1)",
              borderRadius: "10px",
              p: "10px",
            }}
          >
            {/* <AnimatedBoxComponent
                num={num}
                alertInfo={alertInfo}
                setAlert={setAlert}
                setLoading={setLoading}
              /> */}
          </Box>
        </Box>
      </Container>
    </>
  );
}
