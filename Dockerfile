# Dockerfile
FROM node:9-alpine

# Or whatever Node version/image you want
WORKDIR '/var/www/app'

COPY package*.json ./

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install -g @angular/cli \
    && npm install \
    && apk del .gyp

COPY . .

EXPOSE 4200

CMD [ "ng", "serve", "--host", "0.0.0.0"]
