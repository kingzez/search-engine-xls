FROM node:13.6.0

LABEL maintainer="Vincent.Mr.W@gmail.com"

WORKDIR /app

ADD . /app/

RUN \
    rm /etc/localtime && \
    ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

RUN yarn
# --prod

ENV NODE_ENV="production"
ENV PORT=3000
ENV REDIS_HOST="127.0.0.1"
ENV REDIS_PORT=6379

EXPOSE 3000
CMD [ "yarn", "start" ]
