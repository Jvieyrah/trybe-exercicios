1 - OK
0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
#resultado = 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
#resultado = 4

def stability_check(valores_coletados):
    # Escreva seu código aqui
    max_stability = 0
    current_stability = 0

    for hour in range(len(valores_coletados)):
        if valores_coletados[hour] == 1:
            current_stability += 1
        else:
            if current_stability > max_stability:
                max_stability = current_stability
            current_stability = 0

    return max_stability


def __name__ == '__main__':
    print(stability_check(valores_coletados1))
    print(stability_check(valores_coletados2))