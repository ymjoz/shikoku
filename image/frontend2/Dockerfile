FROM node:lts

COPY package.json /app/package.json
COPY . /app
WORKDIR /app

RUN yarn install
# RUN yarn generate
RUN yarn build

# CMD ["yarn", "start"]
CMD ["yarn", "preview"]