const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a25a32d7c892bb4168ebee03';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

var id = '5a2451d5013f88c02d306559';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User by ID', user);
}).catch((e) => console.log(e));