name = input("Digite seu nome: ")

for letter in name:
        print(letter)


nums = input("Insira valores aqui, separados por espaço: ")

numsArr = nums.split(" ")

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")h=joao