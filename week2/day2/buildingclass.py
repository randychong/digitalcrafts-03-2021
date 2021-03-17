# create a building class
# building class will have heigh, capacity, square feet, commercial

# ask the user to create a building, they will enter in a height, capacity of people, sqft

# create 5 instances of a building (while loop)
# print out the specs of the building everytime the building is made
# print statement needs to be a method

class building:
    def __init__(self, height, capacity, area):
        self.height = height
        self.capacity = capacity
        self.area = area
        self.type = "commercial"

    def build_specs(self):
        print(f" building height: {self.height} \n building capacity: {self.capacity} \n building area in sq ft: {self.area} \n building type: {self.type}")

def build_creation():
    new_build = ""
    build_height = input("Please enter the building's height:\n")
    build_capacity = input("Please enter the building'scapacity: \n")
    build_area = input("Please enter the building's area insquare feet: \n")
    new_build = building(build_height, build_capacity, build_area)
    building.build_specs(new_build)
    # return print("height: ", build_height, " capacity: ",build_capacity, " area: ", build_area,"sq ft")

count = 0
while count < 5:
    build_creation()
    count += 1