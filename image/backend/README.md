# README

[SKK]

## 簡介

SKK API server.

## Docker 安裝與使用

### build-docker-image.sh for X86

### build-docker-image2.sh for ARM64 ARCH

1. build docker images: `LICENSE_MODE=bin bash script/build-docker-image.sh`
   - LICENSE_MODE 可設定為: [`dongle`, `cloud`, `date`, `bin`, `src`]
   - 預設為`LICENSE_MODE=src`
   - 產出之 docker image name 為: `t4dk/shikoku-api:{version}`
2. run container (執行前先確認 script 帶的環境變數是否要修改)
   - 開發模式: `bash script/run-dev-mode.sh`
     - 進 container 後，較為正式的開啟方式: `/start.sh`
     - 進 container 後，code-hot-reload 模式: `/start-reload.sh`
       - code 一修改程式會自動 reload，適合開發中使用
   - 正式模式: `bash script/run-production-mode.sh`

## 壓版號

- `vim app/version.py`
