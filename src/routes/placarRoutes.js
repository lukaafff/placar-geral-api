import { Router } from "express";
import PlacarController from '../controllers/PlacarController.js'

const placarRoutes = Router();

placarRoutes.post('/adiconar-pontuacao', PlacarController.adicionarPontuacao);
placarRoutes.get('/obter-pontuacoes', PlacarController.obterPontuacoes);

export default placarRoutes;