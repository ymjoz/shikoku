# FROM node:lts

# WORKDIR /app

# COPY . /app

# RUN yarn install
# # RUN yarn generate
# RUN yarn build

# # CMD ["yarn", "start"]
# CMD ["yarn", "preview"]


# build stage
FROM node:21-bullseye-slim AS build-stage
WORKDIR /app
COPY ./ .
RUN sed -i 's/VITE_API_URL=.*/VITE_API_URL=RUN_TIME_REPLACE_VITE_API_URL/g' .env
RUN yarn install && yarn build

# production stage
FROM nginx:stable-alpine AS production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY entrypoint.sh /usr/share/nginx/
RUN chmod +x /usr/share/nginx/entrypoint.sh
ENTRYPOINT ["/usr/share/nginx/entrypoint.sh"]
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 5000
