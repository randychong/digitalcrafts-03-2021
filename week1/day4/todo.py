welcome = input("\n\n*****""Welcome to the Randy's TODO App!" "*****\n\n" "Press 1 to add a task" "\n" "Press 2 to delete a task" "\n" "Press 3 to view all tasks" "\n" "Press q to quit the app""\n")

def welcomeMessage():
    welcome = input("\n\n*****""Welcome to the Randy's TODO App!" "*****\n\n" "Press 1 to add a task" "\n" "Press 2 to delete a task" "\n" "Press 3 to view all tasks" "\n" "Press q to quit the app""\n")

def quitMessage():
    quitDecision = input("Would you like to quit? (y)yes (n)no\n")
    while quitDecision == "y":
        exit()
    else:
        welcomeMessage()

def addTask():
    taskInput = input("Add a task \n")
    prio = input("What is the priority of this task? High, medium, or low. \n")
    return print(taskInput, "has been added as a", prio, "priority task"), quitMessage()

def delete():
    delete = input("Select which task you would like to delete\n")
    return print(tasks)

def view():
    view = input("Enter a task: ")
    return print(view)

def quitApp():
    return print("You have exited the program.")
    exit()

choice = welcome

if choice == "1":
    addTask()
elif choice == "2":
    delete()
elif choice == "3":
    view()
elif choice == "q":
    quitApp()