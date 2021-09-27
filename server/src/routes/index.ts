import { Router } from "express";
const router = Router();
import userRoute from './users/index'

router.get('/', (req, res) => {
    res.json({
        message: 'Hello API'
    })
})

router.use('/users', userRoute)

export default router