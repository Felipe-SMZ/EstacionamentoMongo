const db = require('../models/db');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProprietarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    veiculos: [{
        placa: {
            type: String,
            required: true
        },
        ano: {
            type: Number,
            required: true
        },
        mensalidade: {
            type: Number,
            required: true
        }
    }]
}, {collection: 'Proprietario'});

const Proprietario = mongoose.model('Proprietario', ProprietarioSchema);

module.exports = Proprietario;