import { Router } from "express";
import { getAllUsers } from "../controllers/User.controller";

const router = Router();

router.get("/", getAllUsers);

export default router;
