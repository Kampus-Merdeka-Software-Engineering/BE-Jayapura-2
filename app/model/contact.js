const connection = require('./index')
const sequelize = require('sequelize')

const contact = connection.define("contact", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    nama awal: {type: sequelize.DataTypes.CHAR},
    nama akhir: {type: sequelize.DataTypes.CHAR},
    email: {type: sequelize.DataTypes.CHAR},
    nomor telepon: {type: sequelize.DataTypes.CHAR},
    pesan: {type: sequelize.DataTypes.CHAR},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = contact