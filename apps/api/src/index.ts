import env from './lib/env';
import app from './server';

app.listen(env.PORT, () =>
  console.log(`Server is running on port: ${env.PORT}`),
);

export * from './lib';
export * from './db';
