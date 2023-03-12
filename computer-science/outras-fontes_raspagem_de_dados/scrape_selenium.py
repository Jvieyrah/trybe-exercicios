from selenium import webdriver
from selenium.webdriver.firefox.options import Options

# Importa o By
from selenium.webdriver.common.by import By

options = Options()
# Adiciona um argumento passando o parâmetro '--headless'
options.add_argument('--headless')
firefox = webdriver.Firefox(options=options)


firefox.get("https://books.toscrape.com/")

def scrape(url):
    firefox.get(url)

    books = []
    # Itera entre os elementos com essa classe
    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        # Cria dict vazio para guardar os elementos capturados
        new_item = {}

        # Cria uma chave 'title' no dict que vai receber o resultado da busca
        # O título está em uma tag anchor que está dentro de uma tag 'H3'
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        # O trecho do book está em um elemento da classe 'price_color'
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        books.append(new_item)
    return books


all_books = []
url2request = "https://books.toscrape.com/"

next_page_link = (
    firefox.find_element(By.CLASS_NAME, "next")
    .get_attribute("innerHTML")
)

while next_page_link:

      # de outra
    all_books.extend(scrape(url2request))
    try:
        url2request = (
            firefox.find_element(By.CLASS_NAME, 'next')
            .find_element(By.TAG_NAME, 'a').get_attribute('href')
        )
    except NoSuchElementException:
        print("exception handled")
        break


print(all_books)
