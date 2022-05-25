const express = require('express');
const tasks = require('./routes/task');
const port = 3000;
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config();
//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
    res.send("Hello Node");
});

app.use('/api/v1/tasks', tasks)
//app.get('api/v1/tasks')        -get all the tasks
//app.post('api/v1/tasks')       -create task
//app.get('api/v1/tasks/:id')    -get single task
//app.patch('api/v1/tasks/:id')  -update task
//app.delete('api/v1/tasks/:id') -delete task

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);   //calling connectDB with arguement URL
        app.listen(port, console.log(`Server is running on port ${port}....`)); //start server is connection is successful
    } catch (error) {
        console.log(error);
    }
}

start();