num1 = int(input("Select a number "))
op = input("Select an operator: (+, -, *, / ")
num2 = int(input("Select another number "))

if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1 - num2)
elif op == "*":
    print(num1 * num2)
elif op == "/":
    print(num1 / num2)
# test code below
# try:
#     print(num1 + num2)
# except ValueError:
#     print("Please enter valid numbers")


# print(int(num1) + int(num2))
# print(int(num1) - int(num2))
# print(int(num1) * int(num2))
# print(int(num1) / int(num2))