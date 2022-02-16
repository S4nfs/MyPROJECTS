const mongoose = require("mongoose");

//Create connection to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mongoosedb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

//SCHEMA defines the structure of the documents in the collection
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

//CREATE COLLECTION(tables)---------------------------------------------------------------------------------------------
//Mongoose MODEL provides an interface to the database simply,
const Meratable = new mongoose.model("Meratable", meratablelistSchema);

//🍃CREATE DOCUMENT(row) using async await
// const createDocument = async () => {
//   try {
//     const javaPlaylist = new Meratable({
//       name: "Java",
//       ctype: "Backend",
//       active: false,
//     });

//     const goPlaylist = new Meratable({
//       name: "Go",
//       ctype: "Backend",
//       active: true,
//     });

//     const pythonPlaylist = new Meratable({
//       name: "Python",
//       ctype: "Backend",
//       active: true,
//     });
//     // const result = await phpPlaylist.save();   //insert only one document
//     const result = await Meratable.insertMany([javaPlaylist, goPlaylist, pythonPlaylist]); //insert many
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDocument();

//🍃READ DOCUEMNT---------------------------------------------------------------------------------------------
const getDocument = async () => {
const result = await Meratable.find();
console.log(result);
}
getDocument();

/*🍃Mongodb Operators---------------------------------------------------------------------------------------------
$eq : Matches values that are equal to a specified value.
$gt : Matches values that are greater than a specified value.
$gte : Matches values that are greater than or equal to a specified value.
$in : Matches any of the values specified in an array.
$lt : Matches values that are less than a specified value.
$lte : Matches values that are less than or equal to a specified value.
$ne : Matches all values that are not equal to a specified value.
$nin : Matches none of the values specified in an array.
*/

//with operator Example:
// const getDocument = async () => {
//   const result = await Meratable.find({videos: {$gt: 10}});
//   console.log(result);
//   }
//   getDocument();

//Matching those which contains both Backend and Database as ctype
// const getDocument = async () => {
//   const result = await Meratable.find({ctype: {$in : ["Backend", "Database"]}});
//   console.log(result);
//   }
//   getDocument();

//Matching those which contains ctype Backend as well as active true
// const getDocument = async () => {
//   try {
//     const result = await Meratable.find({ $and: [{ ctype: "Backend" }, { active: true }] })
//     console.log(result)
//   }
//   catch (err) {
//     console.log(err)
//   }
// }
// getDocument()

//🍃UPDATE DOCUMENT---------------------------------------------------------------------------------------------
