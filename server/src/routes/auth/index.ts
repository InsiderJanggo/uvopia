import { Router } from "express";
import { Login, Register } from "../../db/services/auth.service";
const router = Router();

router.post('/login', Login)
router.post('/register', Register)

export default router