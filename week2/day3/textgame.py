class main_character:
    def __init__(self, name, attack=50, health=100, damage_taken=20):
        self.name = name
        self.attack = attack
        self.health = health
        self.damage_taken = damage_taken

    def power_up(self):
        self.attack += 10
        
    def health_up(self):
        self.health += 20

    def take_damage(self):
        self.health -= self.damage_taken

    def character_stats(self):
        print(f"********************\nCharacter Name: {self.name}, the Exile\nAttack: {self.attack}\nHealth: {self.health}\n********************")

riven = main_character("Riven")

class final_boss:
    def __init__(self, name, attack=20, health=200, damage_taken=50):
        self.name = name
        self.attack = attack
        self.health = health
        self.damage_taken = damage_taken

    def power_up(self):
        self.attack += 15
        
    def health_up(self):
        self.health += 50

    def take_damage(self):
        self.health -= self.damage_taken

    def character_stats(self):
        print(f"Character Name: {self.name},the Hand of Noxus\nAttack: {self.attack}\nHealth: {self.health}\n********************")

darius = final_boss("Darius")

def battle():
    print(f"{riven.name} battles {darius.name}!")
    riven.take_damage()
    darius.take_damage()
    print(f"{riven.name} takes 20 damage.")
    print(f"{darius.name} takes 50 damage.")
    print(f"{riven.name} has {riven.health} health remaining.")
    print(f"{darius.name} has {darius.health} health remaining.")
    print("Darius just smirks at Riven...\n********************")

def main_menu():
    message = """
    A wild Darius has appeared! What would you like to do?\n
    1. Battle against Darius
    2. Power Up
    3. View Riven's stats
    4. Retreat from battle
    """
    return print(message)

def victory():
    print("""********************\nRiven has slain Darius!!!
    """)

# riven.character_stats()
# darius.character_stats()
# battle()

while darius.health > 0:
    main_menu()
    battle()
if darius.health == 0:
    print("Darius finally collapses to the ground due to Riven's onslaught.")
    victory()


