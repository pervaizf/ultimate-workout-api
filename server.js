const express = require("express")
const app = express()
const cors = require("cors")
const { response, application } = require("express")

const PORT = 8000
app.use(cors())
const workout = {
    "back": {
        "exercises": ["Wide-Grip Lat Pulldowns", "Single-Arm Dumbell Rows", "Narrow-Grip Pulldowns"],
        "sets": 3,
        "reps": "8-12"
    },
    "unknown": {
        "exercises": ["none"],
        "sets": 0,
        "reps": "none"
    }
}



app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on port ${PORT}`)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api/:part", (req, res) => {
    let partSearch = req.params.part
    if (workout[partSearch]) {
    res.json(workout[partSearch])
    } else res.json(workout["unknown"])
})