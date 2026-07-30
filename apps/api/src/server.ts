import express, { type Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib';
import { isTest } from './lib/env';
import { trustedOrigins } from './utils/helper';

const app: Express = express();

app.use('/api/auth/{*any}', toNodeHandler(auth));

app.use(
  cors({
    origin: trustedOrigins(),
    credentials: true,
  }),
);
app.use(helmet());
app.use(morgan('dev', { skip: () => isTest() }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  return res.json({ message: 'health check' });
});

export default app;
