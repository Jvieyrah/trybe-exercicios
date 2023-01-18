def exercicio6 (A, B, C):
    is_triangle = (
        A + B > C and
        A + C > B and
        B + C > A
    ) 


    if not is_triangle:
        print ("NÃO é um triângulo")
    elif A == B and B == C:
        print ("É um triângulo equilátero")
    elif A == B or B == C or A == C:
        print ("É um triângulo isósceles")
    else:
        print ("É um triângulo escaleno")



exercicio6(1, 1, 1)
exercicio6(1, 1, 2)
exercicio6(1, 2, 3)
exercicio6(2, 2, 3)