
# 使用官方的 Node.js 镜像作为基础镜像
# FROM node:22-alpine AS build
FROM node:22-bullseye-slim AS build-stage

# 设置工作目录
WORKDIR /app

# 安裝 pnpm
RUN npm install -g pnpm

# 复制 package.json 和 package-lock.json (如果有)
COPY package*.json ./

# 安装项目依赖
RUN pnpm install

# 复制项目的所有文件到容器
COPY . .

# 构建 Vite 项目的生产版本
RUN pnpm build

# 使用 Nginx 作为基础镜像来提供静态文件
# FROM nginx:alpine
FROM nginx:stable-alpine AS production-stage

# 复制构建输出的文件到 Nginx 容器中的 /usr/share/nginx/html 目录
COPY --from=build /app/dist /usr/share/nginx/html

# 复制自定义的 Nginx 配置文件（如果有）
# COPY nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
