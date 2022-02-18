#🍏 While Loop--------------------------------------------------------------------------

a = 0
while(a <= 50):
    print(a)
    a = a+1

#🍏 For-in Loop-------------------------------------------------------------------------
fruits = ["Apple", "Mango", "Guava", "Banana" ]
for item in fruits:
    print(item)

#🍏 Range function(start, stop, step_size) is use to generate a sequence of numbers-----
for i in range(8):
    print(i) # 0,1,2,3,4,5,6,7

for j in range(1, 8, 3):
    print(j) # 1,4,7

for k in range(8):
    if(k ==5):
        continue # continue will skip the current iteration and go to next iteration
    print(k) # 0,1,2,3,4,6,7

