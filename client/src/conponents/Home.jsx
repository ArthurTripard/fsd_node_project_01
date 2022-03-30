import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ArticlesList from "./ArticlesList";
import axios from "axios";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await axios.get("http://localhost:3001/articles");
        if (status === 200) {
          setArticles(data.articles);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 1,
          mx: "auto",
          width: 600,
          height: "100%",
        },
      }}
    >
      <ArticlesList articles={articles} />
    </Box>
  );
}
