name = input("Digite seu nome: ")
reduce = name
for i in reversed(range(len(name))):
    print(reduce)
    reduce = reduce[:i]
        