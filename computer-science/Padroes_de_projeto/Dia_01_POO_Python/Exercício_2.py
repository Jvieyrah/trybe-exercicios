from collections import Counter

class Estatistica:
    @classmethod
    def media(cls, numbers):
        return sum(numbers) / len(numbers)
    
    @classmethod
    def mediana(cls, numbers):
        numbers = sorted(numbers)
        if len(numbers) % 2 == 1:
            return numbers[len(numbers) // 2]
        else:
            return (numbers[len(numbers) // 2] + numbers[(len(numbers) // 2) - 1]) / 2

    @classmethod
    def moda(cls, numbers):
        return Counter(numbers).most_common(1)[0][0]

