import { useState } from "react";
import axios from "axios";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ArticleCreateFrom() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [resume, setResume] = useState("");
  const [body, setBody] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const payload = { title, category, tags, resume, body };
      const responce = await axios.post("http://localhost:3001/articles", payload);

      if (responce.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addTag = () => {
    const newTag = tag.toLowerCase().trim();

    if (newTag !== "" && !tags.includes(newTag)) {
      setTags(prev => [...prev, newTag]);
      setTag("");
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
          minWidth: 500,
        },
      }}
    >
      <Paper elevation={3}>
        <Box>
          <Typography sx={{ mr: 5, ml: 5, mt: 3 }}>New Article</Typography>
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 3 }}>
          <TextField label="Title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1 }}>
          <TextField label="Category" type="text" value={category} onChange={e => setCategory(e.target.value)} />
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1 }}>
          <Typography sx={{ mb: 1 }}>Tags: {tags.join(" - ")}</Typography>
          <TextField label="Tag" type="text" value={tag} onChange={e => setTag(e.target.value)} />
          <Button onClick={addTag}>Add Tag</Button>
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1 }}>
          <TextField label="Resume" type="text" value={resume} onChange={e => setResume(e.target.value)} />
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1 }}>
          <TextField label="Body" type="text" value={body} onChange={e => setBody(e.target.value)} />
        </Box>
        <Box sx={{ mr: 5, ml: 5, mt: 1, mb: 3 }}>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Paper>
    </Box>
  );
}
