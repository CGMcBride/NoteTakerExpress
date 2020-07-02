const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// connect the files to the app using static as our express function
app.use(express.static("public"))
require('./routes/htmlRoutes')(app);
require("./routes/apiRoutes")(app);


app.listen(PORT, () => {
    console.log('Port is listening at 3000');
});