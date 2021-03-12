tasks = []

# defining the menu
mainMenu = """
Choose an action:\n
Press 1 to add a task
Press 2 to delete a task
Press 3 to view all tasks
Press q to quit
"""
# defining choice
def quitApp():
    quitMessage = input("Would you like to quit? (y)yes (n) no\n")
    if quitMessage == "y":
        exit()

choice = input(mainMenu)

while len(choice) > 0:
    if choice == "1":
        title = input("What task do you need to complete?\n")
        if len(title) > 0:
            tasks.append(title)
        priority = input("Is this task's priority high, medium, or low?\n")
        if len(priority) > 0:
            tasks.append(priority)
        print("Here is your updated to-do list:")
        for task in tasks:
            print("%s" % (task))
        quitApp()
    elif choice == "3":
        count = 1
        for task in tasks:
            print("%d: %s" % (count, task))
    elif choice == "q":
        quitApp()
    # else:
    #     print("Please enter a valid menu option")
