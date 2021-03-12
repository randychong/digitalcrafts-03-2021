tasks = []
# defining the menu
# mainMenu = """
# Choose an action:\n
# Press 1 to add a task
# Press 2 to delete a task
# Press 3 to view all tasks
# Press q to quit
# """
def mainMenu (): 
    mainMenu = print("""
Choose an action:"\n
Press 1 to add a task
Press 2 to delete a task
Press 3 to view all tasks
Press q to quit
""")

mainMenu()

# defining choice
def quitApp():
    quitMessage = input("Would you like to quit? (y)yes (n) no\n")
    if quitMessage == "y":
        exit()
    elif quitMessage == "n":
        mainMenu()

choice = input(mainMenu)

while len(choice) > 0:
    if choice == "1":
        title = input("What task do you need to complete?\n")
        priority = input("Is this task's priority high, medium, or low?\n")
        # if len(title) > 0:
        #     tasks.append(title)
        dictionaryOfTasks = {title, priority}
        if len(dictionaryOfTasks) > 0:
            tasks.extend(dictionaryOfTasks)
        # if len(priority) > 0:
        #     tasks.append(priority)
        print("Here is your updated to-do list:")
        count = 1
        for task in dictionaryOfTasks:
            print("%d: %s - %s" % (count, title, priority))
            count += 1
        quitApp()
    elif choice == "2":
        choice2 = input("Which task would you like to delete?\n")
        dictionaryOfTasks = {}
        count = 1
        for task in dictionaryOfTasks:
            print("%d: %s - %s" % (count, title, priority))
            count += 1
        quitApp()
    elif choice == "3":
        dictionaryOfTasks = {}
        count = 1
        for task in dictionaryOfTasks:
            print("%d: %s - %s" % (count, title, priority))
            count += 1
        quitApp()
    elif choice == "q":
        quitApp()
    # else:
    #     print("Please enter a valid menu option")
