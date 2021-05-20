const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8080;

const { router } = require('./routes/dataRoutes');
const db = require('./database/db')

const cors = require('cors');
// cors 모듈을 가져와서

const corsOpt = {
  origin: 'http://localhost:3000',
  credentials: true, 
};
// 모든 도메인의 통신을 허용합니다.

app.options('*', cors(corsOpt));
// 모든 options 메서드로의 사전 전달 접근을 허용합니다.


// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json())

app.use('/todo', cors(corsOpt), router)
app.get('/test', cors(corsOpt), (req, res) =>{
    res.status(200).send("goood")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// process.on('SIGINT', function () {
//     isDisableKeepAlive = true
//     app.close(function () {
//     console.log('server closed')
//     process.exit(0)
//     })
//   })