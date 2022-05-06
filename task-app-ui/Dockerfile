FROM node:14.11.0-alpine

RUN apk update \
    && apk add --no-cache ca-certificates \
    && update-ca-certificates

WORKDIR /app
RUN chown node:node /app

COPY package.json package.json
RUN chown -R node:node package.json

COPY src src
RUN chown -R node:node src

COPY public public
RUN chown -R node:node public

USER node

RUN npm install

CMD ["npm", "start"]