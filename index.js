const express = require("express") // ini perlu
const cors = require('cors')
const path = require('path'); //tidak perlu npm install
const connection = require('./app/model/index')


// init express server and router
const app = express();
const mainRouter = require('./app/routes');

app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body
app.use(cors());
// http router
app.use("/", mainRouter);

const port = 3333
app.listen(port, function(){
    console.log("server start on", port)
    connection.authenticate()
    .then(function(){
        console.log("Database terhubung")
    })
    .catch(function(err){
        console.log("Error saat koneksi ke database", err)
        process.exit()
    })
})
