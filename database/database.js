const Sequelize = require('sequelize');
const connection = new Sequelize("guiaperguntas","root",'28102001e',{
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection;