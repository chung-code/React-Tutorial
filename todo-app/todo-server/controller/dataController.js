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

// todo 작성
const write = async(req, res) => {
    console.log(req.body)
    const {id, category, text, checked} = req.body;
    todoId = id
    const todo = {id: todoId, category, text, checked};
    todos.push(todo);
    console.log(todos)
    // res.send(todo);
}

// 전체 목록 조회
const list = async(req, res) => {
    res.json(todos);
}

// 특정 todos 조회
// 주어진 category 값으로 todos를 찾는다.
const category = async(req, res) => {
    res.json(todos.filter(todo => todo.category == req.query[0]))
    console.log(req.query[0])
}

//todo 제거
const remove = async(req, res) => {
    // const {id} = req.body.id
    const index = todos.findIndex(function(todo) {return todo.id === req.body.id});
    todos.splice(index, 1);
}

module.exports = {
    write,
    list,
    category,
    remove
}