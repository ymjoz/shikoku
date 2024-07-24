FROM node:lts

WORKDIR /app

COPY . /app

RUN yarn install
# RUN yarn generate
RUN yarn build

# CMD ["yarn", "start"]
CMD ["yarn", "preview"]