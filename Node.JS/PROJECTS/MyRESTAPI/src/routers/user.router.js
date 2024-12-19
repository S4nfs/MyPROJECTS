const express = require("express");
const Student = require('../models/students');

//Create a router
const router = new express.Router();
//https://mongoosejs.com/docs/queries.html
//Create (POST) using Promise-------------------------------------------------------------------------------
// router.post('/students', (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

//Create (POST) using Async Await
router.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save()
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Read (GET)----------------------------------------------------------------------------------------------------
router.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(201).send(studentsData);
    } catch (e) {
        res.status(400).send(e);
    }
})
//GET individual data by id e.g: localhost:3000/students/6210ef067687b4dae2c5f13d
router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const singleStudentData = await Student.findById({ _id: _id })
        res.status(201).send(singleStudentData);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Update
router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate({ _id: _id }, req.body);
        res.status(201).send(updateStudents);
    } catch (e) {
        res.status(404).send(e);
    }
})

//Delete
router.delete('/students/:id', async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteStudent)
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;