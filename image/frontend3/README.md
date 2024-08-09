# new Shikoku demo project

- [ ] 水火 bu 蓉-App (WIP)
- [ ] Use Dockerfile

## build docker image

```bash
# build docker image
cd ~/shikoku/image/frontend3
docker build --network=host --force-rm -t t4dk/shikokuui:latest - < dockerfile-dev

docker build --network=host --force-rm -t t4dk/shikokuui-img:0.0.6 -f - . < Dockerfile
docker build --network=host --force-rm -t t4dk/shikokuui-img:0.0.5 .

docker run --rm -it \
    --name shikokuui-dev-1 \
    -v ~/shikoku/image/frontend3:/app \
    -p 17283:3003 \
    t4dk/shikokuui \
    sh


```

## build docker image process

```
❯ docker build --network=host --force-rm -t tom4dock/shikokuui-img:0.0.5 .
[+] Building 277.4s (12/12) FINISHED                                                 docker:default
 => [internal] load build definition from Dockerfile                                           0.0s
 => => transferring dockerfile: 353B                                                           0.0s
 => [internal] load metadata for docker.io/library/node:lts                                    1.1s
 => [internal] load .dockerignore                                                              0.0s
 => => transferring context: 2B                                                                0.0s
 => [1/7] FROM docker.io/library/node:lts@sha256:6326b52a508f0d99ffdbfaa29a69380321b215153db6  0.0s
 => => resolve docker.io/library/node:lts@sha256:6326b52a508f0d99ffdbfaa29a69380321b215153db6  0.0s
 => [internal] load build context                                                              5.5s
 => => transferring context: 61.77MB                                                           5.4s
 => CACHED [2/7] WORKDIR /app                                                                  0.0s
 => CACHED [3/7] RUN npm install -g pnpm                                                       0.0s
 => [4/7] COPY . /app                                                                         18.1s
 => [5/7] RUN pnpm install                                                                     1.0s
 => [6/7] RUN pnpm generate                                                                   71.8s
 => [7/7] RUN pnpm build                                                                     152.8s
 => exporting to image                                                                        26.9s
 => => exporting layers                                                                       26.9s
 => => writing image sha256:cc6f19da81c047cd9415bb0ac4f2683c05c4759cd6de8e9d64847bc57b1034de   0.0s
 => => naming to docker.io/tom4dock/shikokuui-img:0.0.5                                        0.0s

```

- 用標準輸入傳遞 Dockerfile，應同時指定構建上下文
- 以下 docker cli 的意思: 使用當前目錄作為構建上下文，並通過標準輸入提供 Dockerfile

```
docker build --network=host --force-rm -t tom4dock/shikokuui-img:0.0.6 -f - . < Dockerfile
[+] Building 289.5s (12/12) FINISHED                                                                                         docker:default
 => [internal] load build definition from Dockerfile                                                                                   0.0s
 => => transferring dockerfile: 353B                                                                                                   0.0s
 => [internal] load metadata for docker.io/library/node:lts                                                                            0.5s
 => [internal] load .dockerignore                                                                                                      0.0s
 => => transferring context: 2B                                                                                                        0.0s
 => [1/7] FROM docker.io/library/node:lts@sha256:6326b52a508f0d99ffdbfaa29a69380321b215153db6f32974835bac71b38fa4                      0.0s
 => => resolve docker.io/library/node:lts@sha256:6326b52a508f0d99ffdbfaa29a69380321b215153db6f32974835bac71b38fa4                      0.0s
 => [internal] load build context                                                                                                      4.2s
 => => transferring context: 9.22MB                                                                                                    4.1s
 => CACHED [2/7] WORKDIR /app                                                                                                          0.0s
 => CACHED [3/7] RUN npm install -g pnpm                                                                                               0.0s
 => [4/7] COPY . /app                                                                                                                 27.6s
 => [5/7] RUN pnpm install                                                                                                             1.0s
 => [6/7] RUN pnpm generate                                                                                                           71.4s
 => [7/7] RUN pnpm build                                                                                                             157.4s
 => exporting to image                                                                                                                27.1s
 => => exporting layers                                                                                                               27.1s
 => => writing image sha256:943cc490c0cd8eb06a4d5f65e25284f79525d7d496c4fae470e305e5931aa384                                           0.0s
 => => naming to docker.io/tom4dock/shikokuui-img:0.0.6

```

# Nuxt 3 + PrimeVue 4 Starter

Build your VUE.js App with Nuxt3 (Nuxt 4 ready). First Class PrimeVUE support. Validation by Formkit.
Based on PrimeVue Styled Theme with Aura Preset.

[![CI](https://github.com/sfxcode/nuxt3-primevue-starter/actions/workflows/main.yml/badge.svg)](https://github.com/sfxcode/nuxt3-primevue-starter/actions/workflows/main.yml)

THX to [antfu / Vitesse Nuxt3](https://github.com/antfu/vitesse-nuxt3) for starter code

## Features

- [Nuxt 3](https://v3.nuxtjs.org) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- [PrimeVue](https://primevue.org/) 4.x with Aura Theme
- [Formkit-PrimeVue](https://formkit-primevue.netlify.app/) PrimeVue Formkit Integration
- [Vite](https://vitejs.dev/) - Instant HMR
- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/antfu/unocss)
- [State Management via Pinia](https://pinia.esm.dev)
- [TipTap](https://tiptap.dev) - Headless Editor
- [Vitest](https://vitest.dev/) - Blazing Fast Unit Test Framework ([Getting started](https://vitest.dev/guide))
- [nuxt-test-utils](https://github.com/nuxt/test-utils) - Support for e2e and unit testing ([Getting started](https://nuxt.com/docs/getting-started/testing))

## Nuxt Modules

- [PrimeVue-Nuxt](https://primevue.org/nuxt/) PrimeVue Nuxt Module
- [Pinia](https://pinia.esm.dev/) - intuitive, type safe, light and flexible Store for Vue.
- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [FormKit](https://formkit.com/) - Validation
- [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine.
- [Content](https://content.nuxtjs.org) - parses .md, .yml, .csv and .json files
- [Images](https://nuxt.com/modules/images) - Optimised images for Nuxt
- [Fonts](https://nuxt.com/modules/fonts) - Plug-and-play custom web font optimization and configuration for Nuxt apps
- [I18n](https://v8.i18n.nuxtjs.org) - Integration with [Vue I18n](https://vue-i18n.intlify.dev/)

## Nuxt PrimeVue configuration

Important: use autoimport false if using primevue formkit validation

```typescript
  primevue: {
  autoImport: false,
    components: {
    exclude: ['Chart', 'Editor'],
  },
  options: {
    theme: {
      preset: Aura,
        options: {
        darkModeSelector: '.dark',
      },
    },
    ripple: true,
  },
},
```

## PrimeVue 3

Nuxt PrimeVue 3 under the [prime3](https://github.com/sfxcode/nuxt3-primevue-starter/tree/prime3) branch of this project

[Starter App on Netlify](https://vite-primevue-starter.netlify.app/)

## Project setup and usage

Install node:

**Latest node LTS version required (20)**
Use node manager like **nvm** to install.

Install pnpm:
[https://pnpm.io/installation](https://pnpm.io/installation)

Install dependencies:

```
pnpm install
```

Run development server:

```
pnpm dev
```

Vitest test runner:

```
pnpm test:unit
```

Build:

```
pnpm build
```

Start Production build:

```
pnpm start
```
