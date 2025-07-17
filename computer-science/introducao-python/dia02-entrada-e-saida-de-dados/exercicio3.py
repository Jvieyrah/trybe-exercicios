import random
import json

def embaralha(palavras):
    palavra_secreta = random.choice(palavras)
    palavra_embaralhada = "".join(random.sample(palavra_secreta, len(palavra_secreta)))
    print("A palavra embaralhada é: ", palavra_embaralhada)
    return palavra_secreta

def palpites(palavra_secreta):
    for i in range(1,4):
        palavra = input(f"você tem 3 tentativa - esta é sua tentativa {i} Digite qual palavra ela é: ")
        if palavra != palavra_secreta:
            print("Você errou!")
        else:
            print("Você acertou!")
            break
    else:
        print(f"Você perdeu, a palavra era: {palavra_secreta}")

if __name__ == "__main__": 
    with open("palavras.json") as json_file:
        palavras = json.load(json_file)
        palavra_secreta = embaralha(palavras)
        palpites(palavra_secreta)