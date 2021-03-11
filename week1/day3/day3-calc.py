quitMessage = print("Press q at anytime to close the calculator.")
num1 = int(input("Select a number: "))
op = input("Select an operator: (+, -, *, /: ")
num2 = int(input("Select another number: "))
currentInput = num1, op, num2
def closeCalc (q):
    return exit()

def add(num1, num2):
    add = (num1 + num2)
    return print(add)

def subtract(num1, num2):
    subtract = (num1 - num2)
    return print(subtract)

def multiply(num1, num2):
    multiply = (num1 * num2)
    return print (multiply)

def divide(num1, num2):
    divide = (num1 / num2)
    return print (divide)

if op == "+":
    add(num1, num2)
elif op == "-":
    subtract(num1, num2)
elif op == "*":
    multiply(num1, num2)
elif op == "/":
    divide(num1, num2)





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