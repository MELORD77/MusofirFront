import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "../Css/modalText.css";
import { Box, Stack } from "@mui/material";
// import { NavLink } from "react-router-dom";

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

export default function ResultDialogs({ totalCount, open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        maxWidth={"lg"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Box>
            <Stack spacing={2}>
              <div className="modal_block">
                <h1>Поздравляем</h1>
                <p>Вы выиграли {totalCount} баллов</p>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <button onClick={handleClose} className="button">
                    {" "}
                    Начать игру
                  </button>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
                  <button className="offer_button_outlined">На главную</button>
                </Box>
              </div>
            </Stack>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
