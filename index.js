const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Resp = require('./models/Resp')
let cont = 0;
let certa = 0;

//Configuração Handblebars
//Templet Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
//Pagina inicial com o nome e o simulado
app.get('/', function(req, res){
  res.render('inicial')
})
/*Retorno do formulário para o preenchimento do banco, adicionando um contado para
apresentar o dados apenas do aluno que realizei o simulado naquele momento,
e if para separar os que acertaram e eram a questão*/
app.post('/add',function(req, res){
  Resp.create({
    aluno: req.body.aluno,
    questao: 1,
    escolha: req.body.escolha
  }).then(function(){
    ++cont
    if(req.body.escolha == 'A'){
    res.redirect('/feedback')};
    if(req.body.escolha != 'A'){
    res.redirect('/feedback2');
    }
  }).catch(function(erro){
    res.send('Selecione uma questão' + erro);
  })
})
//Rota para os que acertaram a questão
app.get('/feedback', function(req, res){
  ++certa
  Resp.findAll({ where: { id: [cont] } }).then(function(resposta){
    res.render('feedback', {resposta: resposta, quantidade: cont, correta: certa})
  })
})
//Rota para os que erraram a questão
app.get('/feedback2', function(req, res){
  Resp.findAll({ where: { id: [cont] } }).then(function(resposta){
    res.render('feedback2', {resposta: resposta, quantidade: cont, correta: certa})
  })
})
//Porta Servidor
app.listen(8082, function() {
  console.log("Servidor Rodando");
})
