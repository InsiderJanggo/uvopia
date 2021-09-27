import { Router } from "express";
import { getAllUser, getOneUser } from "../../db/services/users.service";
const router = Router();

//GET ALL
router.get('/', getAllUser)
//GET ONE
router.get('/:id', getOneUser)

export default router