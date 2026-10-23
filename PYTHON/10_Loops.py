# 🍏 While Loop-------------------------------------------------------------------------------------------------
a = 0
while(a <= 10):         # a is a counter variable here
    print(a)
    a = a+1

# 🍏 For-in Loop-------------------------------------------------------------------------------------------------
fruits = ["Apple", "Mango", "Guava", "Banana" ]
for item in fruits:
    print(item)

# 🍏 Iterating loops --------------------------------------------------------------------------------------------
# using range function(start, stop, step_size) is use to generate a sequence of numbers
for i in range(8):
    print(i) # 0,1,2,3,4,5,6,7

for j in range(1, 8, 3):
    print(j) # 1,4,7

for k in range(8):
    if(k ==5):
        continue # continue will skip the current iteration and go to next iteration
    print(k) # 0,1,2,3,4,6,7

# Table using for-in
num = int(input("Enter a number \n"))
for i in range(1, 11):                                                  #if you want to reverse table(10, 0, -1)
    # print(str(num)+ " X " + str(i) + " = " + str(i*num))              #OR using f strings
    print(f"{num} X {i} = {i*num}")


# Using map function | SYNTAX: map(function, iterable)

bmw = [1,2,3,4,5]

result = map(lambda x: x*2, bmw)
print("MAP bmw", list(result))