const Database = require("@replit/database")
const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const db = new Database()
const app = express()
const port = 3000

let body = ''
let c = 0

app.use(express.static('public'));
app.use("/public", express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  res.sendFile('C:/Users/Денис/projects/edenory/index.html')
})

app.get('/list', (req, res) => {
  db.list().then(keys => {
    res.send(typeof(keys))
  });
})

app.post('/api', (req, res) => {
    body = req.body
    c++
    db.set(c, body)
    res.send('ok')
})



app.listen(port, () => {
  console.log(`Starting on http://127.0.0.1:${port}`)
})