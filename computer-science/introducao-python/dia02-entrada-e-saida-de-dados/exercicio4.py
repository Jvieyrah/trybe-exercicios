import json
import csv

with open("books.json") as json_file:
    books = json.load(json_file)

def determine_percentage(books):
    total = len(books)
    group_by_category = {}
    data = {}
    for book in books:
        categories = book["categories"]
        for category in categories:
            if category not in group_by_category:
              group_by_category[category] = 0
            group_by_category[category] += 1
    for category in group_by_category:
         data[category] = (group_by_category[category] / total) * 100    
    return data

with open("books_percentages.csv", "w") as result_file:
    writer = csv.writer(result_file)
    headers = [
        "Categoria",
        "Porcentagem",
    ]
    writer.writerow(headers)
    for category, percentage in determine_percentage(books).items():
        row = [
            category,
            percentage,
        ]
        writer.writerow(row)






