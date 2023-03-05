import requests
from parsel import Selector

httpbin = requests.get('https://httpbin.org/encoding/utf8')

httpbin_text = Selector(text=httpbin.text).get()

print(httpbin_text)
