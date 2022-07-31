import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MdPhone from "@mui/icons-material/Phone";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Stack,Button } from "@mui/material";

const Form =({info,setInfo,handleSubmit,isAdd})=> {

  const handleChange = (e)=> {
    e.preventDefault()
    const {name,value}=e.target
    setInfo({ ...info, [name]: value });
  }

  return (
    <Grid item sx={{backgroundColor:"lightblue",margin:"auto", padding:"2rem",borderRadius:"1rem"} }
    textAlign="center">
      <h2>ADD CONTACT</h2>
          <Box >
      <form onSubmit={handleSubmit}>
      <Stack direction="column" spacing={2} sx={{padding:"1rem"}}>
        <TextField
          label="Usermame"
          type="text"
          value={info.username}
          name="username"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <TextField
          label="Phone Number"
          type="tel"
          name="phoneNumber"
            value={info.phoneNumber}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdPhone />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="gender"
            value={info.gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" value="Submit">
          {isAdd ? "UPDATE" : "ADD"}
            </Button>
      </Stack>
      </form>

    </Box>
    </Grid>

  );
}
export default Form;