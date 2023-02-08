const Sequelize = require('sequelize')
const database = require('./db.js')

const Product = database.define('tbl_produto', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING
})

module.exports = Product