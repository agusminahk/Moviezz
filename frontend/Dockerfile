FROM node:14

WORKDIR /app

COPY . /app

ENV REACT_APP_REST_BACK=/api

RUN npm install

EXPOSE 3000 

CMD [ "npm", "run", "start" ]