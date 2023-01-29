from class_liquidificador import liquidificador_vermelho
from class_ventilador import ventilador_roxo
from class_eletrodomestico import secador, batedeira, maquina_de_lavar

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomestico = None

    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico = eletrodomestico
            
    def __str__(self):
        
        if not self.eletrodomestico.type:
            eletrodomestico_type = self.eletrodomestico._type
        else:
            eletrodomestico_type = self.eletrodomestico.type
        eletrodomestico_cor = self.eletrodomestico.cor
        # if not self.eletrodomestico.cor:
        #     eletrodomestico_cor = self.eletrodomestico.__class__.__name__

        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta e comprou um {eletrodomestico_type} {eletrodomestico_cor}"

            
pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_eletrodomestico(liquidificador_vermelho)

pessoa_com_calor = Pessoa("João", 500)
pessoa_com_calor.comprar_eletrodomestico(ventilador_roxo)

pessoa_cabeleleira = Pessoa('Maria', 300)
pessoa_cabeleleira.comprar_eletrodomestico(secador)

pessoa_confeiteira = Pessoa('Ana', 200)
pessoa_confeiteira.comprar_eletrodomestico(batedeira)

pessoa_lavadeira = Pessoa('Joana', 1000)
pessoa_lavadeira.comprar_eletrodomestico(maquina_de_lavar)

print(pessoa_cozinheira)
print(pessoa_com_calor)
print(pessoa_cabeleleira)
print(pessoa_confeiteira)
print(pessoa_lavadeira)