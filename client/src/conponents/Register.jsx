import { useState } from "react";
import axios from "axios";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (username === "" || email === "" || password === "" || password2 === "") {
      return;
    }

    if (password !== password2) {
      setPassword2("");
      return;
    }

    try {
      const data = { username, email, password };
      const responce = await axios.post("http://localhost:3001/auth/register", data);

      console.log(responce);

      if (responce.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        display: "flex",
        "& > :not(style)": {
          mt: 5,
          mx: "auto",
        },
      }}
    >
      <Paper elevation={3}>
        <Box>
          <Typography sx={{ mr: 5, ml: 5, mt: 3 }}>Register</Typography>
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 3 }}>
          <TextField label="Username" type="text" value={username} onChange={e => setUsername(e.target.value.trim())} />
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1 }}>
          <TextField label="Email" type="email" value={email} onChange={e => setEmail(e.target.value.trim())} />
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1 }}>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value.trim())}
          />
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1 }}>
          <TextField
            label="Confirm Password"
            type="text"
            value={password2}
            onChange={e => setPassword2(e.target.value.trim())}
          />
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1, mb: 3 }}>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Paper>
    </Box>
  );
}
