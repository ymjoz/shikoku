FROM node:lts

COPY . /app
WORKDIR /app


RUN yarn install
RUN yarn build
RUN yarn generate
CMD yarn start