const express = require("express");
const cors = require("cors");
const { router } = require('./routes/dataRoutes');
const app = express();
const port = 8080;
const db = require('./database/db')

app.use(cors());
app.options("*", cors());

app.use(express.json())

app.use('/todo', router)
app.get('/test', (req, res) =>{
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