# define global funcitons and variables first
# define classes next and any unique methods inside
# then define while if you need the user to keep doing tasks until a certain condition is me
# conditions needs to be global and needs to be re-assigned inside your while loop

class spider:
    def __init__(self, name, strength, defense, hp):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
    # pass

    def feed_spider(self):
        print("Omm nom nom")
        self.strength += 5
        self.hp += 5

    def played_with_spider(self):
        print("spider is getting angry...")
        pet_spider["defense"] += 5

    def how_is_spider_doing(self):
        print("How ya doin, spider?")
        print(pet_spider)

    def smile(self):
        print(f"{self.name} smiled")

class omega_spider:
    def __init__(self, name, strength, defense, hp, size)
    self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
        self.size = size

    def smile(self):
        print(f"{self.name} smiled")
# class gives you access to a constructor
# dictionaries are like objects within a class
# we make an instance of an object
# created by a function called constructor
# functions defined within a class are called methods

# use dot notation
# print(peter.name)
# print(peter.strength)

peter = spider("Peter", 20, 10, 100)
peter.feed_spider()
print("peter's strength", peter.strength)

# mercado = spider("Mercado", 25, 20, 90)
# beelzebub = omega_spider("Beelzebub", 1000, 200, 1000, "ten miles")
venom = spider("Venom", 30, 20, 200)
venom.smile()

carnage = omega_spider("Carnage", 100, 100, 100, "big")

# fed spider
# def feed_spider():
#     print("Omm nom nom")
#     pet_spider["strength" += 5]
#     pet_spider["hp"] += 5

# def played_with_spider():
#     print("spider is getting angry...")
#     pet_spider["defense"] += 5

# def how_is_spider_doing():
#     print("How ya doin, spider?")
#     print(pet_spider)

def welcome_message():
    message = int(input("""
    Please choose from the following:
    1. Feed spider
    2. Play with spider
    3. Check on spider
    4. Stare
    5. Quit
    """))
    return print(message)
    
# choice = ""
# while choice != "5":
#     choice = welcome_message()
#     if choice == 1:
#         feed_spider()
#     elif choice == 2:
#         played_with_spider()
#     elif choice == 3:
#         how_is_spider_doing()
#     elif choice == 4:
#         print("Staring...")
#     else:
#         pass # pass just stops the code

