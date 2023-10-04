const sequelize = require('sequelize')
const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')

const conn = new sequelize.Sequelize("mysql://avnadmin:AVNS_6la3iy4isnJcUZ7K_K_@mysql-3b2a0c3a-student-d87c.aivencloud.com:23838/defaultdb?ssl-mode=REQUIRED", {
    ssl: fs.readFileSync(path.join(__dirname, 'ca.pem')),
    dialect: 'mysql',
    logging: false
});

module.exports = {
    conn,
}