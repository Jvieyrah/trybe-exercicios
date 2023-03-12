from selenium import webdriver
from selenium.webdriver.firefox.options import Options

# Importa o By
from selenium.webdriver.common.by import By

options = Options()
# Adiciona um argumento passando o parâmetro '--headless'
options.add_argument('--headless')
firefox = webdriver.Firefox(options=options)

firefox.get('https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/')

def scrape(url):
  paragrafos = firefox.find_elements(By.TAG_NAME, 'p')
  for p in paragrafos:
      print(p.text)

scrape('https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/')
