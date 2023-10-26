FROM node:lts-alpine3.18

WORKDIR /app

COPY package*.json .
COPY .eslintrc.json .

RUN npm install

COPY /src ./src

CMD ["npm", "start"]
