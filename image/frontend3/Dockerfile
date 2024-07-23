FROM node:lts

# COPY package.json /app/package.json
COPY . /app
WORKDIR /app

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm generate
RUN pnpm build
# RUN pnpm preview

CMD ["pnpm", "start"]