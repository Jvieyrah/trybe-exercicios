from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
for thumnail in selector.css('img.thumbnail'):
    print(thumnail.attrib['src'])
