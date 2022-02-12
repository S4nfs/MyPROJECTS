const mongoose = require("mongoose");

//Create connection to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mongoosedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

//schema defines the structure of the documents in the collection
const meratablelistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//Mongoose Model provides an interface to the database simply,
//COLLECTION CREATION(tables)
const Meratable = new mongoose.model("Meratable", meratablelistSchema);

//CREATE DOCUMENT(row) using async await
const createDocument = async () => {
  try {
    const phpPlaylist = new Meratable({
      name: "Mongoose",
      ctype: "MongoDB object modeling tool",
      active: true,
    });
    const result = await phpPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();
