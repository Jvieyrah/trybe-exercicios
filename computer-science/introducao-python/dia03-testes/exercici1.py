#  Exercício 1: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N,
#  sendo N um valor informado pelo usuário. Caso o valor informado seja menor que 1, o programa
#  deve retornar uma lista vazia.

def get_list_of (n):
    lista = list(range(1, n + 1))
    fbList = []
    for number in lista:
        if number % 3 == 0 and number % 5 == 0:
            fbList.append("FizzBuzz")
        elif number % 3 == 0:
            fbList.append("Fizz")
        elif number % 5 == 0:
            fbList.append("Buzz")
        else:
            fbList.append(number)
    return fbList


print(get_list_of(15))
