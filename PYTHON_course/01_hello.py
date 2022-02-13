# Print SingleLine
from winsound import PlaySound


print("Hello World")

# Print multiline
print(''' lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec euismod, nisi vel consectetur ornare, nisl nunc
    consectetur nisl, sed egestas nisi nisl eu nisi.
    Donec euismod, nisi vel consectetur ornare, nisl nunc''')

# Import Internal module
import os
print(os.listdir())

#Import External modules : pip install <module>
from playsound import playsound
playsound("C:\\xampp\\htdocs\\MyCourses\\PYTHON_course\\1.mp3")


