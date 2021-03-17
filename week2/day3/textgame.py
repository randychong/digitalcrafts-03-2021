class main_character:
    def __init__(self, name, attack=30, health=50, damage_taken=10):
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
        print(f"********************\nCharacter Name: {self.name}\nAttack: {self.attack}\nHealth: {self.health}\n********************")

riven = main_character("Riven")

class final_boss:
    def __init__(self, name, attack=60, health=100, damage_taken=10):
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
        print(f"Character Name: {self.name}\nAttack: {self.attack}\nHealth: {self.health}\n********************")

darius = final_boss("Darius")

def battle():
    print(f"{riven.name} attacks {darius.name}!")
    darius.take_damage()
    print(f"{darius.name} takes 10 damage.")
    print("Darius just smirks...")
    print(f"{darius.name} has {darius.health} health remaining...\n********************")

def victory():
    print("""********************\nRiven has slain Darius!!!
    """)

riven.character_stats()
darius.character_stats()
battle()

while darius.health > 0:
    battle()
if darius.health == 0:
    victory()


