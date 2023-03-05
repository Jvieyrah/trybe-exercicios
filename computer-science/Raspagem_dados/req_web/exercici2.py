import requests
from parsel import Selector

git = requests.get('https://api.github.com/users')

git_users = git.json()
for user in git_users:
    print(user['login'], user['url'])
