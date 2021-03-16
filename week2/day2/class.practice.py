# create a User class that has the ability to print the user's name
# the ability to print the user's age

# create a TempUser class that has the ability to only print his name

# create a function that asks you to give the user a name, and give the user an age, and will then create the user for you and print it. User will have choice to be a temp user or user

class user_class:
    def __init__(self, name, age, type):
        self.name = name
        self.age = age
        self.type = type

    def print_username(self):
        print(f"{self.name}")
        print(f"{self.age}")

class temp_user_class:
    def __init__(self, name, age, type):
        self.name = name
        self.type = type

    def print_temp_username(self):
        print(f"{self.name}")

def username_creation():
    username = ""
    name_input = input("What is your name? \n")
    user_age = input("What is your age? \n")
    user_type = input("What is your user type? Please select (r)Regular User or (t)Temp User \n")

    if user_type == "r":
        username = user_class(name_input, user_age, user_type)
        print(username.name, username.age, "Regular User")
    elif user_type == "t":
        username = user_class(name_input, user_age, user_type)
        print(username.name, username.age, "Temporary User")

username_creation()