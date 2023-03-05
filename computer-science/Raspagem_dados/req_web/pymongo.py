from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
# o banco de dados catalogue será criado se não existir
db = client.catalogue
# a coleção books será criada se não existir
students = db.books
book = {
    "title": "A Light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id

# or
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)
print(document_id)
client.close()  # fecha a conexão com o banco de dados
