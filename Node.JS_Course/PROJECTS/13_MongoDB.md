MySQL    V/S    MongoDB
==============================
Tables = Collections
Row      = Documents
Columns  = Fields

Mongo DB Commands: CRUD
==============================
1.show dbs : show all databases

2.use <dbname> : use or create database 

3.db.colllection_name.insertOne({name: "React", Type:front-end, Contributions:50 Active:True}) : insert only one document into collection

4.db.colllection_name.insertMany([{name: "NodeJs", Type:Backend, Contributions:98 Active:True}, {name: "MongoDB", Type:Database, Contributions:10 Active:False}]) : insert multiples

5.show collections : show all collections

6.db.collection_name.find() : show all documents in collection

7.db.collection_name.find().pretty() : show all documents in collection in pretty format

8.db.collection_name.find({name:"React"}) : get output of the document with only name: React

9.db.collection_name.updateOne({name:"React"},{$set:{name:"ReactJS"}}) : update the document with name React to name ReactJS

10.db.collection_name.updateMany({name:"React"},{$set:{name:"ReactJS"}}) : update all documents with name React to name ReactJS

11.db.collection_name.deleteOne({name:"ReactJS"}) : delete the document with name ReactJS

12.db.collection_name.deleteMany({name:"ReactJS"}) : delete all documents with name ReactJS

13.db.collection_name.drop() : delete the collection