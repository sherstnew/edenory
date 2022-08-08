const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const app = express()
const port = 3000

app.use(express.static('public'));
app.use("/public", express.static('public'));

app.get('/', (req, res) => {
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  res.sendFile('/home/runner/edenory/index.html')
})
app.post('/', (req, res) => {
    console.log(req.query.mes);
    res.send('ok')
})

app.listen(port, () => {
  console.log(`Starting on http://127.0.0.1:${port}`)
})