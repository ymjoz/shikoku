PRJ_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"/..
cd ${PRJ_DIR}

docker run \
    --name skk-api-dev-1 \
    -p 31244:80 \
    -v ${PRJ_DIR}/app:/app/app \
    --rm \
    -it \
    --entrypoint bash \
    tom4dock/shikoku-platform-api:`grep -Po "(?<=['\"])[0-9a-zA-Z\.\-]+" app/version.py`-src

