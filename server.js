const express = require('express')
const fs = require("fs")
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
// I am creating the API Routes
app.get("/api/notes", function (req, res) {
    res.json(database)
})
// I will create a post for our API
app.post("/api/notes", function (req, res) {
    database.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(database), function (err) {
        if (err) throw err
    })
})

app.listen(PORT, () => {
    console.log('Port is listening at 3000');
});