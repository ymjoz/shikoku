# Nuxt 3 Minimal Starter

Hola shikoku.

## Setup

Make sure to install the dependencies:

```bash
# build docker image
cd ~/shikoku/image/frontend
docker build --network=host --force-rm -t t4dk/skkui:latest - < dockerfile-dev
docker build --network=host --force-rm -t t4dk/skkui-img:0.0.1 -f - . < Dockerfile
docker run --rm -it \
    --name skkui-dev-1 \
    -v ~/shikoku/image/frontend:/app \
    -p 17281:3001 \
    t4dk/skkui \
    sh


```

## Development Server

Start the development server on `http://localhost:3001`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
