# 🍏 Read file using open() function-------------------------------------------------------------------------------------
# r = read
# w = write
# a = append
# + = update

a = open('filesystem.txt', 'r')      # default mode is 'r'
mydata = a.read()                    # read whole data
# mydata = myf.read(5)               # read first 5 characters
# mydata = myf.readline()            # read line
print(mydata)
a.close()

# No need to close file, use with statement
'''
with open("filesystem.txt") as openmyfile:
    readmyFile = openmyfile.read()
    print(readmyFile)
'''

# 🍏 Write file----------------------------------------------------------------------------------------------------------
a = open('filesystem.txt', 'w')      # overite file content and create file if it's not
a.write("here i am writing into file")

# 🍏 Append file----------------------------------------------------------------------------------------------------------
a = open('filesystem.txt', 'a')      # adding file content
a.write(". here i am appending into file")
