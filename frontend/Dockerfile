FROM node:14

WORKDIR /app

COPY . /app

ENV REACT_APP_REST_BACK=http://localhost:8080/api

RUN npm install

EXPOSE 5000 

CMD [ "npm", "run", "start" ]