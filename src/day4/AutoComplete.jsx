import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack, Typography } from "@mui/material";
let opt = ["Apple", "Bannana", "Cherry", "ElderBerry"];
export default function AutoComplete() {
  return (
    <Stack
      style={{
        height: "800px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography fontSize={"20px"}>Type a Name</Typography>
      <input type="text" placeholder="Name"></input>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={opt}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Choose a fruit" />
        )}
      />
    </Stack>
  );
}
