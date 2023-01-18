import json
import random

with open("pokemon.json") as json_file:
    pokemons = json.load(json_file).get("results")
    pokemonslist = []
    for pokemon in pokemons:
       pokemonslist.append(pokemon.get("name"))
    sorted = random.choice(pokemonslist)
    show = ""
    for i in range(len(sorted)):
        guess = input("Quem é esse pokemon?").capitalize()
        if guess == sorted:
            print("Você acertou!")
            break
        show += sorted[i]
        print(show)
    


