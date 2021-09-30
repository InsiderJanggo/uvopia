import { Router } from "express";
const router = Router();
import { 
    createOne, 
    getAll, 
    getOne,
    deleteOne,
    updateOne
} from "../../db/services/chatroom.service";

//GET ALL ROOMS
router.get('/', getAll)

//GET ONE ROOM
router.get('/:id', getOne)

//UPDATE ONE ROOM
router.put('/:id', updateOne)

//DELETE ONE ROOM
router.delete(':id', deleteOne)

//CREATE ROOM
router.post('/', createOne)

export default router