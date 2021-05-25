const express = require("express")// importando o modulo
const app = express()// criando uma instancia do express
var bodyParser = require('body-parser')// Importando BodyParcer responsavel por traduzir os dados do usuário

app.set("view engine","ejs")//Usar o edjs como View engine
app.use(express.static('public'))//Criar um arquivo estatico
// Body parser
app.use(express.urlencoded({ extended: true }))
app.use (express.json()) //Ler dados de formularios via json

// Rotas
app.get("/",(req, res) => {
    res.render("index")//Desenha na tela um arquivo html
});//Definindo Rota
app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
})
app.post("/salvarpergunta",(req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao; //Pegando informação do formulário
    res.send("Formulario Recebido titulo" + titulo + " " + " descricao " + descricao)
})// Receber dados de um Formulário 


app.listen(8080,()=>{
    console.log("App rodando!")
})