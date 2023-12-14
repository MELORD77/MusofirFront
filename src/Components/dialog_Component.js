import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../Css/modalText.css";
import { Box, Stack } from "@mui/material";
// import { NavLink } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "&.css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
    // width: "70%",
    padding: theme.spacing(2),
    backgroundColor: "#09002F",
    borderRadius: "20px",
    color: "#fff",
  },

  "& .MuiDialogContent-root": {
    // width: "70%",
    padding: theme.spacing(2),
    backgroundColor: "#09002F",
    borderRadius: "0px",
    color: "#fff",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    backgroundColor: "#09002F",
    color: "#fff",
  },
}));
const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: 80,
  color: "gold",
  boxShadow: 24,
  // backgroundColor: "rgba(255, 255, 255, 0.1)",
  backgroundColor: "red",
  backdropFilter: "blur(1px)",
  WebkitBackdropFilter: "blur(10px)",
  // borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  p: 2,
};

export default function CustomizedDialogs({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
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
    </>
  );
}
