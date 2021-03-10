nameOfUser = input("What is your first name?")
lengthOfUserName = len(nameOfUser)

while (lengthOfUserName < 1):
    nameOfUser = input("What is your first name?")
    lengthOfUserName = len(nameOfUser)

print("The user name is %s" % (nameOfUser))