from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
thumb_url_selector = "div.image_container a::attr(href)"
for url in selector.css(thumb_url_selector).getall():
    thumb_url_request = requests.get("http://books.toscrape.com/" + url)
    thumb_url_selector = Selector(text=thumb_url_request.text)
    book_title = thumb_url_selector.css("div.product_main h1::text").get()
    price = thumb_url_selector.css(".price_color::text").get()
    print(book_title, price)
