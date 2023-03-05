import requests
import parsel

URL_BASE = "http://books.toscrape.com/catalogue/"
response = requests.get(URL_BASE + "the-grand-design_405/index.html")
selector = parsel.Selector(response.text)
title = selector.css(
    "#content_inner > article > div.row > div.col-sm-6.product_main > h1::text").get()
price = selector.css(
    "#content_inner > article > div.row > div.col-sm-6.product_main > p.price_color::text").re(r"£(.*)")[0]
suffix = "...more"
description = selector.css("#content_inner > article > p::text").get()
if description.endswith(suffix):
    description = description[:-len(suffix)]
capa = URL_BASE + selector.css(
    "#product_gallery > div > div > div > img::attr(src)").get()

print(f"{title}, {price}, {description}, {capa}")
