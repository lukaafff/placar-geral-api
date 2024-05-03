import {Router} from 'express'
import placarRoutes from './placarRoutes.js';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({msg: 'API placar geral'});
});

router.use('/placar', placarRoutes);

export default router;