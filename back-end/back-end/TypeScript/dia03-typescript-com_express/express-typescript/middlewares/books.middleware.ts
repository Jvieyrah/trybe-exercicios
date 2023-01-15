import { NextFunction, Request, Response } from 'express';
import statusCodes from '../statusCodes';
import Book from '../interfaces/book.interface';

const properties = ['title', 'price', 'author', 'isbn'];

function validateProperties(book: Book): [boolean, string | null] {
for (let i = 0; i < properties.length; i++) {
const property = properties[i];
console.log(property[i]);
if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
    return [false, properties[i]];
  }
}
return [true, null];
}

function validateValues(book: Book): [boolean, string | null] {
const entries = Object.entries(book);
for (let i = 0; i < entries.length; i++) {
    const [property,value] = entries[i];
    console.log(entries[i]);
    if (!value) {
        return [false, property];
    }
}
return [true, null];
}

function validationBook(req: Request, res: Response, next: NextFunction) {
const book = req.body;
let [valid, property] = validateProperties(book);

if (!valid) {
    res.status(statusCodes.BAD_REQUEST)
    .send(` o campo ${property} é obrigatório`,
    );
}

[valid, property] = validateValues(book);

if (!valid) {
    res.status(statusCodes.BAD_REQUEST)
    .send(` o campo ${property} não pode ser vazio`,
    );   
}
next();
}


export default validationBook;