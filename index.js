const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const connection = require('./db');
const mainRouter = require('./app/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

app.use("/", mainRouter);

const port = 3333;
app.listen(port, function () {
    console.log("Server started on", port);
    connection.authenticate()
        .then(function () {
            console.log("Database terhubung");
        })
        .catch(function (err) {
            console.error("Error saat koneksi ke database", err);
            process.exit(1);
        });
});
