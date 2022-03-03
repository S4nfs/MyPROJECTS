
# Class attribute (attached to class) || Instance attribute (attached to instance/object)
class Employee:
    company = "Google"
    salary = "500"

sagar = Employee()
print(sagar.company)
Employee.company = "Chatnaut"  # changing class attribute
print(sagar.company)

sagar.salary = 1000
print(sagar.salary)  # changing instance attribute [limited to instance only]



# Self
class Employee:
    company = "Google"

    def getSalary(self):
        print(f"My salary in {self.company} is {self.salary}")

sagar = Employee()
sagar.salary = 1000
sagar.getSalary()   #same as Employee.getSalary(sagar)


#Static Method - When we don't want to use self parameter
class Employee:
    company = "Google"

    def getSalary(self):
        print(f"My salary in {self.company} is {self.salary}")

    @staticmethod
    def greet():
        print("Good Morning Sir")

sagar = Employee()

sagar.salary = 1000
sagar.getSalary()  
sagar.greet()

# 🍏-----------------------------------------------------------------------------------------------
class RailwayForm:
    formType = "RailwayForm"

    def printData(self):  # method
        print(
            f"Traveller Name is {self.name} boarding from {self.train} as per {self.formType}")


travellerApplication = RailwayForm()  # Object new instance

travellerApplication.name = "Sagar"
travellerApplication.train = "Gomti Express"
travellerApplication.printData()
