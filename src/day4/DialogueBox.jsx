import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function DialogueBox() {
  let [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
  }
  function handleLogin() {
    setOpen(false);
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => {
          setOpen(!open);
        }}
        variant="contained"
        sx={{ height: "30px" }}
      >
        Login
      </Button>
      <Dialog open={open}>
        <DialogTitle padding={4}>Login</DialogTitle>
        <DialogContent>
          <TextField type={"text"} label="name" id="name" fullWidth></TextField>
          <TextField
            type={"text"}
            label="password"
            id="pass"
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
