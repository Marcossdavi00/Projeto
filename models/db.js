const Sequelize = require('sequelize')

//Conexão com o Banco de Dados

const sequelize = new Sequelize('simulado', 'root', '123456', {
  host:'localhost',
  dialect:'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
