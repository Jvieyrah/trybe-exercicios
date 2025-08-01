
import express, {NextFunction, Request, Response } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';
import BooksRoutes from './routes/books.routes';

const app = express();

app.use(express.json());

const PORT = 7777;

app.get('/', (req: Request, res: Response) => {
  res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use(BooksRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const { name, message, details } = err as any;
    console.log(`name: ${name}`);
  
    switch (name) {
      case 'ValidationError':
        res.status(400).json({ message: details[0].message });
        break;
      case 'NotFoundError':
        res.status(404).json({ message });
        break;
      case 'ConflictError':
        res.status(409).json({ message });
        break;
      default:
        console.error(err);
        res.sendStatus(500);
    }
  
    next();
  });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});