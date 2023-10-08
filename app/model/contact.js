const connection = require('./index')
const sequelize = require('sequelize')

const contact = connection.define('contact', {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    nama_awal: {type: sequelize.DataTypes.STRING},
    nama_akhir: {type: sequelize.DataTypes.STRING},
    email: {type: sequelize.DataTypes.STRING},
    nomor_telepon: {type: sequelize.DataTypes.STRING},
    pesan: {type: sequelize.DataTypes.TEXT},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = contact