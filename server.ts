import express, { Request, Response } from 'express';

import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript with Node.js!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
