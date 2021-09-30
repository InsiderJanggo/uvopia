import { Router } from "express";
const router = Router();

//ROUTES
import userRoute from './users/index'
import authRoute from './auth/index'
import chatRoomRoute from './chatroom/index'
import messageRoute from './messages/index'

router.get('/', (req, res) => {
    res.json({
        message: 'Hello API'
    })
})

router.use('/auth', authRoute)
router.use('/users', userRoute)
router.use('/rooms', chatRoomRoute)
router.use('/messages', messageRoute)

export default router