<?php
/*  
SQL - SQL stands for Structured Query Language. it let you access and manipulate databases. SQL keywords are NOT case sensitive: e.g: select is the same as SELECT

Tables - The data in RDBMS is stored in database objects called tables. A table is a collection of related data entries and it consists of rows and columns.

Fields - A field is a column in a table.

Row - A row or record is a horizontal entity which consists of each individual entry that exists in a table



Some specific SQL commands (ONLY ADVANCED):=============================================================================================
>SELECT DISTINCT degree FROM registration;                      - return all the unique degrees in the table
>SELECT * FROM registration WHERE id BETWEEN 1 AND 5;           - return all the records with id between 1 and 5
>SELECT * FROM registration WHERE degree LIKE 'c%';             - return all the records with degree that starts with 'c' just as in 
                                                                  laravel ecommerce project %c%
>SELECT * FROM registration WHERE degree IN ('Bcom', 'MCs');    - return all the records with degree that is either 'Bcom' or 'MCS'
>SELECT * FROM registration ORDER BY refer;                     - return all the records in the table in ascending order by refer
>SELECT * from registration ORDER BY refer DESC;                - return all the records in the table in descending order by refer
>SELECT MAX(id) FROM id;                                        - return the maximum id in the table
>SELECT SUM(id) FROM registration;                              - return the sum of all the ids in the table
>SELECT COUNT(degree) FROM registration;                        - return the number of degrees in the table
>SELECT AVG(id) FROM registration;                              - return the average of all the ids in the table
>SELECT degree FROM registration WHERE degree LIKE '%c%';       - return all the degrees that include 'c'
>SELECT * FROM registration WHERE id BETWEEN 1 AND 3 ORDER BY id; - return all the records with id between 1 and 3 in ascending order by id


🍺 Inner Join: 
The INNER JOIN is a keyword that selects records that have matching values in both tables
Syntax: 
SELECT column1, column2 FROM table1 INNER JOIN table2 ON table1.Column_Name = table2.Column_Name;

>SELECT * from users INNER JOIN orders ON users.id=orders.user_id;  - return all the records matching in the users table (column id)
                                                                      from the orders table (column user_id) in ecommerce database

🍺 Right Join: 
The RIGHT JOIN leyword is used return all records from the Right table (table2), and the matching records from the Left table (table1)
Syntax:
SELECT column1, column2 FROM table1 RIGHT JOIN table2 ON table1.Column_Name = table2.Column_Name;

>SELECT * from users RIGHT JOIN orders ON users.id=orders.user_id;  - return all the records matching in the users table (column id)
                                                                      from the orders table (column user_id) in ecommerce database

🍺 Left Join:
The LEFT JOIN keyword is used to return all records from the left table (table1), and the matching records from the right table (table2).
Syntax:
SELECT column1, column2 FROM table1 LEFT JOIN table2 ON table1.Column_Name = table2.Column_Name;

>SELECT * from users LEFT JOIN orders ON users.id=orders.user_id;  - return all the records matching in the users table (column id)
                                                                      from the orders table (column user_id) in ecommerce database

🍺 Full Join:
The FULL JOIN keyword is used to return all records from both tables.
Syntax:
SELECT column1, column2 FROM table1 FULL JOIN table2 ON table1.Column_Name = table2.Column_Name;

>SELECT * from users FULL JOIN orders ON users.id=orders.user_id;  - return all the records matching in the users table (column id)
                                                                      from the orders table (column user_id) in ecommerce database

>CREATE DATABASE databasename;                                          - create a database
>CREATE TABLE tablename (column1 datatype, column2 datatype);           - create a table
>INSERT INTO tablename (column1, column2) VALUES (value1, value2);      - insert a record into a table
>UPDATE tablename SET column1=value1, column2=value2 WHERE id=value3;   - update a record in a table
>DELETE FROM tablename WHERE id=value1;                                 - delete a record from a table
>DROP DATABASE databasename;                                            - delete a database
>DROP TABLE tablename;                                                  - delete a table
>TRUNCATE TABLE tablename;                                              - delete all the records in a table but not the table itself
>ALTER TABLE tablename ADD columnname datatype;                         - add a column to a table
>ALTER TABLE tablename DROP columnname;                                 - delete a column from a table

🍺 SQL Constraints:==============================================================================================================
SQL constraints are used to specify rules for the data in a table.

NOT NULL - Ensures that a column cannot have a NULL value
UNIQUE - Ensures that all values in a column are different
PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
FOREIGN KEY - Prevents actions that would destroy links between tables
CHECK - Ensures that the values in a column satisfies a specific condition
DEFAULT - Sets a default value for a column if no value is specified
CREATE INDEX - Used to create and retrieve data from the database very quickly
