
def exercicio2 (lista):
    soma = 0
    for number in lista:
        soma += number
    return soma / len(lista)
    

print(exercicio2([1, 2, 3, 4, 5]))
print(exercicio2([10, 20, 30, 40, 50]))