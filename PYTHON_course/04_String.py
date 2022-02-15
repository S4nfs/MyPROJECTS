greeting = "Good Morning, "
group = "to all of you"
print(greeting + group) #concatenation

# 🍏 String Slicing---------------------------------------------------------

name = "JohnIsAGoodBoy"
print(name[0])  #J
print(name[0:3]) #Joh
print(name[0:]) #John
print(name[:]) #John
print(name[-1]) #n
print(name[-4]) #J
print(name[0::2]) #Skip character every 2
print(len(name)) #Length of string

# 🍏 Escape Sequencing- \n(newline), \t(tab), \'(single quote), \\(backslash)

school = "\'I studied \tcommerce from \nST.Judes College\'"
print(school)

# 🍏 A program to replace string---------------------------------------------
letter = '''Dear  <|Name|>,
Greetings from ABC coding house.

You are Selected for the next round of the coding challenge.
thanks and regards,
Team ABC
Date: <|Date|>'''

name = input("Enter your name: \n")
date = input("Enter the date: \n")
letter = letter.replace("<|Name|>", name)
letter = letter.replace("<|Date|>", date)
print(letter)