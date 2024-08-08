# 使用官方 Node.js LTS 作為基礎映像
FROM node:lts

# 設置工作目錄
WORKDIR /app

# 安裝 pnpm
RUN npm install -g pnpm

# 複製所有其他檔案
COPY . /app

# 安裝依賴
RUN pnpm install

# 執行其他必要的命令，如生成和構建
RUN pnpm build

CMD ["pnpm", "start"]