const express = require("express")

const app = express();
const port=process.env.PORT || 3330;
const cors = require('cors')
app.use(cors())

app.use(express.static('static'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:3000`)
})