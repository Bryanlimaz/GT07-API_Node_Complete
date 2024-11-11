const produtos = require('../mocks/sneakersList');

function GetAllSneakers (req, res) {
    try {
      const token = req.query.token
      const jwt = require('jsonwebtoken')
      const decoded = jwt.verify(token, 'akdjflnkadgp')
  
      if (decoded){
        res.send({
          sucess: true,
          message: 'Lista carregada com sucesso!',
          produtos
        })
      } else {
        res.send({
          sucess: false,
          message: 'Token inválido!',
          produtos: []
        })
      }
    } catch (error){
      res.send({
        sucess: false,
        message: `Falha na requisição ${error}`,
        produtos: []
      })
    }
  }

  module.exports= {
    GetAllSneakers
  }