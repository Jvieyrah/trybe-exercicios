import requests
import parsel

base_url = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
page = requests.get(base_url)
selector = parsel.Selector(page.text)
flags = selector.css("div.thumb > div > a > img::attr(src)").getall()
for flag in flags:
    print(flag)

# import requests
# from parsel import Selector

# BASE_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

# response = requests.get(BASE_URL)
# selector = Selector(response.text)
# flags_url = selector.css(".gallerybox .image img::attr(src)").getall()
# for img_url in flags_url:
#     filename = img_url.split("/")[-1]
#     image_content = requests.get("https:" + img_url).content
#     with open("./country_flags/" + filename, "wb") as file:
#         file.write(image_content)
