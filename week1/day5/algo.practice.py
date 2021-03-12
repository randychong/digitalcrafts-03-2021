# algo 1

# for number in range(1, 101):
#     if number % 3 == 0 and number % 5 == 0:
#         print("fizzbuzz")
#     elif number % 3 == 0:
#         print("fizz")
#     elif number % 5 == 0:
#         print("buzz")
#     else:
#         print(num)

# algo 2

# total = 0
# for number in range(1, 1000):
#     if number % 3 == 0 or number % 5 == 0:
#         total = total + number
 
# print(total)

# algo 3

# num1, num2 = 0, 1
# total = 0
# while True:
#     num1, num2 = num2, num1 + num2
#     if num2 >= 10:
#         break
#     if num2 % 2 == 0:
#         total += num2
# print(total)