import express from 'express';
// import { PrismaClient } from '@prisma/client';
// import { headstart } from './startup/headstart'
import {connectDB} from "./dbCoonection"
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://tasktodouser:tasktodouser@tasktodo.ir517qa.mongodb.net/?retryWrites=true&w=majority&appName=TaskToDo";

import { authenticationMiddleware } from './src/middleware/AuthenticationMiddleware';
// import { authorisationMiddleware } from './src/middleware/AuthenticationMiddleware';
const app = express();
const port = 3000;
connectDB();

app.use(authenticationMiddleware);
app.use("/user",require("./src/loginController/loginController"))

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});