require("dotenv").config();                 // hide sensitive information to environment variables

const express = require('express');
const cors = require('cors');

const app = express();
// const port = process.env.PORT || 3001    // defined in .env
app.use(express.json());
app.use(cors());
const userRouter = require("./api/users/user.router");

app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT, () => {
    console.log(`Listening to port ${process.env.APP_PORT}`);
});