const Task = require("../model/Task");
const { htmlPage } = require("../service/htmlPage");

const index = (req, res) => {
  res.sendFile(htmlPage("tasks.index"));
};

const create = (req, res) => {
  res.sendFile(htmlPage("tasks.create"));
};
const edit = (req, res) => {
  res.sendFile(htmlPage("tasks.edit"));
};
const store = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    // return the user to the create page and send the errors with the it .
    res.status(500).json({msg:error});
  }
};
const remove = async (req, res) => {
  const { id } = req.body;
  try{
    const task = await Task.deleteOne({ _id: id });
    res.status(203).json({task});
    
  }catch(err){
    console.log(err)
    res.status(404).json(err);
  }
};

const patch = (req, res) => {
  res.send("patch");
};

module.exports = {
  index,
  store,
  remove,
  edit,
  patch,
  create,
};
