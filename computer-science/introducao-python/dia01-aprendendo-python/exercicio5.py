def exercicio5 (metroquadrado):
    litrosdetinta = metroquadrado / 3
    latas = litrosdetinta / 18
    preco = latas * 80
    return (latas, preco)

print(exercicio5(54))
print(exercicio5(108))
print(exercicio5(162))