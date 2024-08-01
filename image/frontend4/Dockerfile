# 使用官方 Nginx 映像作為基礎映像
FROM nginx:alpine

# 複製網站文件到容器中
COPY . /usr/share/nginx/html

# 如果有自定義的 nginx.conf，可以取消下面這行的註釋
# COPY nginx.conf /etc/nginx/nginx.conf

# 暴露 80 端口
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]