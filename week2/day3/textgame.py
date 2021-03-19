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

    def ultimate_ability(self):
        print(f"{self.name} summons a massive sword glowing with blue energy and fires an energy wave at Darius dealing 9999 damage!!!")
        print("""
        *******************\n
        *******************\n\n
        Darius has 0 health remaining. Riven is victorious!!!\n\n
        *******************\n
        *******************
        """)
        exit()

riven = Main_character("Riven")

class Final_boss:
    def __init__(self, name, health=9999):
        self.name = name
        self.health = health
        
    def heal_up(self):
        self.health += 999

    def take_damage(self, damage):
        self.health -= damage

    def view_stats(self):
        print(f"Character Name: {self.name},the Hand of Noxus\nAttack: ???\nHealth: ???\n********************")

darius = Final_boss("Darius")

def battle():
    print(f"{riven.name} slashes {darius.name} with her blade!")
    riven.take_damage(200)
    darius.take_damage(100)
    print(f"{darius.name} takes 100 damage and has ??? health remaining.")
    print(f"{darius.name} swings his axe menacingly at {riven.name} dealing 200 damage!")
    print("Darius just smirks at Riven...\n********************")

def dodge():
    darius.heal_up()
    print(f"{riven.name} narrowly evades Darius' attack, however, Darius' wounds begin to heal...")

def main_menu():
    message = int(input("""
    Darius is charging towards Riven! What do you do?\n
    1. Attack Darius with Riven's sword
    2. Dodge the incoming attack
    3. Restore some health
    4. Check on Riven's health
    5. Surrender
    """))
    print(message)
    while message != "x":
        if message == 1:
            battle()
            main_menu()
        elif message == 2:
            dodge()
            main_menu()
        elif message == 3:
            riven.heal_up()
            print(F"{riven.name} uses a potion to restore some health.")
            main_menu()
        elif message == 4:
            riven.view_stats()
            print(f"{darius.name} launches a surprise attack and deals 300 damage!!!")
            riven.take_damage(300)
            print(f"{riven.name} now has {riven.health} health remaining...")
            main_menu()
        elif message == 5:
            print("There is no surrendering...!!!")
            riven.ultimate_ability()
            exit()
        else:
            print("Please select a valid option.")
            main_menu()

riven.view_stats()
darius.view_stats()
main_menu()