import { Router } from "express";
import { getAllArticles, getArticle, createArticle } from "../controllers/Article.controller";

const router = Router();

router.get("/", getAllArticles);

router.get("/:id", getArticle);

router.post("/", createArticle);

export default router;
