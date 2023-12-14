import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Grid
        container
        spacing={0}
        minHeight={160}
        sx={{
          my: 4,
          px: { xs: 0, md: 10 },
        }}
      >
        <Grid
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={{ xs: 1, md: 3 }}
          mb={4}
        >
          <div style={{ borderRadius: "20px", overflow: "hidden", zIndex: 1 }}>
            <iframe
              title="YouTube Video Player"
              src={`https://www.youtube.com/embed/${"yq4JuYcs69w"}`}
              allowFullScreen
              height={240}
              width={"100%"}
              style={{ borderRadius: "20px" }}
              frameborder="0"
            />
            <Typography
              color={"#fff"}
              fontWeight={700}
              fontSize={24}
              lineHeight={1.2}
              align="center"
              width={"100%"}
            >
              Boriga Baraka 2-Mavsum 25-son Bitta emas naqt ikkita! (11.08.2023)
            </Typography>
          </div>
        </Grid>
        <Grid
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={{ xs: 1, md: 3 }}
          mb={4}
        >
          <div style={{ borderRadius: "20px", overflow: "hidden", zIndex: 1 }}>
            <iframe
              title="YouTube Video Player"
              src={`https://www.youtube.com/embed/${"yq4JuYcs69w"}`}
              allowFullScreen
              height={240}
              width={"100%"}
              style={{ borderRadius: "20px" }}
              frameborder="0"
            />
            <Typography
              color={"#fff"}
              fontWeight={700}
              fontSize={24}
              lineHeight={1.2}
              align="center"
              width={"100%"}
            >
              Boriga Baraka 2-Mavsum 25-son Bitta emas naqt ikkita! (11.08.2023)
            </Typography>
          </div>
        </Grid>
        <Grid
          xs={12}
          md={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={{ xs: 1, md: 3 }}
          mb={4}
        >
          <div style={{ borderRadius: "20px", overflow: "hidden", zIndex: 1 }}>
            <iframe
              title="YouTube Video Player"
              src={`https://www.youtube.com/embed/${"yq4JuYcs69w"}`}
              allowFullScreen
              height={240}
              width={"100%"}
              style={{ borderRadius: "20px" }}
              frameborder="0"
            />
            <Typography
              color={"#fff"}
              fontWeight={700}
              fontSize={24}
              lineHeight={1.2}
              align="center"
              width={"100%"}
            >
              Boriga Baraka 2-Mavsum 25-son Bitta emas naqt ikkita! (11.08.2023)
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
