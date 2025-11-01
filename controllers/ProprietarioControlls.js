const express = require('express');
const router = express.Router();
const Proprietario = require('../models/Proprietario');

router.get('/', async (req, res) => {
    try {
        const proprietarios = await Proprietario.find();
        res.status(200).json(proprietarios);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar proprietários', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nome, cpf, veiculos } = req.body;
        const novoProprietario = new Proprietario(req.body);
        await novoProprietario.save();
        res.status(201).json({ message: 'Proprietário criado com sucesso', proprietario: novoProprietario });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar proprietário', error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const proprietario = await Proprietario.findById(req.params.id);
        res.status(200).json(proprietario);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar proprietário', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Proprietario.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Proprietário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar proprietário', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { nome, cpf, veiculos } = req.body;
        await Proprietario.findByIdAndUpdate(req.params.id, { nome, cpf, veiculos });
        res.status(200).json({ message: 'Proprietário atualizado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar proprietário', error });
    }
});

module.exports = router;