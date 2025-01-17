# MySQL V/S MongoDB

Tables = Collections
Row = Documents
Columns = Fields

# MongoDB Query Operators

## Comparison
- $eq: Values are equal
- $ne: Values are not equal
- $gt: Value is greater than another value
- $gte: Value is greater than or equal to another value
- $lt: Value is less than another value
- $lte: Value is less than or equal to another value
- $in: Value is matched within an array
- $nin: Value is not matched within an array

## Logical
- $and: Returns documents where both queries match
- $or: Returns documents where either query matches
- $nor: Returns documents where both queries fail to match
- $not: Returns documents where the query does not match

## Evaluation
- $regex: Allows the use of regular expressions when evaluating field values
- $text: Performs a text search
- $where: Uses a JavaScript expression to match documents

# MongoDB Update Operators

## Fields
- $currentDate: Sets the field value to the current date
- $inc: Increments the field value
- $rename: Renames the field
- $set: Sets the value of a field
- $unset: Removes the field from the document

## Array
- $addToSet: Adds distinct elements to an array
- $pop: Removes the first or last element of an array
- $pull: Removes all elements from an array that match the query
- $push: Adds an element to an array

# Mongo DB Commands: CRUD

```mongodb
# show all databases
show dbs

# use or create database
use <dbname>

# insert only one document into collection
db.colllection_name.insertOne({name: "React", Type:"frontEnd", Contributions:50, Active:true})

# insert multiples
db.collection_name.insertMany([{name: "React", Type:"frontEnd", Contributions:50, Active:true, Libraries:{tailwindCSS: true}}, {name: "NodeJs", Type:"Backend", Contributions:98, Active:true, contributorsNames: ["Sagar", "Vivek", "Rishabh"], createdAt: new Date()}, {name: "MongoDB", Type:"Database", Contributions:10, Active:false}, {name: "NextJS", Type:"frontEnd", Contributions:5, Active:true, Libraries:{tailwindCSS: false}, contributorsNames: ["Sagar", "Rishabh"], createdAt: new Date()},{name: "GoLang", Type:"Backend", Contributions:120, PRs: 719, Active:true, Libraries:{Gin: true}, contributorsNames: ["Sagar"], createdAt: new Date()},
{name: "React", Type:"frontEnd", Contributions:150, Active:false, Libraries:{tailwindCSS: false, passport: true, radix: true }, contributorsNames: ["John", "Mohit", "Parthik"] ,  PRs: 55}])

# show all collections
show collections

# show all documents in collection
db.collection_name.find()

# show all documents in collection in pretty format
db.collection_name.find().pretty()

# get output of the document with only name: NextJS and doen't include tailWindCSS library and has the contributor Rishabh assigned
db.collection_name.find({name:"NextJS", "Libraries.tailwindCSS": false, "contributorsNames: "Rishabh"})

# Projections - Both find methods accept a second parameter called projection, use 1 to include and 0 to exclude, cannot use both except for _id
db.collection_name.find({}, {_id:0, name: 1, Active:1})

# Contributions >= 70
db.collection_name.find({Contributions: {$gte:70}})

# Contributions > 70
db.collection_name.find({Contributions: {$gt:70}})

# find where Contributions <= 70 && PRs < 2000
db.collection_name.find({Contributions: {$lte:70}, PRs:{lt:2000}})

# find where Contributions <= 70 || price < 2000
db.collection_name.find({$or:[{Contributions:{lte:70}}, {price:{lt:2000}} ]})

# Some Return Document Option:
 {returnDocument: 'before'}                     = return document after/before the operation updates
 {upsert: true}                                 = document if not found creats one 
 {new: true} (or {returnNewDocument: true})     = return the updated document after operation updates

# Note=> {new: true} (or {returnNewDocument: true}): used with findOneAndUpdate(), findOneAndReplace(), findOneAndDelete() 
# {upsert: true}: used with findOneAndUpdate(), updateOne(), updateMany()

# finds and updates the first matching document if not found creats one {upsert: true}, and return that document before or after the update (depend on passing {new: true}) Note: {new: true} is deprecated in newer MongoDB versions use {returnNewDocument: true} instead
db.collection_name.findOneAndUpdate({ name: 'React' }, { $set: { Libraries: {daisyUI: true}}}, { new: true }, {upsert:true})

# findOneAndUpdate, findOneAndReplace, findOneAndDelete: Finds and updates/delete a single document, and returns the document (either before or after the update). Use this when you need the updated (or old) document as a result.

# updateOne, updateMany, deleteOne, deleteMany: Updates a single document but does not return the document—instead, it returns an object with operation details (e.g., matchedCount, modifiedCount).

# update the first document with name React to name ReactJS and push the names to the contributorsNames
db.collection_name.updateOne({name:"React"}, {$set:{name:"ReactJS"}, $push:{contributorsNames:{$each: ["Luke", "Arthur", "Vishal"]}}})

# insert the document if it is not found, upsert is a compound word of "update" and "insert"
db.collection_name.updateOne({name:"React"}, {$set:{name:"ReactJS"}}, {upsert:true})

# update all documents with name React to name ReactJS
db.collection_name.updateMany({name:"React"}, {$set:{name:"ReactJS"}})

# delete the document with name ReactJS
db.collection_name.deleteOne({name:"ReactJS"})

# delete all documents with name ReactJS
db.collection_name.deleteMany({name:"ReactJS"})

# delete the collection
db.collection_name.drop()

```

