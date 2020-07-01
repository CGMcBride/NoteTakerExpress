const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const database = require("./db/db.json")

// connect the files to the app using static as our express function
app.use(express.static("public"))
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})
app.listen(PORT, () => {
    console.log('Port is listening at 3000');
});