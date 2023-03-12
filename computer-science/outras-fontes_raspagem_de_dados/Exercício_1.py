from selenium import webdriver
from selenium.webdriver.firefox.options import Options

# Importa o By
from selenium.webdriver.common.by import By

options = Options()
# Adiciona um argumento passando o parâmetro '--headless'
options.add_argument('--headless')
firefox = webdriver.Firefox(options=options)

firefox.get('https://quotes.toscrape.com/')

def scrape(url):
  quote = firefox.find_element(By.CLASS_NAME, 'text')
  author = firefox.find_element(By.CLASS_NAME, 'author')

  return { 'quote': quote.text, 'author': author.text}

print(scrape('https://quotes.toscrape.com/'))
