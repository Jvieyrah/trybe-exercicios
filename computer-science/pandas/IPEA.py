import pandas as pd


dados = {
    "Grande Região": ["Norte", "Nordeste", "Sudeste", "Sul", "Centro-Oeste"],
    "Número de Municípios": [450, 1794, 1668, 1191, 467],
    "População em situação de rua": [4399, 22864, 49792, 16021, 8777],
    "Total de Municípios (%)": [8.10, 32.20, 29.90, 21.40, 8.40],
    "Total em situação de rua (%)": [4.32, 22.45, 48.89, 15.73, 8.62]
}

meu_dataframe = pd.DataFrame(dados)

# Dados IPEA(2015)

print(f"shape COLUNAS X LINHAS = {meu_dataframe.shape}")
print(f"info = QUANTIDADE DE VALORES NULOS {meu_dataframe.info()}")
print(f"describe = número médio de pessoas em situação de rua por região  {meu_dataframe.describe()}")