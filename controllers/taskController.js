// Import modules

const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

// Controller function for the GET route

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// Controller function for the POST route

const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a task");
  }
  const task = await Task.create({ text: req.body.text });
  res.status(200).json(task);
});

// Controller function for the PUT route

const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

// Controller function for the DELETE route

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id)
  if (!task){
    res.status(400)
    throw new Error('Task not found')
  }
  await Task.findByIdAndDelete(req.params.id)
  res.status(200).json({ id: req.params.id })
});

// Export module

module.exports = { getTasks, setTask, updateTask, deleteTask };
