def menorelemento (lista):
    menor = lista[0]
    for i in range(len(lista)):
        if lista[i] < menor:
            menor = lista[i]
    return menor

print(menorelemento([1, 2, 3, 4, 5]))
print(menorelemento([100, 200, 300, 40, 50]))

def triagulo (n):
    asterisco = "*"
    if n > 1:       
        for i in range(n):
            linha = (asterisco * (i + 1))
            print(linha)

triagulo(1)
triagulo(2)
triagulo(3)
triagulo(4)
triagulo(5)


def somatoriodenumeros (numero):
    soma = 0
    for i in range(numero + 1):
        soma += i
    return soma

print(somatoriodenumeros(1))
print(somatoriodenumeros(2))
print(somatoriodenumeros(3))
print(somatoriodenumeros(4))
print(somatoriodenumeros(5))

def valorcomdesconto (combustivel, litros ):
    if combustivel == "a":
        valor = 1.9
        desconto = 0.03 if litros <= 20 else 0.05

    elif combustivel == "g":
        valor = 2.5
        desconto = 0.04 if litros <= 20 else 0.06
    else:
        return "Combustível inválido"
    
    return litros * valor * (1 - desconto)

print(valorcomdesconto("a", 10))
print(valorcomdesconto("a", 30))
print(valorcomdesconto("g", 10))
print(valorcomdesconto("g", 30))
print(valorcomdesconto("x", 10))

   
