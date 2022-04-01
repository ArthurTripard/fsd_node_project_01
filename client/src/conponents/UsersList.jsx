import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await axios.get("http://localhost:3001/users");
        if (status === 200) {
          setUsers(data.users);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ mt: 5, mx: "auto", maxWidth: 600 }}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
