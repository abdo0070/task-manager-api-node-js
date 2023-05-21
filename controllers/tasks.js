const { Task } = require("../model/Task");
const { htmlPage } = require("../service/htmlPage");

const index = (req,res) => {
    res.sendFile(htmlPage('tasks.index'));
}

const create = (req,res) => {
    res.sendFile(htmlPage('tasks.create'));
}


const edit = (req,res) => {
    res.sendFile(htmlPage('tasks.edit'));
}


const store = (req,res) => {
    // 1 - take the body data from the request 
    // 2 - save it in mongodb
    // 3 - return the user to inedx page
    const task = Task.add(req.body);
    if(task){
        res.sendFile(htmlPage('tasks.index'));
        return;
    }
    // failed to uplaod to the database;
    res.send('failed to upload to the database');
}

const remove = (req,res) => {
    res.send('delete')
}

const patch = (req,res) => {
    res.send('patch')
}

module.exports = {
    index,
    store,
    remove,
    edit,
    patch,
    create,
}