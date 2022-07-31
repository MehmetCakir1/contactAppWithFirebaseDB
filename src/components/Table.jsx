import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { useGetData, deleteUser } from "../utils/functions";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BasicTable({ editUser }) {
  const { isLoading, contactList } = useGetData();
  return (
    <Grid item sx={{margin:"auto",maxWidth:"40rem",maxHeight:"27.5rem" ,overflow: 'auto',}}>
      <TableContainer component={Paper} sx={{boxShadow:"0 5px 5px grey"}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{backgroundColor:"darkgrey"}}>
              <TableCell align="center">Username</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Loading
                </TableCell>
              </TableRow>
            ) : contactList?.length == 0 ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  NO RESULT FOUND
                </TableCell>
              </TableRow>
            ) : (
              contactList?.map((item) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row" align="center">
                      {item.username}
                    </TableCell>
                    <TableCell align="center">{item.phoneNumber}</TableCell>
                    <TableCell align="center">{item.gender}</TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "green", cursor: "pointer" }}
                      onClick={() =>
                        editUser(
                          item.id,
                          item.username,
                          item.phoneNumber,
                          item.gender
                        )
                      }
                    >
                      <BorderColorIcon />
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: "red", cursor: "pointer" }}
                      onClick={() => deleteUser(item.id)}
                    >
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
