import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../Css/modalText.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    // width: "70%",
    padding: theme.spacing(2),
    backgroundColor: "#09002F",
    color: "#fff",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    backgroundColor: "#09002F",
    color: "#fff",
  },
}));

export default function EndDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, bgcolor: "#09002F", color: "#fff" }}
          id="customized-dialog-title"
        >
          {/* Modal title */}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2}>
              <div className="modal_block">
                <h1>Добро пожаловать в игру Boriga Baraka</h1>
                <p>
                  Обманчиво простая, невероятно интересная игра. Где каждый
                  может выиграть.
                </p>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <button onClick={handleClose} className="button">
                    {" "}
                    Начать игру
                  </button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
                  <button className="button_outlined">
                    Ознакомиться с правилами
                  </button>
                </Box>
              </div>
            </Stack>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
