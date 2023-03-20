# Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.

def find_biggest_number_recursive(numbers: list) -> int:
  if len(numbers) == 1:
    return numbers[0]
  elif numbers[0] > numbers[1]:
    numbers.pop(1)
    return find_biggest_number_recursive(numbers)
  else:
    numbers.pop(0)
    return find_biggest_number_recursive(numbers)


def find_biggest_number_recursive(numbers: list) -> int:
  if len(numbers) == 1:
    return numbers[0]
  elif numbers[0] > numbers[1]:
    numbers.pop(1)
    return find_biggest_number_recursive(numbers)