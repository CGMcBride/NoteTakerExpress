const fs = require("fs")
const database = require("../db/db.json")

// creating the id to delete
let id = database.length + 1

module.exports = function (app) {

    // I am creating the API Routes
    app.get("/api/notes", function (req, res) {
        res.json(database)
    })
    // I will create a post for our API
    app.post("/api/notes", function (req, res) {
        req.body.id = id++;
        console.log(req.body)
        database.push(req.body)
        fs.writeFile("./db/db.json", JSON.stringify(database), function (err) {
            if (err) throw err
        })
        res.json(database)

    })
    // I will delete all the notes
    app.delete("/api/notes/:id", function (req, res) {
        let getId = req.params.id

        for (let index = 0; index < database.length; index++) {
            if (database[index].id === parseInt(getId)) {
                database.splice(index, 1);
            }
        }
        fs.writeFile("./db/db.json", JSON.stringify(database), function (err) {
            if (err) throw err
        })
        res.json(database)

    })

}