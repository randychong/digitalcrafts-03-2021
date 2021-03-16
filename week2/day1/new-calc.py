def welcome_message():
    message = """
    Welcome to Randy's calculator \n
    -----------------------------
    """
    return print(message)

def operation(num1, operator, num2):
    answer = ""
    if(operator == "+"):
        answer = int(num1) + int(num2)
    elif(operator == "-"):
        answer = int(num1) - int(num2)
    elif(operator == "*"):
        answer = int(num1) * int(num2)
    elif(operator == "/"):
        answer = int(num1) / int(num2)
    else:
        print("Input is invalid.")
    return print("%s %s %s = %s" % (num1, operator, num2, answer))
    quit_message()

quit_decision = ""

while(quit_decision != "y"):
    welcome_message()
    value_1 = input("Please enter in a value: \n")
    operand = input("Please enter an operand (+, -, *, /) \n")
    value_2 = input("Please enter in another value: \n")
    operation(value_1, operand, value_2)
    quit_message = input("Would you like to close the calculator? (y)Yes (n)No \n")
    quit_decision = quit_message


# operand = quit_decision


# quit_message()

# def add_result():
#     add_value = int(value_1) + int(value_2)
#     return add_value
    
# def subtract_result():
#     subtract_value = int(value_1) - int(value_2)
#     return subtract_value

# def multiply_result():
#     multiply_value = int(value_1) * int(value_2)
#     return multiply_value

# def divide_result():
#     divide_value = int(value_1) / int(value_2)
#     return divide_value