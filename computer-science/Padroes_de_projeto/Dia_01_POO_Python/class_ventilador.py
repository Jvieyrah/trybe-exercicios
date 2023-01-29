
class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.__cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0
        self.cor = cor
        self.type = "Ventilador"
        
    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )
        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True
        
    def desligar(self):
        self.__velocidade = 0
        self.__ligado = False
        
    def esta_ligado(self):
        return self.__ligado
    
    def get_cor(self):
        return self.__cor.upper()

    def set_cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe ventilador turquesa")

        self.__cor = nova_cor
    
    @property
    def cor(self):
        return self.__cor.upper()
    
    @cor.setter # Repare que é @cor.setter, e não @property.setter
    def cor(self, nova_cor):
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe ventilador turquesa")

        self.__cor = nova_cor


ventilador_roxo = Ventilador("Roxo", 250, 220, 100)
