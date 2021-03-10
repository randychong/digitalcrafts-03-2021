UserFirstName = input("What is your first name?")
lengthOfUserFirstName = len(UserFirstName)

while(lengthOfUserFirstName < 1):
    UserFirstName = input("What is your first name?")
    lengthOfUserFirstName = len(UserFirstName)

print("The user's first name is %s" % (UserFirstName))

UserLastName = input("What is your last name?")
lengthOfUserLastName = len(UserLastName)

while(lengthOfUserLastName < 1):
    UserLastName = input("What is your last name?")
    lengthOfUserLastName = len(UserLastName)

print("The user's full name is %s %s" % (UserFirstName, UserLastName))

FriendFirstName = input("What is your friend's first name?")
lengthOfFriendName = len(FriendFirstName)

while(lengthOfFriendName < 1):
    FriendFirstName = input("What is your friend's first name?")
    lengthOfFriendName = len(FriendFirstName)

print("Your friend's first name is %s" % FriendFirstName)

FriendLastName = input("What is your friend's last name?")
lengthOfFriendLastName = len(FriendLastName)

while(lengthOfFriendLastName < 1):
    FriendLastName = input("What is your friend's last name?")
    lengthOfFriendLastName = len(FriendLastName)

print("Your friend's full name is %s %s" % (FriendFirstName, FriendLastName))

print("%s %s is friends with %s %s." % (UserFirstName, UserLastName, FriendFirstName, FriendLastName))