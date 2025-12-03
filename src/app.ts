import path from "path";
import ENV from "./env";

import express, {Request, Response, NextFunction} from 'express';
// import tenantRouter from './routes/tenant.routes';
import studentRouter from './routes/students';
import authRouter from "./routes/auth/auth.routes";
import { AuthMiddleware } from "./middlewares/auth.middleware";
import bodyParser from "body-parser";
import { apiResponseMiddleware } from "./middlewares/apiResponse.middleware";

const app = express();


app.use(bodyParser.urlencoded({ extended: true })); // parses URL-encoded forms
app.use(apiResponseMiddleware); // important
app.use(express.json()); // built-in body parser for JSON
app.use("/auth", authRouter);

app.use('/students', AuthMiddleware.authenticateJWT, studentRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(ENV.PORT, () => {
  console.log(`Server running on http://localhost:${ENV.PORT}`);
});
