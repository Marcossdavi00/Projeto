const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Resp = require('./models/Resp')

//Configuração Handblebars
//Templet Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req, res){
  res.render('inicial')
})
app.post('/add',function(req, res){
  Resp.create({
    aluno: req.body.aluno,
    questao: 1,
    escolha: req.body.escolha
  }).then(function(){
    res.redirect('/feedback')
  }).catch(function(erro){
    alert('Não foi possível criar aluno' + erro)
  })
})
app.get('/feedback', function(req, res){
  Resp.findAll().then(function(resposta){
    res.render('feedback', {resposta: resposta})
  })
})



app.listen(8082, function() {
  console.log("Servidor Rodando");
})
