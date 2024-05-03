import mongoose from "mongoose";

const PlacarSchema = new mongoose.Schema({
    nome: String,
    pontuacao: Number
});

const Placar = mongoose.model('Placar', PlacarSchema);

export default Placar;