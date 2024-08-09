PRJ_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"/..
cd ${PRJ_DIR}

docker run \
    --name ctn_skkapi \
    -p 31244:80 \
    -v ${PRJ_DIR}/app:/app/app \
    --rm \
    -it \
    --entrypoint bash \
    t4dk/shikoku-api:`grep -Po "(?<=['\"])[0-9a-zA-Z\.\-]+" app/version.py`-src

