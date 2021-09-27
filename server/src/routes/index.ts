import { Router } from "express";
const router = Router();

//ROUTES
import userRoute from './users/index'
import authRoute from './auth/index'

router.get('/', (req, res) => {
    res.json({
        message: 'Hello API'
    })
})

router.use('/auth', authRoute)
router.use('/users', userRoute)

export default router