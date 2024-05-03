import Placar from "../models/Placar.js";

const adicionarPontuacao = async (req, res) => {
    try {
        const {nome, pontuacao} = req.body;

        const novaPontuacao = new Placar({nome, pontuacao});

        await novaPontuacao.save();

        return res.status(201).json({ msg: "Pontuação adiconada com sucesso"});
    } catch (error) {
        return res.status(500).json({error: "Ocorreu um erro ao adiconar a pontuação"});
    }
};

const obterPontuacoes = async (req, res) => {
    try {
        const topPontuacoes = await Placar.find().sort({pontuacao: -1}).limit(10);

        return res.status(200).json(topPontuacoes);
    } catch (error) {
        return res.status(500).json({error: "Ocorreu um erro ao obter as pontuações"});
    }
};

export  default {adicionarPontuacao, obterPontuacoes};