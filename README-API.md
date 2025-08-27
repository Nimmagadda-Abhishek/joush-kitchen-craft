# Joush Kitchen Craft API (server)

## Quick start
1. Copy env: `cp server/.env.example server/.env` and fill values
2. Start Postgres and set `DATABASE_URL`
3. Install and run:
   - `cd server`
   - `npm install`
   - `npm run prisma:generate`
   - `npm run prisma:migrate`
   - `npm run prisma:seed`
   - `npm run dev`

API will run at `http://localhost:4000`.

## Auth
- Google: `GET /api/auth/google`
- GitHub: `GET /api/auth/github`
- Callback URLs are `/api/auth/google/callback` and `/api/auth/github/callback`

## Products
- `GET /api/products`
- `GET /api/products/:slug`

## Cart (requires auth)
- `GET /api/cart/me`
- `POST /api/cart/me/items` { productId, variantId?, quantity? }
- `DELETE /api/cart/me/items/:id`

## Deploy (Vercel)
- `vercel.json` routes `/api/*` to `api/index.ts` which imports Express app
- Set env in Vercel: DATABASE_URL, JWT_SECRET, GOOGLE/GITHUB client ids
- Run `prisma migrate deploy` as a post-deploy step or manually