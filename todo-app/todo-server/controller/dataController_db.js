const { Data } = require('../database/dataSchema')

// todo 작성
const write = async(req, res) => {
    console.log(req.body)
    const {id, category, text, checked} = req.body;
    const todo = new Data({
        id: id,
        category: category,
        text: text,
        checked: checked
    });
    todo.save();
}

// 전체 목록 조회
const list = async(req, res) => {
    const todos = await Data.find({})
    console.log(todos)
    return res.status(200).send(todos)
}

// 특정 todos 조회
// 주어진 category 값으로 todos를 찾는다.
const category = async(req, res) => {
    const todos = await Data.find({})
    res.json(todos.filter(todo => todo.category == req.query[0]))
    console.log(req.query[0])
}

//todo 제거
const remove = async(req, res) => {
    const id  = req.body.id;
    await Data.deleteOne({id: id})
}

module.exports = {
    write,
    list,
    category,
    remove,
}