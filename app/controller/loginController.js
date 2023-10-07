const Login = require('../model/login'); // Import model Login
const { Op } = require('sequelize');


function login(req, res, next) {
    const { username, password } = req.body;

    // Cari user berdasarkan username
    Login.findOne({ where: { username } })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'Username salah' });
            }
            // Verifikasi password
            if (user.password === password) {
                return res.json({ message: 'Login berhasil' });
            } else {
                return res.status(401).json({ message: 'Password salah' });
            }
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
}

function signup(req, res, next) {
    const { username, email, password } = req.body;

    // Cek apakah pengguna dengan username atau email yang sama sudah ada
    Login.findOne({
        where: {
            [Op.or]: [
                { username: username },
                { email: email }
            ]
        }
    })
        .then((existingUser) => {
            if (existingUser) {
                return res.status(409).json({ message: 'Username or email already exists' });
            }
            // Jika pengguna belum ada (tidak ada konflik), buat pengguna baru
            Login.create({ username, email, password })
                .then(() => {
                    res.status(201).json({ message: 'Signup successful' });
                })
                .catch((error) => {
                    console.error(error);
                    return res.status(500).json({ error: 'Internal Server Error' });
                });
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports = {
    login,
    signup // Tambahkan fungsi signup ke dalam ekspor
};
