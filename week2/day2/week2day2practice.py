# you have two characters, a hero and a goblin
# your goal is to let them fight, whoever wins, will be printed out
# in a victory message (function that prints)
# whoever is defeated can be printed out in that message as well

# hero
# name, attack, defence, hp

# goblin
# name, attack, defence, hp, clan

class Hero:
    def __init__(self, name, attack, defence, hp):
        self.name = name
        self.attack = strength
        self.defence = defense
        self.hp = hp
        self.character_class = "Hero"

    def take_damage(self):
        self.hp -= 5

class Goblin:
    def __init__(self, name, attack, defence, hp):
        self.name = name
        self.attack = strength
        self.defence = defense
        self.hp = hp
        self.character_class = "Goblin"
        
    def take_damage(self):char2
        self.hp -= 5

def fight(char1, char2):
    print(f"{char1.name} attacks {char2.name}")
    goblin.take_damage()
    print(f"{char2.name} takes 5 damage")
    print(f"{char2.name} has {char2.hp} left")

def victory_message(char1, char2):
    print(f"{char1.name} is the victor.")

def character_select():
    character = ""
    char_name = input("What is your name?")
    char_class = input("What is your class? Choose (k)Knight, )g)Goblin, (h)Hero)")

    if char_class == "h"
        character = Hero(char_name, 10)
    elif char_class == "g"
        character = Goblin(char_name, 10)
    elif char_class == "k"
        character = Knight(char_name, 10)
    else:
        print("Please follow the rules.")
    return character

randi = Hero("Randi", 10)
randy = Goblin("Randy", 10)

# randi to punch randy, simulating attacking another character
# you take 5 damage to your health

character = character_select()
while character.hp > 0:
    print("What would you like to do?")
    # fight(randi, randy)
    # if randy.hp == 0:
    #     victory_message(randi, randy)

# ask user to type in their name
# i ask them health values
# i print out their health values
# i set a global variable to the while loop condition