# What Does Atomicity Mean?
Atomicity ensures that the operation is treated as a single, indivisible unit of work. Transactions are designed to provide ACID (Atomicity, Consistency, Isolation, Durability) properties.

## Atomic Operations:
Operations like $push, $set, and $pull are atomic at the document level.
This means that if two operations are modifying different fields or array elements in the same document, they will not interfere with each other.

## Non-Atomic Operations:
Operations that span multiple documents (e.g., multi-document updates) are not atomic unless you use transactions.


# Aggregation:
aggregation pipeline is a powerful feature that allows you to process and transform data in multiple stages

## Stages Operator
- $group: Groups documents by a specific field and performs calculations (like GROUP BY in SQL).
- $match: Filters documents based on a condition (like WHERE in SQL).
- $sort: Sorts documents by one or more fields.
- $project: Reshapes documents by including, excluding, or renaming fields.
- $limit: Limits the number of documents passed to the next stage
- $skip: Skips a specified number of documents.
- $unwind: Deconstructs an array field into multiple documents (one document per array element, useful for interations).
- $lookup: Performs a join with another collection (like JOIN in SQL).
- $addFields: Adds new fields to documents.
- $count: Counts the number of documents at the current stage.

```mongodb
Format
db.collection.aggregate([
  { stage1: { ... } }, // First stage
  { stage2: { ... } }, // Second stage
  { stage3: { ... } }, // Third stage
  // Add more stages as needed
]);

```
# grouping as per the name
```mongodb
db.collection_name.aggregate([
  // Stage 1: Filter documents for "React"
  {
    $match: {
      name: "React"
    }
  },
  // Stage 2: Group by "name" and calculate totals
  {
    $group: {
      _id: "$name",
      TotalNumberOfAllReposAsPerTechStack: { $sum: 1 },             // Count documents
      AvgNumberOfAllReposAsPerTechStack: { $avg: "$Contributions" } // Average contributions
    }
  },
  // Stage 3: Unwind contributorsNames (if it exists) and count contributors
  {
    $unwind: {
      path: "$contributorsNames",
      preserveNullAndEmptyArrays: true                             // Handle cases where contributorsNames doesn't exist
    }
  },
  // Stage 4: Group by contributors and count
  {
    $group: {
      _id: "$_id",                                                // Group by the original name (React)
      TotalContributorsOfReact: {
        $sum: {
          $cond: {
            if: { $ifNull: ["$contributorsNames", false] },       // Check if contributorsNames exists
            then: 1,
            else: 0
          }
        }
      }
    }
  }
]);


```