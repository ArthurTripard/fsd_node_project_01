import { Router } from "express";
import { login, register } from "../controllers/Auth.controller";
import validateDto from "../middlewares/validate-dto";
import { validateRegister, validateLogin } from "../schema/User.schema";

const router = Router();

router.post("/register", validateDto(validateRegister), register);
router.post("/login", validateDto(validateLogin), login);

export default router;
