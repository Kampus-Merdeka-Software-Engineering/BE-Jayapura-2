const Login = require('../model/login'); // Import model Login

function login(req, res, next) {
    const { username, password } = req.body;

    // Cari user berdasarkan username
    Login.findOne({ where: { username } })
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Verifikasi password
            if (user.password === password) {
                return res.json({ message: 'Login successful' });
            } else {
                return res.status(401).json({ message: 'Incorrect password' });
            }
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
}

module.exports = {
    login,
};
