FROM node:lts

COPY . /app
WORKDIR /app

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm build
RUN pnpm generate
RUN pnpm preview

CMD pnpm start