const express = require("express");
const cors = require('cors');
const connection = require('./db');
const mainRouter = require('./app/routes');
const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", mainRouter);

app.listen(port, "0.0.0.0", function () {
    console.log("Server started on", port);
    connection.authenticate()
        .then(function () {
            console.log("Database terhubung");
        })
        .catch(function (err) {
            console.error("Error saat koneksi ke database", err);
        });
});
