const express = require("express")// importando o modulo
const app = express()// criando uma instancia do express
var bodyParser = require('body-parser')// Importando BodyParcer responsavel por traduzir os dados do usuário
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")
//Database

connection
    .authenticate()
    .then(() =>{
        console.log("Conexeão Feita com o bando de dados")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })
app.set("view engine","ejs")//Usar o edjs como View engine
app.use(express.static('public'))//Criar um arquivo estatico
// Body parser
app.use(express.urlencoded({ extended: true }))
app.use (express.json()) //Ler dados de formularios via json

// Rotas
app.get("/",(req, res) => {
    Pergunta.findAll({ raw: true , order:[
        ['id','DESC']//Ordenando ASC = Crescente || DESC = Decrescente 
    ]}).then(perguntas =>{
        res.render("index",{
            perguntas:perguntas
        })
    })
    //Desenha na tela um arquivo html
    
});//Definindo Rota
app.get("/perguntar",(req,res)=>{
    res.render("perguntar");
})
app.post("/salvarpergunta",(req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao; //Pegando informação do formulário
    Pergunta.create({
        titulo:titulo,
        descricao:descricao // Inserte dentro da tabela Pergunta
    }).then(() => {
        res.redirect("/");//Redirecionar para página principal 
    })
})// Receber dados de um Formulário 


app.listen(3300,()=>{
    console.log("App rodando!")
})