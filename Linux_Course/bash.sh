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


echo "Number 1"
read x
echo "Number 2"
read y

if [ $x -lt $y ]
then
echo $x " is less than " $y
elif [ $x -gt $y ]
then
echo $x " is greater than " $y
elif [ $x -eq $y ]
then
echo $x " is equal to " $y
elif [ $x -ne $y ]
then 
echo $x " is not equal to " $y
else
echo "Invalid input"
fi

#loops
for i in {1..5}
do
echo $i
done

