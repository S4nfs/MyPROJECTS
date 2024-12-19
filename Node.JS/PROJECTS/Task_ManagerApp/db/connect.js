const mongoose = require('mongoose');

const connectDB = (url) => { //putting the connect inside function for export in order to start server only when connection is successfull
   return mongoose.connect(url, {
        //avoid deprecation warnings!
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} 

module.exports = connectDB;
