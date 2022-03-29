import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 600,
          height: 800,
        },
      }}
    >
      <Paper elevation={1} />
    </Box>
  );
}
