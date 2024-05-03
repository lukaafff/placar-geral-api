import {Router} from 'express'

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({msg: 'API placar geral'});
});

export default router;