def welcomeMessage():
    message = """\n \n \n 
    \n \n \n 
    "Welcome to a calculator!"
    ************************
    ************************
    \n \n \n 
    """
    return print(message)
def operation(operator, number1, number2):
    answer = ""
    if(operator == "+"):
        answer = int(number1) + int(number2)
    elif(operator == "*"):
        answer = int(number1) * int(number2)
    elif(operator == "/"):
        answer = int(number1) / int(number2)
    elif(operator == "-"):
        answer = int(number1) - int(number2)
    else:
        print("Operator invalid")
    return print("Your operation of %s %s %s is = %s \n" % (number1, operator, number2, answer))
choice = ""
while(choice != "y"):
    welcomeMessage()
    firstNumber = input("Please enter in your first number\n")
    operand = input(
        "Please enter in your choice of operation, ( +, - , * , / )\n")
    secondNumer = input("Please enter in your second number\n")
    operation(operand, firstNumber, secondNumer)
    quitMessage = input("Would you like to quit? y (yes) or n (no)")
    choice = quitMessage
# quitKey = input("")
# while quitKey != "q":