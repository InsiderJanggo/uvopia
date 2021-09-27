import { Router } from "express";
import { getAllUser } from "../../db/services/users.service";
const router = Router();

//GET ALL
router.get('/', getAllUser)

export default router