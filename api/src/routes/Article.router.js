import { Router } from "express";
import { getAllArticles, getArticle, createArticle } from "../controllers/Article.controller";
import validateDto from "../middlewares/validate-dto";
import { validateArticle } from "../schema/Article.schema";

const router = Router();

router.get("/", getAllArticles);

router.get("/:id", getArticle);

router.post("/", validateDto(validateArticle), createArticle);

export default router;
