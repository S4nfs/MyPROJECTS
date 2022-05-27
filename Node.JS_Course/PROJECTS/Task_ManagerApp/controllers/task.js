const Task = require('../models/task');
//Get all
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        // res.status(200).json({ status: "success", data:{tasks, nbHits:tasks.length} })
        res.status(200).json({ tasks })

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
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID }) //findOne takes an object as arguement whereas findById takes an id as arguement
        if (!task) {
            return res.status(404).json({ msg: `NO task with id : ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
//Update
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,                   //return updated value
            runValidators: true,         //do not update if values are null
        })
        if (!task) {
            return res.status(404).json({ msg: `NO task with id : ${taskID}` })
        }
        res.status(200).json({ task });
    }
    catch {
        res.status(500).json({ msg: error })
    }
}
//Delete
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `NO task with id : ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}