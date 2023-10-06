const connection = require('./index');
const sequelize = require('sequelize');

const login = connection.define('users', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Ini membuat ID secara otomatis bertambah
    },
    username: {
        type: sequelize.DataTypes.STRING,
        allowNull: false, // Username wajib diisi
        unique: true, // Username harus unik
    },
    email: {
        type: sequelize.DataTypes.STRING,
        allowNull: false, // Email wajib diisi
        unique: true, // Email harus unik
        validate: {
            isEmail: true, // Memastikan bahwa email adalah alamat email yang valid
        },
    },
    password: {
        type: sequelize.DataTypes.STRING,
        allowNull: false, // Password wajib diisi
    },
}, {
    freezeTableName: true, // Nama tabel tetap "login"
    timestamps: false, // Menghapus kolom createdAt dan updatedAt
});

module.exports = login;
