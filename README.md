# Search Engine XLS

> search data from xls without db

## Feature

- 📃search from xls file without db
- ⚡speed up search with redis
- 📱support dark mode
- 🤟ssr with nuxt
- 🚀bff with koa
- 📦deploy with docker

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn dev

# build for production and launch server
yarn build
yarn start

# generate static project
yarn generate
```

## Docker Deploy

### Prepare
```bash
# create docker bridge network
docker network create app-net

# pull redis image
docker pull redis

# run redis
docker run -d --name redis --network app-net --restart always redis

# pull image
docker pull ccr.ccs.tencentyun.com/nuxt/search-engine-xls:1.0.1

# run app
docker run -d --name search-app --network app-net --link redis:redis -p 3000:3000 --restart always cr.ccs.tencentyun.com/nuxt/search-engine-xls:1.0.1

# check server whether started
docker logs -f search-app
```

### Build docker image
```bash
# build for production and docker image
make build

# push docker image
make push
```
