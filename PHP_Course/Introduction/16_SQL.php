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