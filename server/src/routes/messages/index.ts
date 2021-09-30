import { Router } from "express";
const router = Router()
import { 
    createMessage,
    deleteOne,
    getAllMessage, 
    getOneMessage 
} from "../../db/services/message.service";

//GET ALL MESSAGES
router.get('/', getAllMessage)

//GET ONE MESSAGE
router.get('/:id', getOneMessage)

//CREATE MESSAGE
router.post('/', createMessage)

//DELETE MESSAGE
router.delete('/:id', deleteOne)

export default router