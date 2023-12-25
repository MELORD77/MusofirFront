import * as React from "react";
import { Box, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "100px",
  color: "gold",
  boxShadow: 24,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(1px)",
  WebkitBackdropFilter: "blur(10px)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  p: 2,
  display: "flex",
  justifyContent: "center",
};

export default function NumberAttemptsDialog({
  open,
  setOpen,
  numberAttempts,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box sx={style}>
          <Typography variant="h1" fontFamily={"Vipnagorgialla"}>
            {numberAttempts}
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
