import * as React from "react";

import { Skeleton, Box } from "@mui/material";
import "react-chat-elements/dist/main.css";

const GridData = [
  { id: 1, clicked: true },
  { id: 2, clicked: true },
  { id: 3, clicked: true },
  { id: 4, clicked: true },
  { id: 5, clicked: true },
  { id: 6, clicked: true },
  { id: 7, clicked: true },
  { id: 8, clicked: true },
  { id: 9, clicked: true },
  { id: 10, clicked: true },
  { id: 11, clicked: true },
  { id: 12, clicked: true },
  { id: 13, clicked: true },
  { id: 14, clicked: true },
  { id: 15, clicked: true },
  { id: 16, clicked: true },
  { id: 17, clicked: true },
  { id: 18, clicked: true },
  { id: 19, clicked: true },
  { id: 20, clicked: true },
  { id: 21, clicked: true },
  { id: 22, clicked: true },
  { id: 23, clicked: true },
  { id: 24, clicked: true },
];

export default function SkeletonPage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        alignContent: "start",
        gap: "8px",
        flexWrap: "wrap",
      }}
    >
      {GridData.map((e, index) => (
        <div key={index}>
          <Box className="giftBox">
            <Skeleton
              sx={{ bgcolor: "#1E2738" }}
              variant="rectangular"
              animation="pulse"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </div>
      ))}
    </div>
  );
}
