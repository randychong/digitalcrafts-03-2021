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

    # def build_specs = print(building)

def building_creation():
    building_name = ""
    build_height = input("Please enter the building's height: \n")
    build_capacity = input("Please enter the building's capacity: \n")
    build_area = input("Please enter the building's area in square feet: \n")
    return print("height: ", build_height, "capacity: ", build_capacity, "area: ", build_area,"sq ft")

building_creation()