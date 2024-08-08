# hakodate-js

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

## Docker image

```bash
# dev build docker image
cd ~/shikoku/image/hakodate-js
docker build --network=host --force-rm -t t4dk/hakodate:latest - < dockerfile-dev
docker run --rm -it \
    --name hakodate-dev-1 \
    -v ~/shikoku/image/hakodate-js:/app \
    -p 17286:5174 \
    t4dk/hakodate \
    sh


```

```bash
# production build docker image

cd ~/shikoku/image/hakodate-js
docker build --network=host --force-rm -t t4dk/hakodate-img:0.0.1 -f - . < Dockerfile


```
