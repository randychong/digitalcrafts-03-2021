
# def welcome_message ():
#     first_number = input("Please enter your first number: \n")
#     return print(first_number)

# welcome_message()

# welcome_message() = first_input

def add(num1, num2):
    return num1 + num2

def subtract(num1, num2):
    subtract = (num1 - num2)
    return print(subtract)

def multiply(num1, num2):
    multiply = (num1 * num2)
    return print(multiply)

def divide(num1, num2):
    divide = (num1 / num2)
    return print(divide)

def run(result):
# if result is > 0, assign num1 = result
    if result > 0:
        num1 = result
    else:
        num1 = int(input("Select a number: "))
        
    op = input("Select an operator: (+, -, *, /: ")
    num2 = int(input("Select another number: "))
    

    if op == "+":
        result = add(num1, num2)
    elif op == "-":
        result = subtract(num1, num2)
    elif op == "*":
        result = multiply(num1, num2)
    elif op == "/":
        result = divide(num1, num2)

    print(result)

    quit_decision = input("Would you like to quit? (y)Yes or (n)No" "\n")
    if quit_decision == "y":
        print("You are now exiting the calculator.")
        exit()
    else:
        run(result)

run(0)

# quit_decision = quit_message()

# if quit_decision == "y":
#     exit()
# else:
#     welcome_message()




# if op == "+":
#     print(num1 + num2)
# elif op == "-":
#     print(num1 - num2)
# elif op == "*":
#     print(num1 * num2)
# elif op == "/":
#     print(num1 / num2)
# test code below
# try:
#     print(num1 + num2)
# except ValueError:
#     print("Please enter valid numbers")


# print(int(num1) + int(num2))
# print(int(num1) - int(num2))
# print(int(num1) * int(num2))
# print(int(num1) / int(num2))