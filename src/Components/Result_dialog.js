import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import "../Css/modalText.css";
import "../Css/button.css";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    width: { xs: "auto", md: "400px" },
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

export default function ResultDialogs({
  data,
  setData,
  totalCount,
  open,
  setOpen,
  viewBroker,
  setViewBroker,
  countClickedTrue,
}) {
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    const updatedData = data?.map((item) => (item.clicked = false));
    setData(updatedData);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        maxWidth={"xxl"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Box>
            <Stack spacing={2}>
              <div className="modal_block">
                <h1>Поздравляем</h1>
                <p>
                  Вы выиграли{" "}
                  {!viewBroker || !countClickedTrue() > 0 ? totalCount : "100"}{" "}
                  баллов
                </p>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {/* {!viewBroker && (
                    <button onClick={handleClose} className="button">
                      {" "}
                      Начать игру
                    </button>
                  )} */}
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
                  <button
                    className="buttonAgree"
                    onClick={() => {
                      navigate("/main");
                      setViewBroker(false);
                    }}
                  >
                    <Typography sx={{ color: "#000!important" }}>
                      На главную
                    </Typography>
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
