class Main_character:
    def __init__(self, name, health=1000):
        self.name = name
        self.health = health
        
    def heal_up(self):
        self.health += 100

    def take_damage(self, damage):
        self.health -= damage

    def view_stats(self):
        print(f"********************\nCharacter Name: {self.name}, the Exile\nAttack: 100\nHealth: {self.health}\n********************")

riven = Main_character("Riven")

class Final_boss:
    def __init__(self, name, health=9999):
        self.name = name
        self.health = health
        
    def heal_up(self):
        self.health += 9999

    def take_damage(self, damage):
        self.health -= damage

    def view_stats(self):
        print(f"Character Name: {self.name},the Hand of Noxus\nAttack: ???\nHealth: ???\n********************")

darius = Final_boss("Darius")

def battle():
    print(f"{riven.name} attacks {darius.name}!")
    riven.take_damage(200)
    darius.take_damage(100)
    print(f"{darius.name} takes 100 damage and has ??? health remaining.")
    print(f"{darius.name} swings his axe menacingly at Riven!")
    print(f"{riven.name} takes 200 damage and has {riven.health} health remaining.")
    print("Darius just smirks at Riven...\n********************")

def main_menu():
    message = int(input("""
    Darius is charging towards Riven! What do you do?\n
    1. Attack Darius with Riven's sword
    2. Dodge the incoming attack
    3. Restore some health
    4. Check on Riven's health
    5. Retreat from battle
    """))
    return print(message)
    # while message != 5:
    #     if message == 1:
    #         battle()
    #         main_menu()
        # if message == 2:
        #     print("Riven narrowly evades Darius' attack!")
        # if message == "1":
        #     battle()
        #     main_menu()
        # if message == "1":
        #     battle()
        #     main_menu()
        # if message == "1":
        #     battle()
        #     main_menu()

def victory():
    print("""********************\nRiven has slain Darius!!!
    """)

riven.view_stats()
darius.view_stats()
main_menu()

# def menu_select():
#     menu_choice = ""
#     if menu_choice == "1":
#         battle()
#     return menu_choice

# choice = ""
# while choice != "5":
#     main_menu()
#     menu_select()



    # elif choice == "2":
    #     power_up()
    # elif choice == "3":
    #     health_up()
    # elif choice == "4":
    #     view_stats()
    # elif choice == "5":
    #     print("Riven has retreated from battle...")
    #     exit()
    # elif darius.health == 0:
    #     print("Darius finally collapses to the ground due to Riven's onslaught.")
    #     victory()


