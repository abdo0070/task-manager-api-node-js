const asyncWrapper = require("../middleware/AsyncWrapper");
const Task = require("../model/Task");

const store = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const remove = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const task = await Task.deleteOne({_id : id });
  res.status(202).json({ task });
});

const all = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res
    .status(201)
    .json({ success: true, data: { tasks, amount: tasks.length } });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    res.status(404).json({ msg: "no user with that id" });
    return;
  }
  res.status(201).json({ task });
});

const put = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  // find the task and send the new data to the update function .
  // new : option is to return the updated task .
  // runValidators : option is to run the valodatiors that in the schema model .
  const task = await Task.findByIdAndUpdate({ _id: id }, req.body , {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: "not found" });
  }
  res.status(201).json({ data: task });
});

module.exports = {
  store,
  remove,
  put,
  all,
  singleTask: getTask,
};
