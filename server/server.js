const express = require('express')
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000
const app = express()
app.use(express.static(path.join(__dirname, '../hexed/dist/hexed')))



// 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// For Handling Cors Issues
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: [
        "GET", "POST", "PUT", "DELETE"
    ],
    credentials: true
}));

// Landing page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '../hexed/dist/hexed/index.html')
});

app.get('/getscores', (req, res) => {
  axios.get('https://freebee.fun/cgi-bin/scores')
    .then(function (response) {
      console.log(response)
      res.send(response.data);
    })
    .catch(function (error) {
      console.log("Get Scores Error")
      console.log(error);
    })
});

app.post('/sendscore', (req, res) => {
  var name = req.body.name
  var score = req.body.score
  console.log('score');
  axios.get(`https://freebee.fun/cgi-bin/scores?${name}=${score}`)
  .then(function (response) {
    console.log(response)
    res.send(response.data);
  })
  .catch(function (error) {
    console.log("Send Score Error")
    console.log(error);
  })
});

app.listen(port, () => {
    console.log('Listening on *:3000')
});