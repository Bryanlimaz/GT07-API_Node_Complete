const usersModel = require('../models/usersModel');

function middlewareCreateNewUser(req, res, next) {
    const { nome, sobrenome, email, senha } = req.body;
    try {
        if (!nome || !sobrenome || !email || !senha) {
            res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados!'
            });
        }
        next(); // Executa a próxima função;
    } catch (error) {
        res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao tentar criar o usuário. Erro: ${error}`
        });
    };
};

async function middlewareUpdateUserById(req, res, next) {
    const { nome, sobrenome, email, senha } = req.body;
    const user = await usersModel.findByPk(id);
    try {
        if (!nome && !sobrenome && !email && !senha) {
            return res.status(400).send({
                message: '❌ Nenhum dado foi fornecido para atualizar o usuário!'
            });
        }
        if (user) {
            res.status(400).send({
                message: `🔴 Usuário Não encontrado! 😰`
            })
        }
        next();
    } catch (error) {
        res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao atualizar o usuário. Erro: ${error}`
        });
    }
};

async function middlewareDeleteUserById(req, res, next) {
    const id = parseInt(req.params.id);
    const user = await usersModel.findByPk(id);

    try {
        if (isNaN(id) || id <= 0) {
            return res.status(400).send({
                message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
            });
        }
        if (user) {
            res.status(404).send({
                message: `🔴 Usuário com ID: ${id} não encontrado! 😰`
            });
        }
        next();
    } catch (error) {
        res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao deletar o usuário. Erro: ${error}`
        });
    };
};



module.exports = {
    middlewareCreateNewUser,
    middlewareUpdateUserById,
    middlewareDeleteUserById
}