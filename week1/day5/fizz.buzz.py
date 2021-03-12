# listOfNumbers = [list(range(1, 101))]
# print(listOfNumbers)

# for number in range(1, 101):
#     if number % 3 == 0:
#         print("fizz")
#     elif number % 5 == 0:
#         print("buzz")
# newList[]

# for number in range(1, 101):
#     if number % 3 == 0:
#         print("fizz")
#     elif number % 5 == 0:
#         print("buzz")

# Whitney's solution
# afterFizz = ["Fizz" if item % 3 == 0 else item for item in listOfNumbers]

# print(str(afterFizz))
# num_list = list(range(1, 101))

# Zach's solution
# for n, i in enumerate(num_list):
#     if (i % 3 == 0) and (i % 5 == 0):
#         num_list[n] = "fizzbuzz"
#     elif i % 3 == 0:
#         num_list[n] = "fizz"
#     elif i % 5 == 0:
#         num_list[n] = "buzz"

# print(num_list)

# 2nd algorithym
# num_list = list(range(1, 10))
# def add():
#     return num1 + num2

# for n, i in enumerate(num_list):
#     if (i % 3 == 0) or (i % 5 == 0):
#         print(n + i)
        
# print(num_list)

# WHitney's solution
# listOfNumbers = list(range(1, 1000))

# listToAdd = []

# total = 0

# for num in listOfNumbers:
#         if num % 3 == 0 or num % 5 ==0:
#             listToAdd.append(num)

# for num in range (0, len(listToAdd)):
#     total = total + listToAdd[num]

# print(total)

# 3rd algorithym

listOfNumbers = list(range(1, 10))

listToAdd = []

total = 0

for num in listOfNumbers:
    total = total 

# make to empty values
# can make a count
# store sequence

# make two variables with if
# then make 3rd variable
# num1 = 0, num2 = 1
# num1 = num2
# num2 = num3

# sequenceupto = int(input("blah"))

# firstnum, second num = 0, 1
# count = 0

# if sequenceupto <= 0
#     print("Error")
# elif == 1
#     print("fib sequence for %s" % sequenceupto)
#     print(sequenceupto)
#     return 1
# else
#     while count < sequenceupto
#     print(firstnum)
#     holderofthesum = firstnum + secondNum
#     firstnum = secondNum
#     secondnum = holderofthesum
#     count += 1

# Jorge's example
for x in range(0, 100):

    x = x + 1

    if 

# Phillip's example

total = 0
for num in range(1000):
    if num % 3 == 0 or num % 5 == 0:
        total = total + num
print(total)

# Joey's example

odd, even = 0, 1
total = 0
while True:
    odd, even = even, odd + even
    if even >= 4000000:
        break
    if even % 2 == 0:
        total += even
print(total)