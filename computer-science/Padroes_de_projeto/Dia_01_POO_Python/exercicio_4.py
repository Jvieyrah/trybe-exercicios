from abc import ABC, abstractmethod
from datetime import datetime

class Manipulador_de_logs(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError
    

class Log_para_arquivo(Manipulador_de_logs):
    @classmethod
    def log(cls, msg):
        with open("log.txt", "a") as arquivo:
            print(msg, file=arquivo)

                        
class log_em_tela(Manipulador_de_logs):
    @classmethod
    def log(cls, msg):
        print(msg)
        

class Log();
    def __init__(self, manipuladores):
        self._manipuladores = set(manipuladores)
        
    def adicionar_manipulador(self, manipulador):
        self._manipuladores.add(manipulador)
        
    def info(self, msg):
        self._log('INFO', msg)
        
    def alerta(self, msg):
        self._log('ALERTA', msg)
        
    def erro(self, msg):
        self._log('ERRO', msg)
        
    def debug(self, msg):
        self._log('DEBUG', msg)
        
    def _log(self, nivel, msg):
        for manipulador in self._manipuladores:
            manipulador.log(self._formatar(nivel, msg))
            
    def _formatar(self, nivel, msg):
        return f"{datetime.now().strftime('%d/%m/%Y %h:%h:%s')} [{nivel}] {msg}"
   
    logemtela = log_em_tela()
    log = Log([logemtela])
    log.error("zeroDivisionError: division by zero")
     
    