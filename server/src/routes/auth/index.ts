import { Router } from "express";
import { Login, Register } from "../../db/services/auth.service";
const router = Router();

router.get('/', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
})

router.post('/login', Login)
router.post('/register', Register)

export default router