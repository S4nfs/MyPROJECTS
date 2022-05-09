#! /bin/bash

#print
echo "Hello World"
sleep 1

#variables
a=Welcometoshebang
echo $a

#Expressions
add=$((3+7))
echo $add

divide=$((22/7))
echo $divide

#Read user input
echo "Enter your name" 
read name
echo "Your name is "$name


# +-------------------------+------------------+
#        Operation          |     Syntax       |
# +-------------------------+------------------+
#  Greater than             | num1 -gt num2    | 
# +---------+---------------+------------------+
#  Greater than equal to    | num1 -ge num2    | 
# +---------+---------------+------------------+
#  Less than                | num1 -lt num2    |
# +---------+---------------+------------------+
#  Less than equal to       | num1 -le num2    | 
# +---------+---------------+------------------+
#  Equality                 | num1 -eq num2    |
# +---------+---------------+------------------+
#  Not Equal to             | num1 -ne num2    | 
# +-------------------------+------------------+
