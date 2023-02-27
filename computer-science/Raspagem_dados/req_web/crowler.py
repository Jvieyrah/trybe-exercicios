import requests

response = None
try:
    response = requests.get('https://httpbin.org/delay/10', timeout=2)
except requests.Timeout:
    response = requests.get('https://httpbin.org/delay/1', timeout=2)
finally:
    if response is not None:
        print(response.status_code)
    else:
        print("Error: no response received")
