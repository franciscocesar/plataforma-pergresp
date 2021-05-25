const Sequelize = require("sequelize");
const connection = require("./database");

//Definindo um model
const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull:false //impede valores nulos
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull:false  //impede valores nulos
    }
});

Pergunta.sync({force: false}).then(() => {}) //Sincronizar com banco de dados

module.exports = Pergunta;