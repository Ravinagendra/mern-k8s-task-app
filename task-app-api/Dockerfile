FROM node:alpine

RUN apk update \
    && apk add --no-cache ca-certificates \
    && update-ca-certificates

USER node

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY src src

CMD ["npm", "start"]