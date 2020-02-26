const db = require('./db');

const Resp = db.sequelize.define('resposta',{
  aluno:{
  type: db.Sequelize.STRING
},
  questao:{
    type: db.Sequelize.TEXT
  },
  escolha:{
    type: db.Sequelize.STRING
  }
});

module.exports = Resp;
//Resp.sync({force: true});
