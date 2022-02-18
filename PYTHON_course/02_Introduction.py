#🍏 A variable is a container to store a value. [IS CASE-SENSITIVE]
# Keywords are reserved words in python.
# Identifiers = class/function/variable name

a = "Sagar"
_b = 30
c_1 = 45.25
D = True
e = None
print(type(a)) #<class 'str'>
print(type(_b)) #<class 'int'>
print(type(c_1)) #<class 'float'>
print(type(D)) #<class 'bool'>
print(type(e)) #<class 'NoneType'>

#🍏 OPERATORS ---------------------------------------------------------------------------------------------------
''' 
1. Arithmetic Operators : +, -, *, /, //, %, **
2. Assignment Operators : =, +=, -=, *=, /=, //=, %=, **=
3. Comparison Operators : ==, !=, >, <, >=, <=
4. Logical Operators : and, or, not
5. Bitwise Operators : &, |, ^, ~, <<, >>
6. Membership Operators : in, not in
7. Identity Operators : is, is not

'''
#[1]
x = 20
y = 10
print("Addition of x and y is ", x+y)
print("Subtraction of x and y is ", x-y) 
print("Multiplication of x and y is ", x*y)
print("Division of x and y is ", x/y) #floating point 2.0
print("Modulus of x and y is ", x%y)
print("Exponent of x and y is ", x**y)# x to the power of y
print("Floor division of x and y is ", x//y)# same as division but rounds the result down here 2

#[2]
a_1 = 10
a_1 += 5
print(a_1) #15

#[3]
p = (10 > 5)
print(p) #True



#🍏 Type Casting ---------------------------------------------------------------------------------------------------

a = "10"
a = int(a) #convert string to integer
print(a + 10) #20

