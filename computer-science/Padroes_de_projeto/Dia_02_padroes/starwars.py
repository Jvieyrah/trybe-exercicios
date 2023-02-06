class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100

    
class JediAdapter:
    def __init__(self, jedi):
        self.jedi = jedi

    def attack(self):
        return self.jedi.attackWithSaber()


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage in the enemy")


# class StarWarsGame:
#     def __init__(self, character):
#         self.character = character

#     def fight_enemy(self):
#         attack_method = None
#         if isinstance(self.character, Soldier):
#             attack_method = self.character.attack()
#         elif isinstance(self.character, Jedi):
#             attack_method = self.character.attackWithSaber()
#         else:
#             attack_method = "0"
#         print(f"You caused {attack_method} of damage to the enemy")




StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Jedi(20)).fight_enemy()