num1 = int(input("Select a number: "))
op = input("Select an operator: (+, -, *, /: ")
num2 = int(input("Select another number: "))

def quitMessage():
    quitDecision = input("Would you like to quit? (y)Yes or (n)No" "\n")
    return print("You are now exiting the calculator.")

def add(num1, num2):
    add = (num1 + num2)
    return print(add)

def subtract(num1, num2):
    subtract = (num1 - num2)
    return print(subtract)

def multiply(num1, num2):
    multiply = (num1 * num2)
    return print(multiply)

def divide(num1, num2):
    divide = (num1 / num2)
    return print(divide)

if op == "+":
    add(num1, num2)
elif op == "-":
    subtract(num1, num2)
elif op == "*":
    multiply(num1, num2)
elif op == "/":
    divide(num1, num2)

quitMessage()

if quitMessage == "y":
    exit()




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