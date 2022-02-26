require("dotenv").config();                 // hide sensitive information to environment variables

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001 // defined in .env
app.use(express.json());


// var whitelist = ['http:localhost/', 'https://localhost/']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
app.use(cors());
const userRouter = require("./api/users/user.router");

app.use("/api/users", userRouter);
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});