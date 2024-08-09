# 第一阶段：构建阶段
FROM node:22-alpine AS builder

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY pnpm-lock.yaml ./
COPY package.json ./

# 安装依赖
RUN pnpm install --frozen-lockfile

# 复制项目文件
COPY . .

# 构建 Nuxt 3 项目
RUN pnpm run build

# 第二阶段：运行阶段
FROM node:22-alpine

# 安装 pnpm
RUN npm install -g pnpm

# 设置工作目录
WORKDIR /app

# 复制构建阶段的产物
COPY --from=builder /app/.output /app/.output

# 安装仅运行时需要的依赖
COPY pnpm-lock.yaml ./
COPY package.json ./
# RUN pnpm install --prod --frozen-lockfile
RUN pnpm install --frozen-lockfile

# 暴露应用运行的端口
EXPOSE 3000

# 启动 Nuxt 3 应用
CMD ["node", ".output/server/index.mjs"]
