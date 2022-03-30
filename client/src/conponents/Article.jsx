import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";

export default function Article() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await axios.get(`http://localhost:3001/articles/${id}`);

        if (status === 200) {
          setArticle(data.article);
        }
      } catch (error) {}
    })();
  }, [id]);

  if (!article) {
    return <p>Loadding...</p>;
  }

  console.log(article);

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.body}
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="body3" color="text.secondary">
          Tags: {article.tags.join(" - ")}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body3" color="text.secondary">
          Publiched: {new Date(article.publiched).toLocaleDateString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
