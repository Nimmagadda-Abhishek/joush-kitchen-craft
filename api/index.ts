import { createApp } from './server';

const app = createApp();

// Vercel edge/serverless friendly export
export default app;

// Local dev support
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT ? Number(process.env.PORT) : 4000;
  app.listen(port, () => {
    console.log(`[server] listening on http://localhost:${port}`);
  });
}