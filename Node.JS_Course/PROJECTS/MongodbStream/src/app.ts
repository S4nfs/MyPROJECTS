import mongoose from "mongoose"
import faker from "faker"
// import { ChangeStreamDocument } from "mongodb"
import dotenv from "dotenv"
import User, { UserInput, UserDocument } from "./models/user.model"
dotenv.config()

mongoose
  .connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))

async function createUser(payload: UserInput) {
  return User.create(payload)
}
const changeStream = User.watch([], {
  fullDocument: "updateLookup",
})
changeStream.on("change", (data) => {
  if (data.operationType === "insert") {
    console.log("User inserted: ", data.fullDocument)
  }
  if (data.operationType === "update") {
    console.log("User updated: ", data.fullDocument)
  }
  if (data.operationType === "replace") {
    console.log("User updated: ", data.fullDocument)
  }

  if (data.operationType === "delete") {
    console.log("User deleted: ", data._id)
  }
})

async function run() {
  await createUser({
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  })
}

run()
