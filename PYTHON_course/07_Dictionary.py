# 🍏  A Dictionary is a collection of key-value pairs. (Mutable)

myDict = {
    "fast": "In a  quick manner",
    "Sagar": "A coder",
    "Marks": [52, 99, 100],
    "skills": {
        "skill1": "LAMP",
        "skill2": "MERN",
         },
    1:2
}
print(myDict["fast"])
print(myDict["skills"]["skill1"])

myDict["Marks"] = [25, 44, 10]      # Change the values
print(myDict["Marks"])

print(myDict.keys())                # Print all keys with class
print(type(myDict.keys()))          # Type
print(list(myDict.keys()))          # Print all keys[in list by type-casting into list]
print(list(myDict.values()))        # Print all values
print(myDict.items())               # Returns all data in tuple

myDictadd = {                       # Append key:value in Dictionary
    "friends": "Ajay"
}
myDict.update(myDictadd)
print(myDict)


print(myDict.get("Sagar"))           #Both give same result but
print(myDict["Sagar"])               # .get returns [none] if not found and later returns [error: blah blah]

