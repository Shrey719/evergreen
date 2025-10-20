import express from 'express'

const PORT = 8080

let app = express()

app.use(express.static("client"))

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`)
})