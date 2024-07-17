# README

## Setup

Make sure to install the dependencies:

```bash
# build docker image
cd ~/shikoku/image/frontend2
docker build --network=host --force-rm -t tom4dock/berryui:latest - < dockerfile-dev
docker run --rm -it \
    --name berryui-dev-1 \
    -v ~/shikoku/image/frontend2:/app \
    -p 17282:3002 \
    tom4dock/berryui \
    sh


```