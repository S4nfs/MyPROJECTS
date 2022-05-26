const Task = require('../models/task');
//Get all
const getAllTasks = async (req, res) => {
    try {
        const alltask = await Task.find({})
        res.status(200).json({ alltask })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
//Create
const createTask = async (req, res) => {
    try {
        const ctask = await Task.create(req.body)
        res.status(201).json({ ctask })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
//Get by id
const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if (!task) {
            return res.status(404).json({ msg: `NO task with id : ${taskID}` })
        }
        res.status(200).json({ getTask })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
//Update
const updateTask = (req, res) => {
    res.send('update items');
}
//Delete
const deleteTask = (req, res) => {
    res.send('delete items');
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}