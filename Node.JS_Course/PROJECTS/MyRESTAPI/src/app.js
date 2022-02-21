const express = require('express');
require('./db/conn');
const Student = require('./models/students');

const app = express();
const port = process.env.PORT || 3000

//express.json is a method inbuilt in express to reconize the incoming request Object as a JSON Object.
app.use(express.json())

//Deugging Connection
// app.get('/', (req, res) => {
//     res.send(`Listening to port ${port}`);
// })

//https://mongoosejs.com/docs/queries.html
//Create (POST) using Promise-------------------------------------------------------------------------------
// app.post('/students', (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })

//Create (POST) using Async Await
app.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save()
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Read (GET)----------------------------------------------------------------------------------------------------
app.get('/students', async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(201).send(studentsData);
    } catch (e) {
        res.status(400).send(e);
    }
})
//GET individual data by id e.g: localhost:3000/students/6210ef067687b4dae2c5f13d
app.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const singleStudentData = await Student.findById({ _id: _id })
        res.status(201).send(singleStudentData);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Update
app.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate({ _id: _id }, req.body);
        res.status(201).send(updateStudents);
    } catch (e) {
        res.status(404).send(e);
    }
})

//Delete
app.delete('/students/:id', async (req, res) => {
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


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
