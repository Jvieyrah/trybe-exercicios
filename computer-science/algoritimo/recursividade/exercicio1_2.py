# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def count_even_numbers(n: int) -> int:
  amount = 0
  for i in range(1, n + 1):
    if i % 2 == 0 and i != 0:
      amount += 1
  return amount

#  ̣Transforme o algoritmo criado acima em recursivo.

def count_even_numbers_recursive(n: int) -> int:
  if n == 1:
    return 0
  elif n % 2 == 0:
    return 1 + count_even_numbers_recursive(n - 1)
  else:
    return count_even_numbers_recursive(n - 1)