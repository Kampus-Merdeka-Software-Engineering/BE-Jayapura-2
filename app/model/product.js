const connection = require('./index')
const sequelize = require('sequelize')

const product = connection.define("product", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    nama: {type: sequelize.DataTypes.STRING},
    kategori: {type: sequelize.DataTypes.STRING},
    ukuran: {type: sequelize.DataTypes.TEXT},
    harga: {type: sequelize.DataTypes.DECIMAL},
    image: {type: sequelize.DataTypes.TEXT},
    image_list: {type: sequelize.DataTypes.TEXT}
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = product