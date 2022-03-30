import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";

export default function ArticlesList({ articles }) {
  return articles.map(article => <ArticleCard key={article._id} {...article} />);
}

function ArticleCard({ _id, title, resume, tags, publiched, category }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${_id}`);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {resume}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography variant="body3" color="text.secondary">
            Tags: {tags.join(" - ")}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body3" color="text.secondary">
            Publiched: {new Date(publiched).toLocaleDateString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
