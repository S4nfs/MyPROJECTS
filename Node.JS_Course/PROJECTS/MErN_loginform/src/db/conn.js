const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/loginform", {
    //avoid deprecation warnings!
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(e);
})