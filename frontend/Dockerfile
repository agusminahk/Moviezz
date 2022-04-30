FROM node:14

WORKDIR /app

COPY . /app

ENV REACT_APP_REST_BACK=http://localhost:8080/api

RUN npm install

RUN npm i -g serve

RUN npm run build

CMD [ "serve", "-s", "build" ]