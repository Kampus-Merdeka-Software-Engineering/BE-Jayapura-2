const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize.Sequelize('nuansa_batik', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection