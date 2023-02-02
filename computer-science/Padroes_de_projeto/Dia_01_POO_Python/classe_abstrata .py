from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...

class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")
        

def minha_func(database): # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")

db1 = MongoDatabase()
db2 = MySQLDatabase()

minha_func(db1)
minha_func(db2)
minha_func("db_inválido")


class Classe:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()
Classe.método_estático()
objeto.método_estático()


class Classe:
    atributo_da_classe = 1


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.atributo_da_classe)  # Saída: 1
print(objeto_1.atributo_da_classe)  # Saída: 1
print(objeto_2.atributo_da_classe)  # Saída: 1

Classe.atributo_da_classe = 2
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 2
print(objeto_2.atributo_da_classe)  # Saída: 2

objeto_1.atributo_da_classe = 3
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 3
print(objeto_2.atributo_da_classe)  # Saída: 2


