# MySQL V/S MongoDB

Tables = Collections
Row = Documents
Columns = Fields

# Mongo DB Commands: CRUD

```mongodb
# show all databases
show dbs

# use or create database
use <dbname>

# insert only one document into collection
db.colllection_name.insertOne({name: "React", Type:front-end, Contributions:50 Active:True})

# insert multiples
db.collection_name.insertMany([{name: "NodeJs", Type:Backend, Contributions:98 Active:True}, {name: "MongoDB", Type:Database, Contributions:10 Active:False}])

# show all collections
show collections

# show all documents in collection
db.collection_name.find()

# show all documents in collection in pretty format
db.collection_name.find().pretty()

# get output of the document with only name: React
db.collection_name.find({name:"React"})

# Projections - Both find methods accept a second parameter called projection, use 1 to include and 0 to exclude, cannot use both except for _id
db.products.find({}, {_id:0, price:1, quantity:1})

# finds all but show only the required fields
db.products.find({}, {_id:0, price:1, quantity:1})

# quantity >= 70
db.products.find({quantity: {$gte:70}})

# quantity > 70
db.products.find({quantity: {$gt:70}})

# find where quantity <= 70 && price < 2000
db.products.find({quantity: {$lte:70}, price:{lt:2000}})

# find where quantity <= 70 || price < 2000
db.products.find({$or:[{quantity:{lte:70}}, {price:{lt:2000}} ]})

# finds and updates the first matching document if not found creats one {upsert: true}, and return that document before or after the update (depend on passing {new: true})
db.products.findOneAndUpdate({ name: 'invoiceGeneration' },{ $set: { invoiceStatus: 'Invoice generation task stopped' } },{ new: true }, {upsert:true})

# Note=> {new: true} (or returnNewDocument: true): used with findOneAndUpdate(), findOneAndReplace(), findOneAndDelete() 
# {upsert: true}: used with findOneAndUpdate(), updateOne(), updateMany()

# update the first document with name React to name ReactJS
db.collection_name.updateOne({name:"React"}, {$set:{name:"ReactJS"}})

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

# MongoDB Query Operators

## Comparison
- $eq: Values are equal
- $ne: Values are not equal
- $gt: Value is greater than another value
- $gte: Value is greater than or equal to another value
- $lt: Value is less than another value
- $lte: Value is less than or equal to another value
- $in: Value is matched within an array

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

# What Does Atomicity Mean?
Atomicity ensures that the operation is treated as a single, indivisible unit of work. Transactions are designed to provide ACID (Atomicity, Consistency, Isolation, Durability) properties.

## Atomic Operations:
Operations like $push, $set, and $pull are atomic at the document level.
This means that if two operations are modifying different fields or array elements in the same document, they will not interfere with each other.

## Non-Atomic Operations:
Operations that span multiple documents (e.g., multi-document updates) are not atomic unless you use transactions.