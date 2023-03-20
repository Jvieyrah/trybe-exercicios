# Escreva um algoritmo recursivo que identifica se um número é primo.

def temdivisor(n, i, j):
    if i > j:
        retun False
    elif n % i == 0:
        return True
    else:
        return is_prime(n, i + 1, j)

def is_prime(n):
    return not temdivisor(n, 2, n - 1)
