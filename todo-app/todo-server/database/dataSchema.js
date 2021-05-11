const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
    id: Number,
    category : String,
    text : String,
    checked : Boolean
}, 
{ collection : 'todo'},
// { versionKey : false });
{ versionKey : '_somethingElse' });

const Data = mongoose.model('todo', dataSchema)
 
module.exports = {
    Data
}