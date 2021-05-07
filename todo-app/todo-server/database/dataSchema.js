// const mongoose = require('mongoose')
// const dataSchema = new mongoose.Schema({
//     type : String,
//     geometry : Object,
//     properties : Object
// })

// const Data = mongoose.model('project', dataSchema)
 
// module.exports = {
//     Data
// }

const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    id : Number,
    category : String,
    text : String,
    checked : Boolean
}, { collection : 'todo'});

const Data = mongoose.model('todo', dataSchema)
 
module.exports = {
    Data
}