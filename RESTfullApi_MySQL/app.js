require("dotenv").config();                 // hide sensitive information to environment variables

const express = require('express');
const app = express();
// const port = process.env.PORT || 3001    // defined in .env
const userRouter = require("./api/users/user.router");
app.use(express.json());

app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT, () => {
    console.log(`Listening to port ${process.env.APP_PORT}`);
});