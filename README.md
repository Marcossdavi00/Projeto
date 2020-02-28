# Projeto
Projeto Simulado

O Sistema de Simulado, utilizando técnologias como Node Js, Mysql, Jquery. Desenvolvido como um questíonario para testar o desempenho de alunos para provas que
abordem assuntos a respeito de Constituição de 1988.

Faça download do projeto atráves do link

https://github.com/Marcossdavi00/Projeto.git


Pré Requisitos

Instalando no Node js

Posteriomente em seu terminal na pasta do arquivo

NPM install --save express
NPM install --save sequelize
NPM install --save mysql
NPM install --save mysql2
NPM install --save express-handlebars
NPM install --save body parser
npm install -g nodemon

Rodando a Aplicação

Crie um banco de dados com o nome simulado

Posteriomente, rodar em seu terminal, acessando a pasta models, primeiramente o comando 

node Resp.js

E será criado a tabela em seu banco de dados

Comentar o código //Resp.sync({force: true}), e tirar o comentário do código module.exports = Resp;

Em seguida

Rodar no terminal, na pasta projeto, o comando nodemon index.js

Pronto, a aplicação irá rodar normalmente.
