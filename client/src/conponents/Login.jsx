import { useState } from "react";
import axios from "axios";
import { Box, Paper, Button, TextField, Typography } from "@mui/material";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email === "" || password === "") {
      return;
    }

    try {
      const payload = { email, password };
      const { status, data } = await axios.post("http://localhost:3001/auth/login", payload);

      if (status === 200 && data.token) {
        onLogin(data);
      } else {
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
      setEmail("");
      setPassword("");
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
          <Typography sx={{ mr: 5, ml: 5, mt: 3 }}>Login</Typography>
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 3 }}>
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
        <Box sx={{ mr: 5, ml: 5, mt: 1, mb: 3 }}>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Paper>
    </Box>
  );
}
