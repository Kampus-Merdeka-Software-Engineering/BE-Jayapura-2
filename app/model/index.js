const sequelize = require('sequelize')
const mysql = require('mysql2')
const fs = require('fs')
const path = require('path')

const conn = new sequelize.Sequelize("mysql://avnadmin:AVNS_mHLMfnQ4yQhrp1XcpTh@mysql-e53703d-capstoneprojectgroup2.aivencloud.com:25949/nuansa_batik?ssl-mode=REQUIRED", {
    ssl: fs.readFileSync(path.join(__dirname, './ca.pem')),
    dialect: 'mysql',
    logging: false
});

module.exports = conn