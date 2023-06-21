const mongoose = require("mongoose");
require('dotenv').config()

//Create connection to MongoDB

const start = async () => {

  await mongoose
    .connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB, ERROR: ", err));


  //SCHEMA defines the structure of the documents in the collection
  const meratablelistSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Enter name is mandatory'],
      unique: true,
      trim: true
    },
    ctype: String,
    active: Boolean,
    ctc: {
      type: Number,
      default: 0
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  });

  //CREATE COLLECTION(tables)---------------------------------------------------------------------------------------------
  //Mongoose MODEL provides an interface to the database simply,
  const Meratable = new mongoose.model("Meratable", meratablelistSchema);

  //🍃CREATE DOCUMENT(row) using async await
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

  // const pythonPlaylist = new Meratable({
  //   name: "Python",
  //   ctype: "Backend",
  //   active: true,
  // });
  // const result = await Meratable.insertMany([javaPlaylist, goPlaylist, pythonPlaylist]); //insert many
  // await pythonPlaylist.save().then((res) => {
  //   console.log(res);
  // }).catch((error) => {
  //   console.log(error);
  // })

  //----------OR-----------
  //await Meratable.create({
  //   name: "Python2",
  //   ctype: "Backend",
  //   active: true,
  // }).then((res) => {
  //   console.log(res);
  // }).catch((error) => {
  //   console.log(error);
  // })


  //🍃READ DOCUEMNT---------------------------------------------------------------------------------------------
  // const getDocument = async () => {
  //   const result = await Meratable.find();
  //   console.log(result);
  // }
  // getDocument();

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

  const getDocument = async () => {
    const result = await Meratable.find().where("name").equals("Python").where("ctype").equals("Backend");
    console.log(result);
  }
  getDocument();

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
  // const updateDocument = async () => {
  //   try {
  //     const result = await Meratable.updateOne({ _id: "620a56d4b8584419310b61d5" }, { $set: { name: "python" } });
  //     //to show the new value use findByIdAndUpdate({},{},{}) takes three arguments
  //     // const result = await Meratable.findByIdAndUpdate({ _id: "620a56d4b8584419310b61d5" }, { $set: { name: "python" }}, {new: true, useFindAndModify: false});
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // updateDocument()


  //🍃DELETE DOCUMENT---------------------------------------------------------------------------------------------
  // const deleteDocument = async () => {
  //   try {
  //     const result = await Meratable.deleteOne({ _id: "620e0aa2a15a138fe05b0c3b" });
  //     //simmilar to above if you want to grab the deleted output use
  //     // const result = await Meratable.findByIdAndDelete({ _id: "620e0aa2a15a138fe05b0c3b" });
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // deleteDocument()
}
start()