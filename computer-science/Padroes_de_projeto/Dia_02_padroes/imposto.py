class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
       return self.valor * impostos[imposto]

impostos = {
    'ISS': 0.1,
    'ICMS': 0.06,
    'IOF': 0.02,
    'PIS': 0.015,
    'COFINS': 0.03
}      


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto('ISS')}")
print(f"ICMS: {orcamento.calcular_imposto('ICMS')}")
print(f"IOF: {orcamento.calcular_imposto('IOF')}")
print(f"PIS: {orcamento.calcular_imposto('PIS')}")
print(f"COFINS: {orcamento.calcular_imposto('COFINS')}")