#
class RailwayForm:
    formType = "RailwayForm"

    def printData(self):  # method
        print(f"Traveller Name is {self.name} boarding from {self.train}")

travellerApplication = RailwayForm()  # Object new instance
travellerApplication.name = "Sagar"
travellerApplication.train = "Gomti Express"

travellerApplication.printData()

#
class Employee:
    company = "Google"

sagar = Employee()
print(sagar.company)
Employee.company = "Chatnaut"  #changing class attribute
print(sagar.company)

