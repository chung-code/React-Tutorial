const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const todos = [
	{ 
    category: '인삿말',
    id:1,
    text: '안녕하세요',
    checked: true,
  },
  {
    category: '인삿말',
    id:2,
    text: '반갑습니다',
    checked: true,
  },
  {
    category: '매장안내',
    id:3,
    text: '하이~ 에이치아이',
    checked: false,
  }
];

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/todo", (req, res) => res.json(todos));
app.get("/todo/category", (req, res) => {
  res.json(todos.filter(todo => todo.category == req.query[0]))
  console.log(req.query[0])
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));