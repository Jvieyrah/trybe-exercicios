"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const statusCodes_1 = __importDefault(require("../statusCodes"));
const properties = ['title', 'price', 'author', 'isbn'];
function validateProperties(book) {
    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        console.log(property[i]);
        if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
            return [false, properties[i]];
        }
    }
    return [true, null];
}
function validateValues(book) {
    const entries = Object.entries(book);
    for (let i = 0; i < entries.length; i++) {
        const [property, value] = entries[i];
        console.log(entries[i]);
        if (!value) {
            return [false, property];
        }
    }
    return [true, null];
}
function validationBook(req, res, next) {
    const book = req.body;
    let [valid, property] = validateProperties(book);
    if (!valid) {
        res.status(statusCodes_1.default.BAD_REQUEST)
            .send(` o campo ${property} é obrigatório`);
    }
    [valid, property] = validateValues(book);
    if (!valid) {
        res.status(statusCodes_1.default.BAD_REQUEST)
            .send(` o campo ${property} não pode ser vazio`);
    }
    next();
}
exports.default = validationBook;
