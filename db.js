const Sequelize = require('sequelize')
const sequelize = new Sequelize('db_teste', 'root', '12345678', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize