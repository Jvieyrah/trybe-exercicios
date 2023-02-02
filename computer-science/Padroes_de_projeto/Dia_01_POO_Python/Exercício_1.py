class TV:
 def __init__(self, volume, canal, tamanho, preco):
        self._volume_minimo = 3
        self._volume_maximo = 99
        self._volume = volume 
        self.__canal_minimo = 1
        self.__canal_maximo = 99
        self.__canal = canal
        self._tamanho = tamanho
        self.__ligado = False

def aumentar_volume(self):
        if self._volume >= self._volume_maximo:
            self._volume = self._volume_maximo
        self._volume += 1

def diminuir_volume(self):
        if self._volume <= 1:
            self._volume = 0
        self._volume -= 1

def modificar_canal(self, canal):
        if canal < self.__canal_minimo or canal > self.__canal_maximo:
            raise ValueError(
                f"Canal deve estar entre {self.__canal_minimo} e {self.__canal_maximo}"
            )
        self.__canal = canal
        
def ligar_desligar(self):
        self.__ligado = not self.__ligado
        
        